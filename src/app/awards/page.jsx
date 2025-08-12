"use client";
import Navbar from "@/components/Navbar/Navbar";
import { Poppins } from "@/components/typography/Poppins";
import Title from "@/components/typography/Title";
import TittleShadow from "@/components/typography/TittleShadow";
import { useThemeStore } from "@/store/themeStore";
import { AwardsCard } from "@/values/Constant";
import { Box, Card, Container, Grid, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useAnimationStore } from "@/store/animationStore";

export default function Awards() {
  const { darkMode } = useThemeStore();
  const { containerVariants, cardVariants, titleVariants } =
    useAnimationStore();

  return (
    <Box sx={{ pb: { xs: 15, md: 8 } }}>
      <Navbar />
      <Stack mt={10}>
        {/* Title */}
        <Stack
          sx={{ position: "relative", textAlign: "center", mt: 2 }}
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <Title
            light={"MY"}
            dark={"AWARDS"}
            fsMd={"4rem"}
            fsXs={"3rem"}
            display={"block"}
          />
          <TittleShadow
            text={"MY AWARDS"}
            fsXs={"4rem"}
            fsSm={"4rem"}
            fsMd={"4.5rem"}
          />
        </Stack>

        <Container>
          {/* Card List */}
          <Grid
            container
            spacing={3}
            sx={{ mt: { xs: 6, md: 8 }, px: { xs: 2, md: 7 } }}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {AwardsCard.map((item) => (
              <Grid
                size={{ xs: 12, md: 6 }}
                key={item.id}
                sx={{ display: "flex", justifyContent: "center" }}
                component={motion.div}
                variants={cardVariants}
              >
                <Card
                  component={motion.div}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: darkMode
                      ? "0 8px 30px rgba(0,0,0,0.2)"
                      : "0 8px 30px rgba(0,0,0,0.4)",
                    transition: { duration: 0.3 },
                  }}
                  sx={{
                    width: "495px",
                    height: "495px",
                    borderRadius: "12px",
                    backgroundColor: darkMode ? "#f8f8f8" : "#2a2e35",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.nama}
                    style={{
                      width: "100%",
                      height: "60%",
                      objectFit: "cover",
                    }}
                  />
                  <Stack sx={{ gap: 1, px: 3, py: { xs: 0, md: 2 } }}>
                    <Poppins
                      sx={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: darkMode ? "#454e56" : "#fff",
                      }}
                    >
                      {item.nama}
                    </Poppins>
                    <Poppins
                      sx={{
                        fontSize: "1.1rem",
                        color: darkMode ? "#6c7983" : "#dbe1e8",
                        lineHeight: "2rem",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: 2,
                      }}
                    >
                      {item.deskripsi}
                    </Poppins>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
}
