import { FaReact } from "react-icons/fa";

// Education
import IpleiriaLogo from "../assets/education/IPLLogoSimple.png";

// Certifications
import Udemy from "../assets/Certifications/Udemy.png";
import AssociateDeveloperO11 from "../assets/Certifications/AssociateDeveloperO11.png";
import AssociateDeveloperODC from "../assets/Certifications/AssociateDeveloperODC.png";
import SpecialistFrontEndDeveloper from "../assets/Certifications/SpecialistFrontEndDeveloper.png";

// Book images
import FortyEightRulesOfPower from "../assets/books/48RulesOfPower.png";
import FourThousandWeeks from "../assets/books/4000Weeks.png";
import AtomicHabits from "../assets/books/AtomicHabits.png";
import BillionsAndBillions from "../assets/books/BillionsAndBillions.png";
import CantHurtMe from "../assets/books/CantHurtMe.png";
import Cosmos from "../assets/books/Cosmos.png";
import ElonMusk from "../assets/books/ElonMusk.png";
import HowToTalkToAnyone from "../assets/books/HowToTalkToAnyone.png";
import LifeThreePointZero from "../assets/books/Life3_0.png";
import PsychologyOfMoney from "../assets/books/PsycologyOfMoney.png";
import RichDadPoorDad from "../assets/books/RichDadPoorDad.png";
import SecretsOfMillionaireMind from "../assets/books/SecretsMillionaire.png";
import TheMonkWhoSoldHisFerrari from "../assets/books/TheMonkWhoSoldHisFerrari.png";
import ThinkAndGrowRich from "../assets/books/ThinkAndGetRich.png";

// Hobbies cover
import Drums from "../assets/Hobbies/Drums.jpg";
import Planes from "../assets/Hobbies/Planes.jpg";

// Aviation Photos
import FlightSimulator from "../assets/Hobbies/AviationFotos/FlightSimulator.jpg";
import Plane1 from "../assets/Hobbies/AviationFotos/Plane1.jpg";
import Plane2 from "../assets/Hobbies/AviationFotos/Plane2.jpg";
import Plane3 from "../assets/Hobbies/AviationFotos/Plane3.jpg";
import SimulatorCockpit from "../assets/Hobbies/AviationFotos/SimulatorCockpit.jpg";
import SimulatorCertification from "../assets/Hobbies/AviationFotos/SimulatorCertification.jpg";

import TodoAppCover from "../assets/Projects/Cover/TODOAppProjectCover.jpg";
import PersonalPortfolioCover from "../assets/Projects/Cover/PersonalPortfolioCover.jpg";
import { YearsCalculator } from "../utils/Utils";

export const sidebarItems = [
  {
    id: 1,
    field: "bio",
    selected: true,
  },
  {
    id: 2,
    field: "education",
    selected: false,
  },
  {
    id: 3,
    field: "certifications",
    selected: false,
  },
];

export const sidebarItemsInterests = [
  {
    id: 4,
    field: "books",
    selected: true,
  },
  {
    id: 5,
    field: "hobbies",
    selected: false,
  },
];

export const biography = {
  title: "Hello, my name is Jonathan Pereira",
  story:
    "I’m Jonathan, a self-taught front-end developer passionate about crafting modern, user-friendly web experiences. Based in Portugal, I have over three years of experience in the tech industry, where I started working with OutSystems (a low-code platform) and closely collaborating with UX/UI teams. Beyond low-code, I write JavaScript, style with CSS/SCSS, and continuously explore new technologies to refine my craft. \n\n  Currently, I’m building personal projects with ReactJS and TailwindCSS, always pushing myself to grow as a developer. My journey into tech began with a background in Web Development & Multimedia, followed by a bachelor’s degree in Games & Multimedia. This academic foundation gave me a strong grasp of design, programming, and digital media—skills that allow me to bridge the gap between aesthetics and functionality in web development. \n\n  Creativity is at the core of everything I do. Whether it’s coding, designing, or playing the drums—one of my biggest hobbies—I love expressing myself through different forms of creation. I’m always eager to be part of projects that make a difference, collaborating with like-minded people to build meaningful and impactful experiences. Beyond tech, I’m constantly seeking personal growth. I love reading great books that challenge my thinking, expand my knowledge, and help me become a better version of myself.\n\n  For me, learning never stops—whether it’s through code, music, or the wisdom found in a good book. Driven by curiosity and a problem-solving mindset, I thrive on learning, adapting, and pushing boundaries to create seamless digital experiences.",
  naturality: "Switzerland",
  from: "Portugal",
  skills: [
    "React",
    "React Native",
    "OutSystems",
    "TailwindCss",
    "SCSS",
    "CSS",
    "Wordpress",
  ],
  yearsExperience: YearsCalculator(2021),
  objectives:
    "Grow as a developer and use my imagination to create helpfull and cool projects!",
};

