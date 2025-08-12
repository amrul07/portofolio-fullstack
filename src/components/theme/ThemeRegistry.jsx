"use client";

import { useEffect, useMemo } from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { useThemeStore } from "@/store/themeStore";

export default function ThemeRegistry({ children }) {
  const { darkMode } = useThemeStore();

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: darkMode ? "light" : "dark",
      },
    });
  }, [darkMode]);

  useEffect(() => {
    // Atur warna background <body> berdasarkan mode
    document.body.style.backgroundColor =
      theme.palette.mode === "dark" ? "#191d2b" : "#ffffff"; // sesuaikan warna light jika perlu
  }, [theme.palette.mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
