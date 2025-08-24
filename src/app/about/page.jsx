"use client";
import DownloadCVButton from "@/components/button/ButtonStyle";
import Navbar from "@/components/Navbar/Navbar";
import Description from "@/components/typography/Description";
import { Poppins } from "@/components/typography/Poppins";
import Title from "@/components/typography/Title";
import TittleShadow from "@/components/typography/TittleShadow";
import { useThemeStore } from "@/store/themeStore";
import { Information, Skills, Timeline } from "@/values/Constant";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  LinearProgress,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useAnimationStore } from "@/store/animationStore";

export default function About() {
  const { darkMode } = useThemeStore();
  const { fadeInUp, fadeUp, staggerContainer, progressVariants } =
    useAnimationStore();
  return (
    <Box>
      <Navbar />
      <Stack mt={10}>
        {/* title */}
        <Stack
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          sx={{ textAlign: "center", position: "relative", mt: 2 }}
        >
          <Title
            light={"ABOUT"}
            dark={"ME"}
            fsMd={"4rem"}
            fsXs={"3rem"}
            display={"inline"}
          />
          <TittleShadow text={"MY STATS"} fsMd={"5.5rem"} fsXs={"4rem"} />
        </Stack>

        <Container>
          {/* information */}
          <Grid
            container
            spacing={2}
            sx={{
              pt: "3.5rem",
              px: { xs: 2, md: 7 },
              mb: 8,
              justifyContent: "space-between",
            }}
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <Stack gap={2}>
                  <Poppins
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: darkMode ? "#454e56" : "#fff",
                    }}
                  >
                    INFORMATION
                  </Poppins>
                  <Description text="I have interested in programming since 2021. I have some experience developing backend and frontend websites. I have completed several projects in several companies." />
                  <a
                    href="/cv/muammar.pdf"
                    download="Muammar.pdf"
                    style={{ textDecoration: "none" }}
                  >
                    <DownloadCVButton />
                  </a>
                </Stack>
              </motion.div>
            </Grid>

            {/* cards */}
            <Grid
              size={{ xs: 12, md: 6 }}
              component={motion.div}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              animate="visible"
              viewport={{ once: true }}
            >
              <Stack sx={{ flexDirection: "row", gap: 4, flexWrap: "wrap" }}>
                {Information.map((item) => (
                  <Stack
                    key={item.id}
                    component={motion.div}
                    variants={fadeUp}
                    sx={{
                      width: { xs: "100%", md: "240px" },
                      border: darkMode
                        ? "1px solid #f8f8f8"
                        : "1px solid #2a2e35",
                      borderRadius: "5px",
                      transition: "all 0.4s ease-in-out",
                      boxShadow: "1px 2px 15px rgba(0, 0, 0, 0.1)",
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        border: darkMode
                          ? "1px solid #27AE60"
                          : "1px solid #3b5998",
                        boxShadow: "1px 4px 15px rgba(0, 0, 0, 0.32)",
                      },
                    }}
                  >
                    <Poppins
                      sx={{
                        fontSize: "3rem",
                        fontWeight: 700,
                        color: darkMode ? "#27AE60" : "#3b5998",
                      }}
                    >
                      {item.title}
                    </Poppins>
                    <Stack sx={{ position: "relative" }}>
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "15px",
                          width: "2rem",
                          height: "2px",
                          backgroundColor: darkMode ? "#f8f8f8" : "#2a2e35",
                        }}
                      ></span>
                      <Poppins
                        sx={{
                          pl: "3rem",
                          color: darkMode ? "#454e56" : "#dbe1e8",
                          fontSize: "1.2rem",
                          letterSpacing: "2px",
                        }}
                      >
                        {item.description}
                      </Poppins>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>

          {/* skills */}
          <Stack sx={{ textAlign: "center", px: { xs: 2, md: 7 }, mb: 8 }}>
            <span
              style={{
                width: "40%",
                height: "2px",
                alignSelf: "center",
                backgroundColor: darkMode ? "#f8f8f8" : "#2a2e35",
              }}
            ></span>
            <Poppins
              sx={{
                mt: 8,
                fontSize: "1.4rem",
                fontWeight: 700,
                color: darkMode ? "#454e56" : "#fff",
              }}
            >
              MY SKILLS
            </Poppins>

            <Grid
              container
              spacing={2}
              component={motion.div}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              sx={{
                flexDirection: "row",
                flexWrap: "wrap",
                columnGap: 2,
                mt: 8,
                justifyContent: "space-between",
              }}
            >
              {Skills.map((item) => (
                <Grid size={{ xs: 12, md: 6 }} key={item.id}>
                  <Stack
                    spacing={1}
                    // sx={{ mb: 3, width: { xs: "100%", md: "49%" } }}
                    sx={{ mb: 3 }}
                    component={motion.div}
                    variants={fadeUp}
                  >
                    <Poppins
                      sx={{
                        fontWeight: 600,
                        textAlign: "start",
                        color: darkMode ? "#454e56" : "#fff",
                      }}
                    >
                      {item.name}
                    </Poppins>
                    <Stack
                      sx={{
                        flexDirection: "row",
                        alignItems: "center",
                        columnGap: 2,
                      }}
                    >
                      <Description text={`${item.value}%`} />
                      <Box
                        sx={{
                          flex: 1,
                          backgroundColor: "#2c3440",
                          // borderRadius: "5px",
                          overflow: "hidden",
                          height: 8,
                        }}
                      >
                        <motion.div
                          style={{
                            height: "100%",
                            backgroundColor: darkMode ? "#27AE60" : "#3b5998",
                          }}
                          variants={progressVariants}
                          custom={item.value}
                        />
                      </Box>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>

          {/* timeline */}
          <Stack
            component={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{ textAlign: "center", px: { xs: 2, md: 7 }, mb: 15 }}
          >
            <span
              style={{
                width: "40%",
                height: "2px",
                alignSelf: "center",
                backgroundColor: darkMode ? "#f8f8f8" : "#2a2e35",
              }}
            ></span>
            <Poppins
              sx={{
                mt: 8,
                fontSize: "1.4rem",
                fontWeight: 700,
                color: darkMode ? "#454e56" : "#fff",
              }}
            >
              MY HIGHLIGHTED TIMELINE
            </Poppins>

            {Timeline.map((item) => (
              <Stack
                key={item.id}
                component={motion.div}
                variants={fadeUp}
                sx={{
                  position: "relative",
                  pl: "3rem",
                  textAlign: "start",
                  borderLeft: darkMode
                    ? "1px solid #f8f8f8"
                    : "1px solid  #2a2e35",
                  mt: 4,
                }}
              >
                <Stack
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: darkMode ? "#27AE60" : "#3b5998",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    left: "-27px",
                    top: 0,
                  }}
                >
                  <item.icon
                    fontSize={"1.3rem"}
                    style={{ color: darkMode ? "#454e56" : "#fff" }}
                  />
                </Stack>
                <Poppins
                  sx={{
                    padding: "0.2rem 0.6rem",
                    backgroundColor: darkMode ? "#f8f8f8" : "#2a2e35",
                    borderRadius: "15px",
                    fontSize: "0.8rem",
                    color: darkMode ? "#6c7983" : "#b2becd",
                    fontWeight: 500,
                    width: "fit-content",
                  }}
                >
                  {item.date}
                </Poppins>
                <Poppins
                  sx={{
                    color: darkMode ? "#6c7983" : "#fff",
                    fontSize: "1.3rem",
                    mt: 2,
                    fontWeight: 600,
                  }}
                >
                  {item.nama}
                </Poppins>
                <Poppins
                  sx={{
                    color: darkMode ? "#6c7983" : "#b2becd",
                    fontSize: "1rem",
                    mt: 1,
                    fontWeight: 500,
                  }}
                >
                  {item.tempat}
                </Poppins>
                <Poppins
                  sx={{
                    color: darkMode ? "#6c7983" : "#b2becd",
                    fontSize: "1rem",
                    mt: 2,
                    fontWeight: 500,
                  }}
                >
                  {item.jobdesk}
                </Poppins>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Stack>
    </Box>
  );
}