// Education
export const education = [
  {
    id: 1,
    image: IpleiriaLogo,
    title: "Web development and multimedia (TeSP)",
    school: "IPL - School of Technology and Management",
    year: "2016 - 2018",
    tech: [
      "Visual Code",
      "Adobe Premiere",
      "Adobe Illustrator",
      "JavaScript",
      "PHP",
      "HTML",
      "CSS",
      "Java",
    ],
    description:
      "In this course, I learned the fundamentals of web development, starting with HTML and CSS basics and progressing to databases and JavaScript. I also completed an internship focused on web development and media.",
  },
  {
    id: 2,
    image: IpleiriaLogo,
    title: "Bachelor in Games and Multimedia",
    school: "IPL - School of Technology and Management",
    year: "2018 - present",
    tech: [
      "Visual Code",
      "C++",
      "C#",
      "Unity",
      "Unreal Engine",
      "Autodesk Maya",
      "Blender",
      "2D Animation",
      "3D Animation",
    ],
    description:
      "I learned all about game and multimedia technologies as well as web development. I was introduced to object-oriented programming through languages like C++, C#, Java, and JavaScript. Throughout the course, I also had the opportunity to work in teams, collaborating on projects and developing solutions together.",
  },
];

// Certifications
export const certifications = [
  {
    id: 1,
    title: "Associate Developer O11",
    tech: "OutSystems",
    image: AssociateDeveloperO11,
    link: "https://www.outsystems.com/profile/gubrsdvt3w/learn",
  },
  {
    id: 2,
    title: "Associate Developer ODC",
    tech: "OutSystems",
    image: AssociateDeveloperODC,
    link: "https://www.outsystems.com/profile/gubrsdvt3w/learn",
  },
  {
    id: 3,
    title: "Specialist FrontEnd Developer",
    tech: "OutSystems",
    image: SpecialistFrontEndDeveloper,
    link: "https://www.outsystems.com/profile/gubrsdvt3w/learn",
  },
  {
    id: 4,
    title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
    tech: "React",
    image: Udemy,
    link: "https://www.udemy.com/certificate/UC-af19b034-400e-4231-9553-c952e6e49faa/",
  },
  {
    id: 5,
    title: "React Native - The Practical Guide [2025]",
    tech: "React Native",
    image: Udemy,
    link: "https://www.udemy.com/certificate/UC-9334df47-d795-457b-8937-8677dfe8185f/",
  },
];

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
    difficulty: "",
    title: "My personal portfolio",
    icon: <FaReact />,
    image: PersonalPortfolioCover,
    description:
      "A personal portfolio site to showcase my work, built with React, TypeScript, and a sprinkle of space aesthetic.",
    tags: ["React", "TypeScript", "Web", "SCSS"],
    gitHub: "",
    details: {
      subtitle: "A Portfolio That Feels Like Me",
      why: "I wanted to experiment with technologies I had never used before, and what better place to test and explore them than here, in my own portfolio, right?",
      mainDescription:
        "This is my second portfolio, created with the goal of elevating my work and building something that truly resonates with me.\n\n" +
        "While the original design wasn’t mine, I loved its structure and aesthetic, so I adopted it and made intentional changes to better suit my style, workflow, and personality.\n\n" +
        "I wanted this portfolio to not just be a showcase of my projects, but a reflection of how I think and work. By tweaking details, refining interactions, and adding personal touches, I transformed it into something that feels authentic and uniquely mine—a space that not only represents my skills but also the way I approach design and development.\n\n" +
        "Also, I love space, the universe, the stars, the endless possibilities of the unknown. And much like the cosmos, I’m always expanding my knowledge. (Though unlike a black hole, I promise my code doesn’t just suck and never return anything useful!) ",
      images: [],
      codeSnippets: [],
      features: [
        "Animation done with Framer Motion",
        "Added a 3D object using TREE.js",
      ],
    },
  },
  {
    id: "2",
    difficulty: "",
    title: "TODO mobile app",
    icon: <FaReact />,
    image: TodoAppCover,
    description: "My first React Native App",
    tags: ["React", "ReactNative", "Expo", "Mobile", "Firebase"],
    gitHub: "",
    details: {
      subtitle:
        "Mobile Application to practice what I learned in the React Native course",
      why: "I wanted to experiment with technologies I had never used before, and what better place to test and explore them than here, in my own portfolio, right?",
      mainDescription:
        "This is my second portfolio, created with the goal of elevating my work and building something that truly resonates with me.\n\n" +
        "While the original design wasn’t mine, I loved its structure and aesthetic, so I adopted it and made intentional changes to better suit my style, workflow, and personality.\n\n" +
        "I wanted this portfolio to not just be a showcase of my projects, but a reflection of how I think and work. By tweaking details, refining interactions, and adding personal touches, I transformed it into something that feels authentic and uniquely mine—a space that not only represents my skills but also the way I approach design and development.\n\n" +
        "Also, I love space, the universe, the stars, the endless possibilities of the unknown. And much like the cosmos, I’m always expanding my knowledge. (Though unlike a black hole, I promise my code doesn’t just suck and never return anything useful!) ",
      images: [],
      codeSnippets: [
        {
          id: 1,
          title: "",
          image: "",
          description: "",
        },
      ],
      features: ["Integrated with Firebase Authentication and Database"],
    },
  },
];

