import { IoHome } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { RiMailOpenFill } from "react-icons/ri";

// width drawer
export const drawerWidth = 150;

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
  {
    id: 4,
    icon: <GiAchievement />,
    router: "/awards",
  },
  {
    id: 5,
    icon: <RiMailOpenFill />,
    router: "/contact",
  },
];
