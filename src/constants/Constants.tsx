import { FaReact } from "react-icons/fa";
import imageTest from "../assets/books/BillionsAndBillions.jpg";

// ProjectFilters
export const projectFilters = [
  "React",
  "TailwindCss",
  "Mobile",
  "Web",
  "TypeScript",
];

// Projects
export const projects = [
  {
    id: "1",
    title: "This portfolio!",
    icon: <FaReact />,
    image: imageTest,
    description: "Made this portfolio with love",
    tags: ["React", "TypeScript", "Web"],
  },
  {
    id: "2",
    title: "TODO mobile app",
    icon: <FaReact />,
    image: imageTest,
    description: "My first React Native App",
    tags: ["React", "Mobile"],
  },
];
