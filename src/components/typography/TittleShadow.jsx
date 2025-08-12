"use client";
import { useThemeStore } from "@/store/themeStore";
import React from "react";
import { Poppins } from "./Poppins";

export default function TittleShadow({ text,fsXs,fsMd,fsSm }) {
  const { darkMode } = useThemeStore();
  return (
    <Poppins
      sx={{
        position: 'absolute',
        top: "50%",
        left: "50%",
        color: darkMode ? "#f8f8f8" : "#2a2e35",
        zIndex: -1,
        transform: `translate(-50%, -50%)`,
        fontWeight: 800,
        fontSize: {xs: fsXs,sm: fsSm,md: fsMd},
        // backgroundColor: "red"

      }}
    >
      {text}
    </Poppins>
  );
}
