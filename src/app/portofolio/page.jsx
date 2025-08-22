"use client";
import Navbar from "@/components/Navbar/Navbar";
import Description from "@/components/typography/Description";
import { Poppins } from "@/components/typography/Poppins";
import Title from "@/components/typography/Title";
import TittleShadow from "@/components/typography/TittleShadow";
import { useAnimationStore } from "@/store/animationStore";
import { useThemeStore } from "@/store/themeStore";
import { PortofolioCard } from "@/values/Constant";
import { Box, Card, Container, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import PortofolioLogic from "./PortofolioLogic";

export default function Portofolio() {
  const { value, func } = PortofolioLogic();
  const { darkMode } = useThemeStore();
  const { fadeUp, staggerContainer, popIn } = useAnimationStore();
  return (
    <Box>
      <Navbar />
      <Stack mt={10}>
        {/* Title */}
        <Stack
          sx={{ textAlign: "center", position: "relative", mt: 2 }}
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Title
            light={"MY"}
            dark={"PORTOFOLIO"}
            fsMd={"4rem"}
            fsXs={"3rem"}
            display={"block"}
          />
          <TittleShadow
            text={"MY WORK"}
            fsXs={"4rem"}
            fsSm={"5.5rem"}
            fsMd={"6.3rem"}
          />
        </Stack>
        <Container>
          {/* card */}
          <Stack mt={5} sx={{ px: { xs: 2, md: 7 }, pb: { xs: 15, md: 8 } }}>
            <Poppins
              component={motion.p}
              variants={popIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              sx={{
                textAlign: "center",
                color: darkMode ? "#454e56" : "#fff",
                fontSize: "1.1rem",
              }}
            >
              Here is some of my work that I've done.
            </Poppins>
            <Grid
              container
              spacing={2}
              sx={{ mt: { xs: 6, md: 8 } }}
              component={motion.div}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              animate="visible"
              viewport={{ once: true }}
            >
              {PortofolioCard.map((item) => (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4 }}
                  key={item.id}
                  sx={{ display: "flex", justifyContent: "center" }}
                  component={motion.div}
                  variants={fadeUp}
                >
                  <Card
                    sx={{
                      position: "relative",
                      width: { xs: 300, md: 330 },
                      height: 300,
                      borderRadius: "12px",
                      overflow: "hidden",
                      cursor: "pointer",
                      "&:hover .overlay": {
                        opacity: 1,
                      },
                    }}
                  >
                    {/* Gambar */}
                    <Image
                      src={item.image}
                      alt={item.nama}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* Overlay */}
                    <Stack
                      className="overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: darkMode ? "#27AE60" : "#3b5998",
                        color: darkMode ? "#454e56" : "#fff",
                        display: "flex",
                        flexDirection: "column",
                        // alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        textAlign: "center",
                        p: 2,
                      }}
                    >
                      <Poppins
                        fontWeight="bold"
                        sx={{ fontSize: "1.2rem", alignItems: "center" }}
                      >
                        {item.nama}
                      </Poppins>
                      <Poppins
                        sx={{
                          mt: 1,
                          fontSize: "0.8rem",
                          px: 2,
                          textAlign: "start",
                        }}
                      >
                        {item.deskripsi}
                      </Poppins>
                      <Poppins
                        sx={{
                          fontSize: "0.8rem",
                          px: 2,
                          textAlign: "start",
                          fontWeight: 600,
                        }}
                      >
                        Tech:{" "}
                        <span style={{ fontWeight: "normal" }}>
                          {item.teknologi}
                        </span>
                      </Poppins>
                      {/* icon */}
                      <Stack
                        onClick={() => func.onClickLink(item.link)}
                        sx={{
                          mt: 3,
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          backgroundColor: darkMode ? "#fff" : "#191d2b",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "center",
                          "&:hover": {
                            backgroundColor: darkMode ? "#454e56" : "#fff",
                            color: darkMode ? "#fff" : "#191d2b",
                          },
                        }}
                      >
                        <item.icon size={"1.5rem"} />
                      </Stack>
                    </Stack>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Stack>
    </Box>
  );
}
