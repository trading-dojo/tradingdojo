import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Course from './components/Course';
import Terms from './components/terms'; // Corrigi o nome do componente
import Contact from './components/Contact';

import { Box } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bg="#383838">
      <Navbar />
      <Box as="main" flex="1" p={5}>
        <Home />
        <Routes>
          
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
