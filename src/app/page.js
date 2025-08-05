import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import { Box, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box >
      <Navbar />
      <Stack>
        <Typography sx={{ marginBottom: 2 }}>
          Home Page
        </Typography>
      </Stack>
    </Box>
  );
}
