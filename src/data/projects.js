import serenic from "../assets/serenic.png";
import shopstorm from "../assets/shopstorm.png";
import attendify from "../assets/attendify.png";

const projects = [
  {
    title: "Serenic",
    image: serenic,
    link: "https://serenic.xyz",
    description:
      "Classic gaming platform built using React and Node.js with fast performance, clean UI and ad-based monetization.",
    tech: ["React", "Node.js", "Monetization", "SEO", "Vercel"],
    stats: "100+ daily users • INR 0.91 / download",
  },

  {
    title: "ShopStorm",
    image: shopstorm,
    link: "https://shopstorm.onrender.com",
    description:
      "Full stack ecommerce website using React frontend and Spring Boot backend with authentication and product management.",
    tech: ["React", "Spring Boot", "Authentication", "PostgreSQL"],
    stats: "Ecommerce • Auth • Dashboard",
  },

  {
    title: "Attendify",
    image: attendify,
    link: "#",
    description:
      "Cross-platform Expo mobile app for attendance management, classroom tools and AI assistant chatbot.",
    tech: ["React Native", "Expo", "AI"],
    stats: "Mobile • AI Assistant",
  },
];

export default projects;