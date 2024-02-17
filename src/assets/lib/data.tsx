
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import javaicon from "../../assets/icons/javaicon.svg";
import dsaicon from "../../assets/icons/dsaicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    en: "Hi, I'm Nawaz Ahmed",
  },
  subtitle: "Fullstack Developer ",
  description: {
    en: "I'm Nawaz Ahmed, a fullstack developer dedicated to advancing my career and contributing to inspiring projects. Here, I showcase my work and my deep passion for web development. Let's collaborate on shaping digital solutions and shaping the future together!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Shop-Zone-App",
    
    description_EN:
      "Engineered a dynamic e-commerce application with React.js, Node.js, and MongoDB, utilizing the MERN stack.Led frontend development, integrating Redux and TypeScript for enhanced functionality. Implemented a securepayment system via Stripe Achieved a responsive design and seamless user experience. ",
    technologies: [
      { name: "React", icon: reacticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Render", icon: rendericon },
      
   
    ],
    
    deploymenturl: "https://shop-zone-app.vercel.app/",
    githuburl: "https://github.com/nawazahd/ShopZone-app",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
]

export const liveTickerData = {
  content: {
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Java",
        hash: "#Java",
        icon: javaicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
      {
        title: "DSA",
        hash: "#DSA",
        icon: dsaicon,
        color: "#CC6699",
      },
      
      
    ],
  },
] as const;




export const navLinks = [
  {  en: "Home", hash: "#home", icon: GoHome },
  {  en: "Skills", hash: "#skills", icon: GoStack },
  {  en: "Projects", hash: "#projects", icon: GoProject },
  { en: "About me", hash: "#about-me", icon: GoPerson },
  {  en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  {  en: "Imprint", hash: "#imprint", data: <Imprint /> },
  {  en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:ahmednawaz1810@gmail.com",
  text: "ahmednawaz1810@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/mohammed-nawaz-5544421bb/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/nawazahd",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:ahmednawaz1810@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    en: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    author: "Winston Churchill",
  },
  {
    en: `"Programming is the art of telling another human what one wants the computer to do..`,
  },
] as const;

export const aboutMeData = {
  title_EN: "About me",
  description_EN: "A few code snippets about me",
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    en: "Contact",
  },
  description: {
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        en: "Your Name",
      },
      type: "text",
      validation: {
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
                en: "Your Subject",
      },
      type: "text",
      validation: {
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      en: "I agree that Nawaz may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
