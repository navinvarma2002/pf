import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
  
    starbucks,
    tesla,
  
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React js",
      icon: web,
    },
    {
      title: "Javascript",
      icon: mobile,
    },
    {
      title: "HTML",
      icon: backend,
    },
    {
      title: "CSS",
      icon: creator,
    },
  ];
  
  const technologies = [

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
  
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      title: "Internship(FrontEnd-Developer)",
      company_name: "Senchola Technology solutions",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jun 2024 - Aug 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Internship(FrontEnd-Developer)",
      company_name: "Code Alpha",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Oct 2024 - Nov 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "MERN Stack Developer(MongoDB, Express.js,  )",
      name: "Error Makes Clever",
      designation: "Tutor",
      company: "Agnel john",
      certificateLink:"https://drive.google.com/file/d/1L05v--ZJbRWyHW-aELyd-iKLofwJUuIX/view?usp=sharing"


     
    },
    {
      testimonial:
        "React js - The Complete Guide 2023 (incl. React Router & Redux)",
      name: "Udemy",
      designation: "Tutor",
      company: "Maximilian Schwarzmuller",
      certificateLink:"https://drive.google.com/file/d/1L05v--ZJbRWyHW-aELyd-iKLofwJUuIX/view?usp=sharing"
     
    },
    {
      testimonial:
        "Node.js, Express, MongoDB & More: The Complete Bootcamp",
      name: "Udemy",
      designation: "Tutor",
      company: "Jonas Schmedtmann",
      certificateLink:"https://drive.google.com/file/d/1L05v--ZJbRWyHW-aELyd-iKLofwJUuIX/view?usp=sharing"
      
    },
  ];
  
  const projects = [
    {
      name: "Travel List",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };