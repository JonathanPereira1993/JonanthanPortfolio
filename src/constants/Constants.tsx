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
    details: {
      subtitle: "A Portfolio That Feels Like Me",
      why: "I wanted to experiment with technologies I had never used before, and what better place to test and explore them than here, in my own portfolio, right?",
      mainDescription:
        "This is my second portfolio, created with the goal of elevating my work and building something that truly resonates with me.\n\n" +
        "While the original design wasn’t mine, I loved its structure and aesthetic, so I adopted it and made intentional changes to better suit my style, workflow, and personality.\n\n" +
        "I wanted this portfolio to not just be a showcase of my projects, but a reflection of how I think and work. By tweaking details, refining interactions, and adding personal touches, I transformed it into something that feels authentic and uniquely mine—a space that not only represents my skills but also the way I approach design and development.\n\n" +
        "Also, I love space, the universe, the stars, the endless possibilities of the unknown. And much like the cosmos, I’m always expanding my knowledge. (Though unlike a black hole, I promise my code doesn’t just suck and never return anything useful!) ",
      images: [],
    },
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
