import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  kiitlo,
  MoFit,
  tc,
  NIT,
  ANU,
  tripguide,
  threejs,
  mbud,
  DIV,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Kiit",
    icon: kiitlo,
    iconBg: "#E6DEDD",
    date: "November 2022 - April 2023",
    points: [
      "Developing and maintaining web application named mo-fitness using React.js and other related technologies.",
      
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Kiit",
    icon: kiitlo,
    iconBg: "#E6DEDD",
    date: "December 2022- January 2023",
    points: [
      "Developing and maintaining web applications named Top-course selection using React.js and other related technologies.",
      
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but YOU proved me wrong.",
    name: "Debasis mishra",
    designation: "STUDENT",
    company: "KIIT",
    image: DIV,
  },
  {
    testimonial:
      "WOW AMAZING!!!",
    name: "SOM MOHANTY",
    designation: "STUDENT",
    company: "KIIT",
    image: NIT,
  },
  {
    testimonial:
      "SUPERBBBB",
    name: "ANUPRIYA",
    designation: "TEACHER",
    company: "UTKAL UNIVERSITY",
    image: ANU,
  },
];

const projects = [
  {
    name: "MoFit",
    description:
      "This is designed to help users with their health and wellness goals.It may include features such as: Personalized Workouts ,Activity Tracking, Nutrition Guidance, Progress Tracking",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: MoFit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Course Selecion",
    description:
      "A comprehensive course selection platform that allows users to select different type of courses, and a user can like or dislike the course as well.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tc,
    source_code_link: "https://github.com/NityanandaPatra/top-couse-selection.git",
  },
  {
    name: "Testimonial slider",
    description:
      "",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
     
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mbud,
    source_code_link: "https://github.com/NityanandaPatra/my-buddies",
  },
];

export { services, technologies, experiences, testimonials, projects };
