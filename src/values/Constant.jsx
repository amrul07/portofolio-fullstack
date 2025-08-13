import { IoHome } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { RiMailOpenFill } from "react-icons/ri";
import { IoSchoolSharp } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import Foto from "@/assets/amrul.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

// width drawer
export const drawerWidth = 115;

// menu navbar
export const NavbarMenu = [
  {
    id: 1,
    icon: <IoHome />,
    router: "/",
  },
  {
    id: 2,
    icon: <IoPersonSharp />,
    router: "/about",
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    router: "/portofolio",
  },
  // {
  //   id: 4,
  //   icon: <GiAchievement />,
  //   router: "/awards",
  // },
  {
    id: 5,
    icon: <RiMailOpenFill />,
    router: "/contact",
  },
];

export const Information = [
  { id: 1, title: "20+", description: "PROJECTS COMPLETED" },
  { id: 2, title: "2+", description: "YEARS OF EXPERIENCE" },
  // { id: 3, title: "6+", description: "COMP. I'VE WORKED" },
];

export const Skills = [
  { id: 1, name: "HTML/HTML5", value: "90" },
  { id: 2, name: "CSS/CSS3", value: "90" },
  { id: 3, name: "JAVASCRIPT", value: "85" },
  { id: 4, name: "REACT JS", value: "85" },
  { id: 5, name: "NEXT JS", value: "85" },
  { id: 6, name: "LARAVEL", value: "85" },
];

export const Timeline = [
  {
    id: 1,
    nama: "INFORMATICS ENGINEERING",
    date: "2021 - 2025",
    tempat: "ALAUDDIN STATE ISLAMIC UNIVERSITY OF MAKASSAR",
    jobdesk: "Bachelor's degree",
    icon: IoSchoolSharp,
  },
  {
    id: 2,
    nama: "FULLSTACK DEVELOPER",
    date: "MAY 2023 - JULY 2023 (FREELANCE)",
    tempat: "INREADY WORKGROUP",
    jobdesk: "Develop RESTful API & admin portal.",
    icon: FaBriefcase,
  },
  {
    id: 3,
    nama: "FULLSTACK DEVELOPER",
    date: "SEP 2023 - JAN 2024 (FREELANCE)",
    tempat: "HMJTI UIN ALAUDDIN MAKASSAR",
    jobdesk: "Develop RESTful API & admin portal.",
    icon: FaBriefcase,
  },
  {
    id: 4,
    nama: "FULLSTACK DEVELOPER",
    date: "MAR 2024 - JUNI 2024 (FREELANCE)",
    tempat: "GENBI UINAM",
    jobdesk: "Develop websites and admin portal.",
    icon: FaBriefcase,
  },
  {
    id: 5,
    nama: "WEB DEVELOPER",
    date: "SEP 2024 - FEB 2025 (FREELANCE)",
    tempat: "KANTOR KEMENTRIAN PERTANAHAN KAB. MAROS",
    jobdesk:
      "Developed a web-based application for managing land deed documents (warkah)",
    icon: FaBriefcase,
  },
  {
    id: 6,
    nama: "FULLSTACK DEVELOPER",
    date: "NOV 2024 - FEB 2025 (PART TIME)",
    tempat: "GODESAKU - PT. HANAN MEDIA SOLUTION",
    jobdesk: "Developing village information website.",
    icon: FaBriefcase,
  },
];

export const PortofolioCard = [
  {
    id: 1,
    nama: "Alquran",
    deskripsi: "Digital Quran website",
    teknologi: "React.js",
    image: Foto,
    icon: FaGlobe,
    link: "https://nextjs.org/docs/app/getting-started/linking-and-navigating",
  },
  {
    id: 2,
    nama: "Makkio",
    deskripsi: "Digital invitation website",
    teknologi: "React.js,Material UI",
    image: Foto,
    icon: FaGlobe,
    link: "/about",
  },
  {
    id: 3,
    nama: "Genbi Uinam",
    deskripsi: "Genbi Uinam Organization Information Website",
    teknologi: "Next.js, Material UI",
    image: Foto,
    icon: FaGlobe,
    link: "/awards",
  },
  {
    id: 4,
    nama: "Godesaku",
    deskripsi: "Village information website",
    teknologi: "Next.js,Material UI",
    image: Foto,
    icon: FaGlobe,
    link: "/contact",
  },
  {
    id: 5,
    nama: "Alquran",
    deskripsi: "Website Alquran",
    teknologi: "React.js",
    image: Foto,
    icon: FaGlobe,
    link: "/",
  },
  {
    id: 6,
    nama: "Makkio",
    deskripsi: "Digital invitation website",
    teknologi: "React.js,Material UI",
    image: Foto,
    icon: FaGlobe,
    link: "/about",
  },
];

export const AwardsCard = [
  {
    id: 1,
    image: Foto,
    nama: "1st - Science Olympic in Geoscience",
    deskripsi:
      "Bulukumba District Education Authorities - Senior High School Science Olympic",
  },
  {
    id: 2,
    image: Foto,
    nama: "Winner - IDCamp Developer Challenge 2022",
    deskripsi:
      "Indosat Ooredoo Hutchison - Recover Faster and Rise Stronger with Technology",
  },
  {
    id: 3,
    image: Foto,
    nama: "Winner - IDCamp Developer Challenge 2020",
    deskripsi:
      "Indosat Ooredoo Hutchison - Fight the Spread of COVID-19 with Innovation",
  },
  {
    id: 4,
    image: Foto,
    nama: "Winner - Baparekraf Digital Challenge",
    deskripsi:
      "Ministry of Tourism and Creative Economy of the Republic of Indonesia - Create Solutions for a Better Indonesia",
  },
];

export const ContactList = [
  {
    id: 1,
    icon: IoLocationSharp,
    title: "Location",
    deskripsi: "Gowa,Indonesia",
  },
  {
    id: 2,
    icon: MdEmail,
    title: "Email",
    deskripsi: "amrulahsanullah.aa@gmail.com",
  },
  {
    id: 3,
    icon: FaGraduationCap,
    title: "Education",
    deskripsi: "UIN Alauddin Makassar, Indonesia",
  },
  {
    id: 4,
    icon: FaGlobeAfrica,
    title: "Languages",
    deskripsi: "Bahasa Indonesia",
  },
];

export const ContactIcon = [
  {
    id: 1,
    icon: AiFillInstagram,
    link: "https://www.instagram.com/amrulahsanullah07/",
  },
  { id: 2, icon: FaGithub, link: "https://github.com/amrul07" },
  {
    id: 3,
    icon: FaYoutube,
    link: "https://www.youtube.com/@amrulahsanullah7083",
  },
];
