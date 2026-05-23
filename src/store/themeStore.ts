import { create } from "zustand";

interface ThemeState {
  isDarkMode: boolean;
}

// 1. Primitive reactive store hook
export const useThemeStore = create<ThemeState>(() => ({
  isDarkMode: false,
}));

// 2. Standalone action handlers separated cleanly
const { setState, getState } = useThemeStore;

export const toggleTheme = () => {
  setState({ isDarkMode: !getState().isDarkMode });
};

export const useIsDarkMode = () => useThemeStore((state) => state.isDarkMode);