export const books = [
  {
    id: 1,
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    image: FortyEightRulesOfPower,
  },
  {
    id: 2,
    title: "4000 Weeks: Time Management for Mortals",
    author: "Oliver Burkeman",
    image: FourThousandWeeks,
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    image: AtomicHabits,
  },
  {
    id: 4,
    title:
      "Billions and Billions: Thoughts on Life and Death at the Brink of the Millennium",
    author: "Carl Sagan",
    image: BillionsAndBillions,
  },
  {
    id: 5,
    title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
    author: "David Goggins",
    image: CantHurtMe,
  },
  {
    id: 6,
    title: "Cosmos",
    author: "Carl Sagan",
    image: Cosmos,
  },
  {
    id: 7,
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    author: "Ashlee Vance",
    image: ElonMusk,
  },
  {
    id: 8,
    title:
      "How to Talk to Anyone: 92 Little Tricks for Big Success in Relationships",
    author: "Leil Lowndes",
    image: HowToTalkToAnyone,
  },
  {
    id: 9,
    title: "Life 3.0: Being Human in the Age of Artificial Intelligence",
    author: "Max Tegmark",
    image: LifeThreePointZero,
  },
  {
    id: 10,
    title:
      "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness",
    author: "Morgan Housel",
    image: PsychologyOfMoney,
  },
  {
    id: 11,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    image: RichDadPoorDad,
  },
  {
    id: 12,
    title:
      "Secrets of the Millionaire Mind: Mastering the Inner Game of Wealth",
    author: "T. Harv Eker",
    image: SecretsOfMillionaireMind,
  },
  {
    id: 13,
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    image: TheMonkWhoSoldHisFerrari,
  },
  {
    id: 14,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    image: ThinkAndGrowRich,
  },
];

export const hobbies = [
  {
    id: "drums",
    title: "Playing Drums",
    cover: Drums,
    subtitle: " My Journey with Drums",
    phrase: "Life’s better with a beat!",
    description: "",
    photos: [Drums],
    buttonText: "Hit the Groove",
    mainDescription:
      "Ever since I was 7 years old, I’ve been drawn to the power of rhythm. The first time I picked up a pair of drumsticks, I knew I had found something special—something that spoke to me in a way words never could. Drumming wasn’t just about keeping time; it was about feeling the music, shaping the groove, and driving the energy forward.\n\n Over the years, I’ve played in different bands, exploring various styles and learning how drums can transform a song. Whether it was jamming with friends, performing live, or simply getting lost in a beat, drumming has always been my way of expressing creativity.\n\n I even took my passion to YouTube, recording drum covers of songs that inspired me. It was an amazing way to share my love for rhythm with others and challenge myself with new techniques.\n\n For me, the drums are more than just an instrument—they’re the heartbeat of the music. They bring everything together, give it movement, and create that undeniable pulse that makes people feel. And that’s why I love them. No matter where life takes me, I know the rhythm will always be with me.",
    link: "https://www.youtube.com/@jonathanwhite1004",
    linkTitle:
      "You can check the Youtube channel where I post Drum covers bellow",
  },
  {
    id: "aviation",
    title: "All about aviation",
    cover: Planes,
    subtitle: "I love to fly and all about aviation",
    phrase:
      "A mile of road takes you a mile. A mile of runway can take you anywhere.",
    description: "",
    photos: [
      FlightSimulator,
      Plane1,
      Plane2,
      Plane3,
      Planes,
      SimulatorCockpit,
      SimulatorCertification,
    ],
    buttonText: "Take off",
    mainDescription:
      "Since I was a child, I’ve always dreamed of becoming a pilot. The idea of soaring through the skies, navigating vast distances, and being in control of such powerful machines has always fascinated me. Even as a young kid, I would spend hours watching technical videos about airplanes, learning how they work, and understanding what it takes to pilot an aircraft—whether it’s a sleek Airbus or a robust Boeing.\n\n Over the years, my passion for aviation has only grown stronger. I’ve spent countless hours diving deep into the technical side of flying, watching tutorials, and exploring the mechanics of flight. The thrill of understanding how these complex machines operate and the precision needed to fly them is something that never gets old.\n\n I’ve taken my passion to the next level by piloting flight simulators, creating realistic journeys that make me feel like I’m actually flying. These virtual flights have given me a taste of what it would be like to navigate through different weather conditions, manage air traffic, and execute flawless landings. It’s a glimpse into the world I hope to be a part of.\n\n But this is just the beginning. One day, I’ll earn my private pilot license, and I’ll be able to take to the skies for real. Whether it’s flying for fun or exploring new destinations, aviation will always be a dream I’m determined to turn into reality.",
    link: "https://www.youtube.com/@SkyportWatch",
    linkTitle:
      "I record some take-offs and landings with great views. You can check in the link bellow my youtube channel.",
  },
];
