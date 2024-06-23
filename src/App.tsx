import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Course from './components/Course';
import Courses from './components/terms';
import Contact from './components/Contact';

import { Box } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bg="#383838">
      <Navbar />
      <Box as="main" flex="1" p={5}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Courses />} />
         
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
