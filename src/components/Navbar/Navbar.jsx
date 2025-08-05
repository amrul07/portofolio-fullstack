"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { NavbarMenu } from "@/values/Constant";
import { drawerWidth } from "@/values/Constant";
import { MdContrast } from "react-icons/md";
import { AppBar, Container, IconButton, Stack } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useThemeStore } from "@/store/themeStore";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [bg, setBg] = React.useState("");

  // dark mode
  const { darkMode, toggleDarkMode } = useThemeStore();

  const theme = useTheme(); // Dapatkan theme dari context MUI
  const isDarkMode = theme.palette.mode === "dark";

  // ketika menu navbar di klik
  const handleOnclickMenu = async (item) => {
    if (item !== "") {
      router.push(item);
    } else {
      try {
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* dark mode */}
      <Stack
        mt={3}
        sx={{
          position: "absolute",
          right: 45,
          borderRadius: "50%",
          backgroundColor: "#454e56",
          width: "55px",
          height: "55px",
          zIndex: 9999,
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={toggleDarkMode}
      >
        <MdContrast
          style={{
            margin: "auto",
            color: "#b2becd",
            fontSize: "1.5rem",
          }}
        />
      </Stack>
      {/* navbar tampilan dekstop */}
      <Drawer
        sx={{
          display: { xs: "none", md: "flex" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            border: "none",
            width: drawerWidth,
            boxSizing: "border-box",
            alignItems: "center",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <List sx={{ mt: 14 }}>
          {NavbarMenu.map((item) => {
            const isActive = item.router === pathname;
            const activeBgColor = isDarkMode ? "#3b5998" : "#27AE60"; // background menu navbar ketika aktif
            const activeColor = isDarkMode ? "#FFF" : "#454e56"; // color menu navbar ketika aktif
            const inactiveBgColor = "#454e56"; // background menu navbar tdk aktif
            const inactiveColor = "#b2becd"; // color menu  navbar tdk aktif

            return (
              <ListItem
                key={item.id}
                sx={{
                  height: "75px",
                }}
              >
                <ListItemButton
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: isActive ? activeBgColor : inactiveBgColor,
                    color: isActive ? activeColor : inactiveColor,
                    fontSize: "1.3rem",
                    width: "55px",
                    height: "55px",
                    "&:hover": {
                      backgroundColor: isDarkMode ? "#3b5998" : "#27AE60",
                      color: isDarkMode ? "#FFF" : "#454e56",
                    },
                  }}
                  onClick={() => handleOnclickMenu(item.router)}
                >
                  {item.icon}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      {/* navbar tampilan mobile */}
      <Stack
        position="fixed"
        sx={{
          display: { xs: "flex", md: "none" },
          top: "auto",
          bottom: 0,
          border: "none",
          backgroundColor: "#2a2e35",
          width: "100%",
        }}
      >
        <Container>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              p: 2,
            }}
          >
            {NavbarMenu.map((item) => {
              const isActive = item.router === pathname;
              const activeBgColor = isDarkMode ? "#3b5998" : "#27AE60"; // background menu navbar ketika aktif
              const activeColor = isDarkMode ? "#FFF" : "#454e56"; // color menu navbar ketika aktif
              const inactiveBgColor = "#454e56"; // background menu navbar tdk aktif
              const inactiveColor = "#b2becd"; // color menu  navbar tdk aktif
              return (
                <Stack
                  key={item.id}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    backgroundColor: isActive ? activeBgColor : inactiveBgColor,
                    color: isActive ? activeColor : inactiveColor,
                    fontSize: "1.3rem",
                    width: "55px",
                    height: "55px",
                  }}
                  onClick={() => handleOnclickMenu(item.router)}
                >
                  {item.icon}
                </Stack>
              );
            })}
          </Stack>
        </Container>
      </Stack>
    </Box>
  );
}
