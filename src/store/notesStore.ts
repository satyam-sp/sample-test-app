import { create } from "zustand";

export interface Note {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
}

interface NotesState {
  notes: Note[];
  isLoading: boolean;
  error: string | null;
  fetchNotes: () => Promise<void>;
  createNote: (title: string, description: string) => Promise<void>;
  updateNote: (id: string, title: string, description: string) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
}

const API_URL = "http://localhost:3000/api/notes";

export const useNotesStore = create<NotesState>((set, get) => ({
  notes: [],
  isLoading: false,
  error: null,

  fetchNotes: async () => {
    set({ isLoading: true, error: null });
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to load notes data schema");
      const data = await res.json();
      set({ notes: data, isLoading: false });
    } catch (err: any) {
      set({ error: err.message, isLoading: false });
    }
  },
  
  createNote: async (title, description) => {
    set({ isLoading: true });
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
      if (!res.ok) throw new Error("Failed to append structural note instance");
      const newNote = await res.json();
      set({ notes: [newNote, ...get().notes], isLoading: false });
    } catch (err: any) {
      set({ error: err.message, isLoading: false });
    }
  },

  updateNote: async (id, title, description) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
      if (!res.ok) throw new Error("Failed to alter specific execution node");
      const updatedNote = await res.json();
      set({
        notes: get().notes.map((n) => (n._id === id ? updatedNote : n)),
      });
    } catch (err: any) {
      set({ error: err.message });
    }
  },

  deleteNote: async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to eliminate note identity entry");
      set({ notes: get().notes.filter((n) => n._id !== id) });
    } catch (err: any) {
      set({ error: err.message });
    }
  },
}));