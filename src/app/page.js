"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import { Box, Container, Grid, Stack } from "@mui/material";
import Foto from "@/assets/ammar.jpg";
import { HomeLogic } from "./HomeLogic";
import { useThemeStore } from "@/store/themeStore";
import Title from "@/components/typography/Title";
import DownloadCVButton from "@/components/button/ButtonStyle";
import Description from "@/components/typography/Description";
import { motion } from "framer-motion"; // ganti "motion/react" ke ini
import { useAnimationStore } from "@/store/animationStore";

export default function Home() {
  const { darkMode } = useThemeStore();
  const { fadeInUp, fadeInLeft, popIn } = useAnimationStore();

  return (
    <Box>
      <Navbar />
      <Container>
        <Grid
          container
          spacing={2}
          direction={{ xs: "column-reverse", md: "row" }}
        >
          {/* FOTO */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: { xs: 15, md: 0 },
              maxHeight: "100vh",
            }}
          >
            <Stack
              sx={{
                display: { xs: "none", md: "flex" },
                transition: `all 0.4s ease-in-out`,
                width: "33%",
                height: "100%",
                backgroundColor: darkMode ? "#27AE60" : `#3b5998`,
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: -1,
                clipPath: `polygon(0 0, 46% 0, 79% 100%, 0% 100%)`,
              }}
            ></Stack>

            <Stack
              component={motion.div}
              className="image"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              sx={{
                borderRadius: "14px",
                height: "90%",
                width: { xs: "90%", md: "80%" },
                overflow: "hidden",
              }}
            >
              <Image
                src={Foto}
                alt="Picture of the author"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: `14px`,
                }}
              />
            </Stack>
          </Grid>

          {/* TEXT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              sx={{
                mt: { xs: 10, md: 0 },
                px: { xs: 2, md: 8 },
                justifyContent: "center",
                minHeight: { xs: "", md: "100vh" },
                gap: 4,
              }}
            >
              {/* TITLE */}
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
              >
                <Title
                  light={"Hi, I'm"}
                  dark={"Muammar"}
                  fsXs={"2.5rem"}
                  fsMd={"3rem"}
                  display={"inline"}
                />
              </motion.div>

              {/* DESCRIPTION */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <Description
                  text={
                    "I'm a Developer, I love to build functional websites. I'm able to communicate well, able to work in team or individually, fast learner, and like challenges."
                  }
                />
              </motion.div>

              {/* BUTTON */}
              <motion.div
                variants={popIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <a
                  href="/cv/amrul.pdf"
                  download="Muammar_CV.pdf"
                  style={{ textDecoration: "none" }}
                >
                  <DownloadCVButton />
                </a>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
