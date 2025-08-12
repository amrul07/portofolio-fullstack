"use client";
import { Typography } from "@mui/material";
import React from "react";
import { Poppins } from "./Poppins";
import { useThemeStore } from "@/store/themeStore";
import "./style.css";
import { styled } from "@mui/material/styles";

export const Span = styled("span")(({ theme }) => ({
  fontFamily: "Poppins",
  // lineHeight: "2rem",
}));

export default function Title({ light, dark, fsXs, fsMd, display }) {
  const { darkMode } = useThemeStore();
  return (
    <Poppins
      className="poppins"
      sx={{
        fontSize: { xs: fsXs, md: fsMd },
        fontWeight: 700,
        color: darkMode ? `#454e56` : "#fff",
      }}
    >
      {light}
      <Span
        sx={{
          color: darkMode ? "#27AE60" : `#3b5998`,
          fontSize: { xs: fsXs, md: fsMd },
          fontWeight: 700,
          marginLeft: "10px",
          display: { xs: display, md: "inline" },
        }}
      >
        {dark}
      </Span>
    </Poppins>
  );
}
