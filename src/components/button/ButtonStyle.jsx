// import { Button } from "@mui/material";
// import React from "react";
// import { FaDownload } from "react-icons/fa";

// export default function ButtonStyle() {
//   return (
//     <Button
//       sx={{
//         padding: "0px 2rem",
//         borderRadius: "30px",
//         color: "inherit",
//         fontWeight: 600,
//         position: "relative",
//         border: `1px solid #3b5998`,
//         display: "flex",
//         alignSelf: "flex-start",
//         alignItems: "center",
//         overflow: "hidden",
//         textTransform: 'none',
//         fontSize: '1.1rem',
//         "&:before": {
//             // content: "",
//           position: "absolute",
//           top: 0,
//           right: 0,
//           transform: `translateX(100%)`,
//           transition: `all 0.4s ease-out`,
//           zIndex: -1,
//         },
//         "&:hover:before": {
//           width: "100%",
//           height: "100%",
//           backgroundColor: "#3b5998",
//           transform: `translateX(0)`,
//           transition: `all 0.4s ease-out`,
//         },
//         "&:hover": {
//           transition: `all 0.4s ease-out`,
//         },
//       }}
//       variant="outlined"
//       endIcon={<FaDownload />}
//     >
//       Download CV
//     </Button>
//   );
// }

"use client";

import { Button, Typography, Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { FaDownload } from "react-icons/fa";

const StyledButton = styled(Button)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 0px 0px 35px",
  // padding: "0 2rem",
  borderRadius: "30px",
  overflow: "hidden",
  backgroundColor: "transparent",
  color: "#fff",
  textTransform: "none",

  //   fontWeight: 900,
  fontSize: "1rem",
  transition: "background 0.5s ease",
  width: "fit-content",
  gap: "30px",
  fontFamily: "Poppins",
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  borderRadius: "50%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function DownloadCVButton() {
  const theme = useTheme(); // Dapatkan theme dari context MUI
  const isDarkMode = theme.palette.mode === "dark";
  return (
    <StyledButton
      sx={{
        border: isDarkMode ? `1px solid #3b5998` : `1px solid #27AE60`,
        "&:hover": {
          backgroundColor: isDarkMode ? "#3b5998" : "#27AE60",
          backgroundImage: isDarkMode
            ? `linear-gradient(to left, #3b5998 50%, transparent 50%)`
            : `linear-gradient(to left, #27AE60 50%, transparent 50%)`,
          backgroundSize: "200% 100%",
          backgroundPosition: "right bottom",
          color: "#fff",
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 600,
          color: isDarkMode ? "#fff" : "#454e56",
        }}
        component="span"
      >
        Download CV
      </Typography>
      <IconWrapper
        sx={{
          backgroundColor: isDarkMode ? "#3b5998" : "#27AE60",
          color: isDarkMode ? "#fff" : "#454e56",
        }}
      >
        <FaDownload fontSize="large" />
      </IconWrapper>
    </StyledButton>
  );
}
