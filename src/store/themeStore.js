// store/themeStore.js
import { useTheme } from "@mui/material/styles";
import { create } from "zustand";

export const useThemeStore = create((set) => ({
  // theme: useTheme(), // Dapatkan theme dari context MUI
  // isDarkMode: theme.palette.mode === "dark", // cek dark mode
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
