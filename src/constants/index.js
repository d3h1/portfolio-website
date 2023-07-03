import {
    mobile, backend, creator, web, javascript, typescript, html, css, reactjs,redux, aws, csharp, cpp, jenkins, mysql, python, sass, npm, tailwind, nodejs, mongodb, git, figma, docker,  disney, freelance, startup,threejs, yelpclone, portfolio, sudoku, stocks, ai, tmanage, money, githubprof,
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
      title: "Fullstack Developer (2 Years)",
      icon: web,
    },
    {
      title: "Software Engineer (3 Years)",
      icon: mobile,
    },
    {
      title: "Systems Engineer (1 Year)",
      icon: creator,
    },
    {
      title: "AI Developer (1 Year)",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },

    {
      name: "C++",
      icon: cpp,
    },

    {
      name: "C#",
      icon: csharp,
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
      name: "Node JS",
      icon: nodejs,
    },

    {
      name: "Tailwind",
      icon: tailwind,
    },

    {
      name: "MongoDB",
      icon: mongodb,
    },

    {
      name: "MySQL",
      icon: mysql,
    },

    {
      name: "AWS",
      icon: aws,
    },
    
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    
    {
      title: "Software Engineer",
      company_name: "Walt Disney Studios",
      icon: disney,
      iconBg: "#E6DEDD",
      date: "May 2022 - Present",
      points: [
        "Developing full-stack applications to create automated ecosystems across Walt Disney Studios.",
        "Leveraging expertise in C#, Python, JavaScript, and more to create reliable and scalable solutions that streamline operations and improve productivity.",
        "Collaborating with interdisciplinary teams to drive high-priority projects from conception to delivery while ensuring seamless integration with existing systems and workflows.",
        "Producing robust and efficient front-end and back-end code to deliver exceptional user experiences. Monitoring and improving code quality, security, and performance.",
        "Thriving in fast-paced environments, completing complex projects within demanding time frames using agile methodologies and effective communication to ensure success.",
      ],
    },
    {
      title: "WebGL Developer | Consultant",
      company_name: "Automated Design Solutions",
      icon: startup,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js, WebGL, and related technologies to create scalable and intuitive solutions.",
        "Collaborating with clients to design engaging websites that reflect their brand and drive business growth.",
        "Implementing responsive design and cross-browser compatibility for seamless user experiences.",
        "Engineering innovative solutions for multiple business-related websites that differentiate clients from their competitors.",
      ],
    },
    {
      title: "Software Engineer Freelance",
      company_name: "Diamond Cap Technologies, LLC",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "February 2021 - August 2022 ",
      points: [
        "Streamlining productivity through python automation for engineers and small businesses.",
        "Creating ReactJS websites for individuals while ensuring responsiveness across multiple platforms.",
        "Designing Python and C++tools for clients that help automate website functions gaining customer traction by over 50%.",
        "Implementing integrated software using Javascript that helped clients increase revenue by over 10%.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Yelp Clone",
      description:
        "Web-based platform that allows users to rate restaurants while also checking their price, adding their own restaurants, and deleting them. Looking to update it further with features such as location via googlemaps.api.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "postgres",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
      ],
      image: yelpclone,
      source_code_link: "https://github.com/d3h1/Yelp-Clone-",
    },
    {
      name: "Portfolio",
      description:
        "Portfolio created with reactJS, tailwindCSS, and three JS to learn how to implement 3D-Models I find or make. With just scratching the surface of threeJS, I will be looking to implement many more features along with technologies such as a CLI using nodeJS and a facial rec model with Python for cool model interaction. ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/d3h1/Portfolio",
    },
    {
      name: "Sudoku",
      description:
        "A self solving sudoku board that uses backtracking and the checking of 2D array. The player can either try to solve it themselves, or after a certain amount of tries, have the board do it for them. Planning on adding a better GUI using Flask and HTML, a randomized board, and more. ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pygame",
          color: "green-text-gradient",
        },
        {
          name: "backend",
          color: "pink-text-gradient",
        },
      ],
      image: sudoku,
      source_code_link: "https://github.com/d3h1/Sudoku",
    },
    {
      name: "TFJS Face Mesh",
      description:
        "Facial Recognition model that follows certain paths around users using Tensorflow JS and NodeJS. With the use of this model, I am looking to also create custom signin features and implement them into my Portfolio.  ",
      tags: [
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "AI",
          color: "green-text-gradient",
        },
        {
          name: "tensorflowjs",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: ai,
      source_code_link: "https://github.com/d3h1/facemesh",
    },
    {
      name: "Credit Card Validation",
      description:
        "Practicing my algorithms with a C++ program that helps validate a users credit card numbers. Looking to implement other feature such as member IDs, security passwords, and then a login page plus more. ",
      tags: [
        {
          name: "algorithms",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
      ],
      image: money,
      source_code_link: "https://github.com/d3h1/credit-card-validation",
    },
    {
      name: "Stock Prediction",
      description:
        "Stock prediction application created through Jupyter notebook based around python. The user is able to enter their wanted stocks and then have different times of prediction based on years. The GUI is based around multiple stock patterns and can predict at a high reliability rating of 93%. ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter",
          color: "green-text-gradient",
        },
        {
          name: "machinelearning",
          color: "pink-text-gradient",
        },
        
      ],
      image: stocks,
      source_code_link: "https://github.com/d3h1/Stock-Prediction-Application",
    },
    {
      name: "Embedded Thermal Management System",
      description:
        "Created an embedded thermal management system that runs fans based on the temperature of a server room. Used C# to talk to main processing units, while python and circuit python was used for fan controls. Html and javascript is used for web gui integration to get control on multiple devices. ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        },
        {
          name: "circuit python",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tmanage,
      source_code_link: "https://github.com/d3h1",
    },
    {
      name: "More To Come...",
      description:
        "Always creating, always thinking, always wanting to create. That is my motto behind everything I do and you can catch up on anything I do on my github ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "pink-text-gradient",
        },
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
      ],
      image: githubprof,
      source_code_link: "https://github.com/d3h1",
    },
  ];
  
  export { services, technologies, experiences, projects };