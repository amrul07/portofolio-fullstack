'use client';

import { useEffect, useMemo } from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { useThemeStore } from '@/store/themeStore';

export default function ThemeRegistry({ children }) {
  const { darkMode } = useThemeStore();

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    });
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
