"use client";
import { useThemeStore } from "@/store/themeStore";
import React from "react";
import { Poppins } from "./Poppins";

export default function Description({ text }) {
  const { darkMode } = useThemeStore();
  return (
    <Poppins
      sx={{
        fontSize: "1.1rem",
        color: darkMode ? "#6c7983" : "#dbe1e8",
        lineHeight: "2rem",
      }}
    >
      {text}
    </Poppins>
  );
}
