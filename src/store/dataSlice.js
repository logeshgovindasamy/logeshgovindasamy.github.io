import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPortfolioData = createAsyncThunk('portfolioData/fetchPortfolioData', async () => {
  const response = await fetch('/api/portfolio');
  if (!response.ok) {
    throw new Error('Failed to fetch portfolio data from the server');
  }
  return response.json();
});

const initialState = {
  personalInfo: {
    name: 'LOGESHWARAN G',
    role: 'Full Stack Developer',
    tagline: 'Building scalable, user-friendly applications with a passion for learning new technologies.',
    email: 'logeswaranng@gmail.com',
    phone: '6383378490',
    Git: 'https://github.com/logeshgovindasamy',
    location: 'Murungapatty, Salem, TN-636307',
    linkedin: 'https://linkedin.com/',
    github: 'https://github.com/logeshgovindasamy',
    about: 'Motivated and enthusiastic Full Stack Developer with 1 month of hands-on experience in React development and a Java Full Stack certification. Skilled in building responsive web applications using HTML, CSS, JavaScript, React, Tailwind CSS, and Java technologies. Passionate about learning new technologies, solving real-world problems, and developing scalable, user-friendly applications. A quick learner and team player seeking an opportunity to grow as a professional software developer.',
  },
  skills: [
    { category: 'Languages', items: ['CoreJava', 'NextJs'] },
    { category: 'Front-End', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
    { category: 'Back-End / Learning', items: ['Spring Boot', 'Full Stack Java'] },
    { category: 'Database', items: ['SQL', 'JDBC', 'DynomoDB'] },
    { category: 'Tools', items: ['GitHub', 'Git', 'Postman', 'VS Code'] },
  ],
  education: [
    {
      institution: 'MAHENDRA INSTITUTE OF ENGINEERING AND TECHNOLOGY',
      location: 'Mallasamudram, Namakkal',
      year: '2025',
      degree: 'B.E -  CSE',
      score: 'CGPA: 7.77',
    },
    {
      institution: 'JOTHI VIDHYALAYA MATRIC HR SEC SCHOOL',
      location: 'Salem',
      year: '2021',
      degree: 'HSC',
      score: '74%',
    },
    {
      institution: 'JOTHI VIDHYALAYA MATRIC HR SEC SCHOOL',
      location: 'Salem',
      year: '2019',
      degree: 'SSLC',
      score: '61%',
    },
  ],
  experience: [
    {
      id: 2,
      role: 'Software Engineer Trainee',
      company: 'Vajram Technologies, Covai',
      period: 'Feb 2026-Apr 2026',
      description: [
        'Developing real-time web applications including and RX-Engine platforms.',
        'Implementing modular UI components and connecting front-end layouts with back-end logic.',
        'Working with React.js front-end.'],
    },
    {
      id: 1,
      role: 'Web Developer (Intern)',
      company: 'Webronics Pvt Ltd, Salem',
      period: 'May 2026 - Jun 2026',
      description: [
        'Led the full-stack modernization of a 24SJU and Smart Storing platform, Vite setup with Next.js ',
        'Architected a high-performance database schema using AWS DynamoDB SDK v3',
        'utilizing an optimized Single-Table Design patterns',
      ],
    },
    {
      id: 3,
      role: 'Artificial Intelligence (Intern)',
      company: 'Fantasy Solution',
      period: 'Apr 2024 - Jun 2024',
      description: [
        'Built ML models to improve recommendation accuracy and user engagement.',
        'Developed scalable NLP pipelines for automated content moderation.',
        'Designed automated A/B testing infrastructure for real-time model evaluation.',
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: 'AI Powered Crop Yield Prediction',
      tech: ['Machine Learning', 'Python', 'Data Analysis'],
      description: 'AI-driven crop yield prediction system integrating environmental data to provide agricultural insights.',
      highlights: [
        'Developed models to analyze key variables and provide insights.',
        'Created ML framework optimizing yield predictions for precision farming.',
      ],
      //link: '#',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      tech: ['NextJs', 'Tailwind CSS', 'JavaScript', 'AWS DynamoDB'],
      description: 'Luxury e-commerce platform modernizing a traditional Spring Boot and Vite setup with Next.js.',
      highlights: [
        'Architected a high-performance AWS DynamoDB schema using Single-Table Design and secured routes with custom JWT middleware.',
        'Implemented persistent state checkout workflows via Zustand and automated PDF invoice generation with pdfkit.',
      ],
      // link: '#',
    },
  ],
  certifications: [
    {
      title: 'Java Full Stack Development',
      issuer: 'JSpiders Training Center',
      date: '05-03-2026',
      details: 'Completed professional training in Core Java, J2EE, SQL, Web Technologies, and Frameworks. Certificate No: JSP-26-099',
    },
  ],
  status: 'idle',
  error: null,
};

const dataSlice = createSlice({
  name: 'portfolioData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolioData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPortfolioData.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
          status: 'succeeded',
          error: null,
        };
      })
      .addCase(fetchPortfolioData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unable to load portfolio data';
      });
  },
});

export default dataSlice.reducer;
