import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    name: "LOGESHWARAN G ",
    role: "Full Stack Developer",
    tagline: "Building scalable, user-friendly applications with a passion for learning new technologies.",
    email: "logeswaranng@gmail.com",
    phone: "6383378490",
    location: "Murungapatty, Salem, TN-636307",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/logeshgovindasamy",
    about: "Motivated and enthusiastic Full Stack Developer with 1 month of hands-on experience in React development and a Java Full Stack certification. Skilled in building responsive web applications using HTML, CSS, JavaScript, React, Tailwind CSS, and Java technologies. Passionate about learning new technologies, solving real-world problems, and developing scalable, user-friendly applications. A quick learner and team player seeking an opportunity to grow as a professional software developer."
  },
  skills: [
    { category: "Languages", items: ["CoreJava"] },
    { category: "Front-End", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
    { category: "Back-End / Learning", items: ["Spring Boot", "Full Stack Java"] },
    { category: "Database", items: ["SQL", "JDBC"] },
    { category: "Tools", items: ["GitHub", "Git"] }
  ],
  education: [
    {
      institution: "MAHENDRA INSTITUTE OF ENGINEERING AND TECHNOLOGY",
      location: "Mallasamudram, Namakkal",
      year: "2025",
      degree: "B.E / B.Tech",
      score: "CGPA: 7.77"
    },
    {
      institution: "JOTHI VIDHYALAYA MATRIC HR SEC SCHOOL",
      location: "Salem",
      year: "2021",
      degree: "HSC",
      score: "74%"
    },
    {
      institution: "JOTHI VIDHYALAYA MATRIC HR SEC SCHOOL",
      location: "Salem",
      year: "2019",
      degree: "SSLC",
      score: "61%"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Software Engineer (Intern)",
      company: "Vajram Technologies, Covai",
      period: "Currently Intern",
      description: [
        "Currently working as a Software Engineer Intern, focusing on full-stack development and modern web technologies."
      ]
    },
    {
      id: 2,
      role: "Artificial Intelligence Intern",
      company: "Fantasy Solution",
      period: "Apr 2024 - Jun 2024",
      description: [
        "Built ML models to improve recommendation accuracy and user engagement.",
        "Developed scalable NLP pipelines for automated content moderation.",
        "Designed automated A/B testing infrastructure for real-time model evaluation."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "AI Powered Crop Yield Prediction",
      tech: ["Machine Learning", "Python", "Data Analysis"],
      description: "AI-driven crop yield prediction system integrating environmental data to provide agricultural insights.",
      highlights: [
        "Developed models to analyze key variables and provide insights.",
        "Created ML framework optimizing yield predictions for precision farming."
      ],
      link: "#"
    }
  ],
  certifications: [
    {
      title: "Java Full Stack Development",
      issuer: "JSpiders Training Center",
      date: "05-03-2026",
      details: "Completed professional training in Core Java, J2EE, SQL, Web Technologies, and Frameworks. Certificate No: JSP-26-099"
    }
  ]
};

const dataSlice = createSlice({
  name: 'portfolioData',
  initialState,
  reducers: {}
});

export default dataSlice.reducer;
