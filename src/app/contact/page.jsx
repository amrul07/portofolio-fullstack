"use client";
import Navbar from "@/components/Navbar/Navbar";
import { Poppins } from "@/components/typography/Poppins";
import Title from "@/components/typography/Title";
import TittleShadow from "@/components/typography/TittleShadow";
import { useThemeStore } from "@/store/themeStore";
import { ContactIcon, ContactList } from "@/values/Constant";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
import ContactLogic from "./ContactLogic";
import { motion } from "framer-motion";
import { useAnimationStore } from "@/store/animationStore";

export default function Contact() {
  const { darkMode } = useThemeStore();
  const { func } = ContactLogic();
  const { containerVariants, itemVariants, iconVariants } = useAnimationStore();

  return (
    <Box sx={{ pb: { xs: 15, md: 6 } }}>
      <Navbar />
      <Stack mt={10}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            textAlign: "center",
            position: "relative",
            marginTop: "16px",
          }}
        >
          <Title
            light={"CONTACT"}
            dark={"ME"}
            fsMd={"4rem"}
            fsXs={"2.8rem"}
            display={"inline"}
          />
          <TittleShadow text={"CONTACT"} fsMd={"5.5rem"} fsXs={"3.7rem"} />
        </motion.div>

        <Container>
          <Stack sx={{ mt: { xs: 6, md: 10 }, px: { xs: 2, md: 7 } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Poppins
                sx={{
                  color: darkMode ? "#454e56" : "#fff",
                  fontWeight: "bold",
                  fontSize: "1.9rem",
                }}
              >
                CONTACT ME HERE
              </Poppins>
              <Poppins sx={{ color: darkMode ? "#454e56" : "#fff", my: 3 }}>
                Is there anything I can help?
              </Poppins>
            </motion.div>

            {/* Contact List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {ContactList &&
                ContactList.map((item) => (
                  <motion.div key={item.id} variants={itemVariants}>
                    <Stack
                      spacing={{ xs: 0, md: 2 }}
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        color: darkMode ? "#454e56" : "#fff",
                        pb: { xs: 2, md: 0 },
                      }}
                    >
                      <Stack
                        sx={{
                          pt: { xs: 0, md: 2 },
                          flexDirection: "row",
                          gap: 2,
                        }}
                      >
                        <item.icon
                          fontSize={"1.5rem"}
                          style={{ marginTop: 4 }}
                        />
                        <Poppins
                          sx={{ fontSize: { xs: "15px", md: "1.1rem" } }}
                        >
                          {item.title}
                        </Poppins>
                      </Stack>
                      <Poppins
                        sx={{
                          fontSize: { xs: "15px", md: "1.1rem" },
                          color: {
                            xs: darkMode ? "#6c7983" : "#b2becd",
                            md: darkMode ? "#454e56" : "#fff",
                          },
                        }}
                      >
                        : {item.deskripsi}
                      </Poppins>
                    </Stack>
                  </motion.div>
                ))}
            </motion.div>

            {/* Icons */}
            <Stack
              sx={{ display: "flex", flexDirection: "row", mt: 4, gap: 2 }}
            >
              {ContactIcon &&
                ContactIcon.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover="hover"
                    variants={iconVariants}
                    onClick={() => func.onClickIcon(item.link)}
                  >
                    <Stack
                      sx={{
                        alignItems: "center",
                        color: darkMode ? "#454e56" : "#fff",
                        backgroundColor: darkMode ? "#f8f8f8" : "#2a2e35",
                        cursor: "pointer",
                        justifyContent: "center",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        "&:hover": {
                          backgroundColor: darkMode ? "#27AE60" : "#3b5998",
                          color: darkMode ? "#fff" : "#191d2b",
                        },
                      }}
                    >
                      <item.icon fontSize={"1.3rem"} />
                    </Stack>
                  </motion.div>
                ))}
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Box>
  );
}
