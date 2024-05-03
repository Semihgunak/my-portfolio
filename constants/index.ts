import { FaYoutube, FaFacebook,FaKaggle  } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Ant Design",
    image: "Ant Design.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/muhammet-semih-g%C3%BCnak-696365151/",
  },
  {
    name: "Kaggle",
    icon: FaKaggle,
    link: "https://www.kaggle.com/semihgnak",
  },
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/Semihgunak",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Microsoft SQL Server",
    image: "SQL Database.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "matplotlib",
    image: "matplotlib.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "numpy",
    image: "numpy.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pandas",
    image: "Pandas.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "OpenCV",
    image: "OpenCV.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SciPy",
    image: "SciPy.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kaggle",
    image: "Kaggle.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Keras",
    image: "Keras.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TensorFlow",
    image: "TensorFlow.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "spark",
    image: "spark.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Anaconda",
    image: "Anaconda.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    image: "Bootstrap.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Vite.js",
    image: "Vite.js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Apache",
    image: "Apache.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Postman",
    image: "Postman.png",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "Twitter Clone with React, Node and React Query | MERN",
    description:
      'Here are some of the features, Tech Stack: React.js, MongoDB, Node.js, Express, Tailwind, Authentication with JSONWEBTOKENS (JWT), React    Query for Data Fetching, Caching etc., Suggested Users to Follow, Creating Posts, Deleting Posts, Commenting on Posts, Liking Posts, Delete Posts (if you are the owner), Edit Profile Info, Edit Cover Image and Profile Image, Image Uploads using Cloudinary, Send Notifications',
    image: "/projects/project-1.png",
    link: "https://twitter-clone-mern-tly5.onrender.com",
  },
  {
    title: "Realtime Chat App with MERN Stack",
    description:
      'Some Features of This App: Tech stack: MERN + Socket.io + TailwindCSS + Daisy UI, Authentication && Authorization with JWT,,Real-time messaging with Socket.io, Online user status (Socket.io and React Context), Global state management with Zustand, Error handling both on the server and on the client',
    image: "/projects/project-2.png",
    link: "https://react-chatapp-wlx6.onrender.com",
  },
  {
    title: "Clio Cosmetics & Beauty Shop React Next.JS",
    description:
      'Clio is a React Next JS eCommerce template for the purpose of Women Beauty products and Cosmetics. This template has made with currently best features and thinks about the modern age demand where represent an eCommerce business in a great way. You will find different styles products shop features with different styles of Product details features which present an eCommerce website in an impressive way. There is also keep product category features for different beauty products. This template is powered by React JS with CSS.',
    image: "/projects/project-3.png",
    link: "https://clio-store.netlify.app/",
  },
  {
    title: "Full Stack E-Commerce Website with React, Express.js, MongoDB and Ant Design ",
    description:
      'Create and manage your own products and categories, as well as recognize users and deliver personalized experiences through user registration and login systems. Secure payment systems and promotional coupon codes are also available. The package includes a user-friendly admin panel for effective project management, developing fast applications and handling large datasets using Express.js and MongoDB. It also improves user experience by creating aesthetic and user-friendly interfaces with React and Ant Design, and shopping carts to better serve your customers.',
    image: "/projects/project-4.png",
    link: "https://full-stack-e-commerce-pe2b.onrender.com/",
  },
  {
    title: "Real Estate Marketplace with MERN ",
    description:
      'Implement advanced authentication mechanisms in your real estate application by integrating JWT, Firebase, and Google OAuth, ensuring secure and seamless user access. Develop real-world CRUD operations to create, read, update, and delete property listings efficiently using MongoDB. Enhance the user experience by adding user-friendly features such as image uploads and property listing management. Incorporate advanced search functionality to help users effectively find the properties they are interested in.',
    image: "/projects/project-5.png",
    link: "https://real-estate-48z2.onrender.com",
  },
  {
    title: "React POS Application - MERN Stack Project",
    description:
      'For full-stack development, the MERN stack, combined with Tailwind CSS and Ant Design, offers a comprehensive solution. On the server side, Express.js is a popular choice for building project backends. Responsive design transitions are efficiently managed with Tailwind CSS, while MongoDB is frequently used for handling authentication processes and other database operations. State management is streamlined using Redux-Toolkit, essential in real-world projects for functionalities like invoicing products. Creating APIs from scratch and implementing secure password hashing are also critical components of robust web development.',
    image: "/projects/project-6.png",
    link: "https://pos-app-react-client.onrender.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:semihgunak@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  resume: "https://drive.google.com/file/d/13Z8c-XE3Z5TjzWmgFfNmyDelncbvVD6F/view?usp=drive_link",
};
