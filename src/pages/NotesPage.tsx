import React, { useEffect, useState } from "react";
import { Trash2, Edit3, Plus, Check, X, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useNotesStore } from "../store/notesStore";
import { useIsDarkMode } from "../store/themeStore";
import {
  NotesContainer,
  NotesGrid,
  NoteCard,
  InputArea,
  StyledInput,
  StyledTextArea,
  ActionBtn,
  HeaderRow
} from "./NotesPage.styled";

const NotesPage: React.FC = () => {
  const isDarkMode = useIsDarkMode();
  const { notes, isLoading, fetchNotes, createNote, updateNote, deleteNote } = useNotesStore();

  // Local state for workspace form control elements
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    createNote(title, description);
    setTitle("");
    setDescription("");
  };

  const startEdit = (id: string, currentTitle: string, currentContent: string) => {
    setEditingId(id);
    setEditTitle(currentTitle);
    setEditDescription(currentContent);
  };

  const handleSaveUpdate = (id: string) => {
    updateNote(id, editTitle, editDescription);
    setEditingId(null);
  };

  return (
    <NotesContainer $isDark={isDarkMode}>
      <HeaderRow>
        <Link to="/" className="back-link">
          <ChevronLeft size={16} /> Back
        </Link>
       
      </HeaderRow>

      {/* Note Formulation Control Desk Input Section */}
      <InputArea onSubmit={handleSubmit} $isDark={isDarkMode}>
        <StyledInput
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          $isDark={isDarkMode}
        />
        <StyledTextArea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          $isDark={isDarkMode}
          rows={3}
        />
        <button type="submit" className="add-btn">
          <Plus size={16} /> Add Note
        </button>
      </InputArea>

      {/* Loading Fallback Indicators */}
      {isLoading && notes.length === 0 && (
        <div className="text-center font-['Poppins'] text-sm opacity-60">Synchronizing data stream indexes...</div>
      )}

      {/* Primary Execution Card Stack Deck */}
      <NotesGrid>
        {notes.map((note) => (
          <NoteCard key={note._id} $isDark={isDarkMode}>
            {editingId === note._id ? (
              <>
                <StyledInput
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  $isDark={isDarkMode}
                  className="mb-2"
                />
                <StyledTextArea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  $isDark={isDarkMode}
                  rows={4}
                />
                <div className="flex gap-2 mt-4 justify-end" style={{ display: 'inline-flex'}}>
                  <ActionBtn onClick={() => handleSaveUpdate(note._id)} color="#22c55e">
                    <Check size={14} />
                  </ActionBtn>
                  <ActionBtn onClick={() => setEditingId(null)} color="#ef4444">
                    <X size={14} />
                  </ActionBtn>
                </div>
              </>
            ) : (
              <>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
                <div className="card-footer">
                  <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                  <div className="flex gap-1" style={{ display: 'inline-flex'}}>
                    <ActionBtn onClick={() => startEdit(note._id, note.title, note.description)} color="#f472b6">
                      <Edit3 size={14} />
                    </ActionBtn>
                    <ActionBtn onClick={() => deleteNote(note._id)} color="#ef4444">
                      <Trash2 size={14} />
                    </ActionBtn>
                  </div>
                </div>
              </>
            )}
          </NoteCard>
        ))}
      </NotesGrid>
    </NotesContainer>
  );
};

export default NotesPage;