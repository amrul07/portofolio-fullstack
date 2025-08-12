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
import {
  AppBar,
  Container,
  IconButton,
  LinearProgress,
  Stack,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useThemeStore } from "@/store/themeStore";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [bg, setBg] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const intervalRef = React.useRef(null);
  // dark mode
  const { darkMode, toggleDarkMode } = useThemeStore();

  // Klik menu
  const handleOnclickMenu = (path) => {
    if (path !== pathname) {
      setLoading(true);
      setProgress(0);

      // Mulai progress naik pelan-pelan
      intervalRef.current = setInterval(() => {
        setProgress((old) => {
          if (old < 90) {
            return old + Math.random() * 10; // naik random biar natural
          }
          return old;
        });
      }, 200);

      router.push(path);
    }
  };

  // Saat halaman baru selesai render
  React.useEffect(() => {
    if (loading) {
      // ke full
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
        clearInterval(intervalRef.current);
      }, 300); // tunggu animasi
    }
  }, [pathname]);
  return (
    <Box sx={{ display: "flex" }}>
      <Stack sx={{ width: "100%" }}>
        {loading && (
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: "4px",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 9999,
              backgroundColor: darkMode ? "#454e56" : "#fff",
              "& .MuiLinearProgress-bar": {
                backgroundColor: darkMode ? "#27AE60" : "#3b5998",
              },
            }}
          />
        )}
      </Stack>
      <CssBaseline />
      {/* dark mode */}
      <Stack
        sx={{
          position: "fixed",
          right: { xs: "8%", md: "4%", lg: "1%" },
          zIndex: 999,
        }}
      >
        <Stack
          mt={3}
          sx={{
            borderRadius: "50%",
            backgroundColor: "#454e56",
            width: "55px",
            height: "55px",

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
        {/* navbar tampilan desktop */}
        <List sx={{ mt: 14, display: { xs: "none", md: "list-item" } }}>
          {NavbarMenu.map((item) => {
            const isActive = item.router === pathname;
            const activeBgColor = darkMode ? "#27AE60" : "#3b5998"; // background menu navbar ketika aktif
            const activeColor = darkMode ? "#454e56" : "#FFF"; // color menu navbar ketika aktif
            const inactiveBgColor = "#454e56"; // background menu navbar tdk aktif
            const inactiveColor = "#b2becd"; // color menu  navbar tdk aktif

            return (
              <ListItem key={item.id} sx={{ height: "75px", paddingLeft: 0 }}>
                <ListItemButton
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: isActive ? activeBgColor : inactiveBgColor,
                    color: isActive ? activeColor : inactiveColor,
                    fontSize: "1.3rem",
                    width: "55px",
                    height: "55px",
                    "&:hover": {
                      backgroundColor: darkMode ? "#27AE60" : "#3b5998",
                      color: darkMode ? "#454e56" : "#FFF",
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
      </Stack>
      {/* navbar tampilan dekstop */}
      {/* <Drawer
        sx={{
          display: { xs: "none", md: "flex" },
          width: drawerWidth,
          
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            backgroundColor: darkMode ? "#fff" : "#191d2b",
            // backgroundColor: "red",
            border: "none",
            width: drawerWidth,
            boxSizing: "border-box",
            alignItems: "start",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        
      </Drawer> */}

      {/* navbar tampilan mobile */}
      <Stack
        position="fixed"
        sx={{
          display: { xs: "flex", md: "none" },
          top: "auto",
          bottom: 0,
          border: "none",
          backgroundColor: darkMode ? "#fff" : "#2a2e35",
          width: "100%",
          zIndex: 999,
        }}
      >
        <Container>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              py: 2,
            }}
          >
            {NavbarMenu.map((item) => {
              const isActive = item.router === pathname;
              const activeBgColor = darkMode ? "#27AE60" : "#3b5998"; // background menu navbar ketika aktif
              const activeColor = darkMode ? "#454e56" : "#FFF"; // color menu navbar ketika aktif
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
