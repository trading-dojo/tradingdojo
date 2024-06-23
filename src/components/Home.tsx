import React from 'react';
import { Box, Heading, Text, Link as ChakraLink, Flex, Image, Center } from '@chakra-ui/react';
import photo1 from "./images/cert1.jpg"
import photo2 from "./images/cert2.jpg"
import { Link as RouterLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Box 
      id="home" 
       
      color="white" 
      fontFamily="'Avenir Next', sans-serif"
      textAlign="center"
      py="8"
      px="4"
      maxW="800px"
      mx="auto"
    >
      <Center>
        <Heading as="h1" size="2xl" mb="4" fontFamily="Oswald, sans-serif" fontWeight="bold" mt={10}>
          You're Just One Trade Away From Financial Freedom...
        </Heading>
      </Center>

      <Center>
  <Text fontSize="l" mt="4" color="#40f503">
    <ChakraLink 
      as={RouterLink}  // Utilize o RouterLink aqui
      to="/course"  // Defina o "to" para a rota correta
      border="2px" 
      borderColor="#40f503" 
      px="4" 
      py="2" 
      borderRadius="md" 
      backgroundColor="transparent"
      _hover={{ textDecoration: 'none' }}
    >
      Escape the Matrix
    </ChakraLink>
  </Text>
</Center>

      <Box mt="8">
        <Center>
          <Heading as="h2" size="lg" mb="4" fontFamily="Oswald, sans-serif" fontWeight="bold">
            About Us
          </Heading>
        </Center>

        <Center>
          <Text fontSize="xl" textAlign="center" mb="4">
            Welcome to The Trading Dojo, your gateway to mastering the art of day trading and achieving profitable results in the dynamic world of financial markets.
          </Text>
        </Center>

        <Center>
          <Text fontSize="xl" textAlign="center" mb="4">
            At The Trading Dojo, we are dedicated to empowering individuals with the knowledge, skills, and strategies needed to navigate the fast-paced world of day trading successfully.
          </Text>
        </Center>

        <Center>
          <Text fontSize="xl" textAlign="center" mb="4">
            We understand that day trading can seem complex and overwhelming to beginners. That's why our mission is to simplify the process and provide you with a comprehensive education that demystifies the world of trading. Whether you're a complete novice or an experienced trader looking to refine your skills, our carefully designed courses and resources cater to all skill levels.
          </Text>
        </Center>

        <Center>
          <Text fontSize="l" textAlign="center" mb="4" color="#40f503">
            <ChakraLink 
              as="a" 
              href="https://discord.gg/yqqn3s2PqY" 
              textDecoration="underline"
               
               
              px="4" 
              py="2" 
              borderRadius="md" 
              backgroundColor="transparent"
              _hover={{ textDecoration: 'none' }}
            >
              Click Here To Join our FREE Discord Community!
            </ChakraLink>
          </Text>
        </Center>
      </Box>

      <Box mt="8">
      <Center flexDirection="column">
  <Box textAlign="center" mb={4} w="100%">
    <Heading as="h3" size="lg" fontFamily="Oswald, sans-serif" fontWeight="bold">
      Results
    </Heading>
    <Text fontSize="15" mt={2} ml={0} maxW="80%" textAlign="justify" mx="auto">
      Direct results from completing our comprehensive ETU Day Trading Course. 
    </Text>
  </Box>

  <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="center" mb="4" gap={30}>
    <Image 
      src={photo1} 
      alt="Results Image" 
      style={{height:"300px", width:"600px"}}
      boxSize={{ base: '100%', md: '50%' }} 
      objectFit="cover" 
      borderRadius="md" 
      mb={{ base: 4, md: 0 }} 
    />
    <Image 
      src={photo2} 
      alt="Results Image" 
      style={{height:"300px", width:"600px"}}
      boxSize={{ base: '100%', md: '50%' }} 
      objectFit="cover" 
      borderRadius="md" 
      mb={{ base: 4, md: 0 }} 
    />
  </Flex>
</Center>

      </Box>
    </Box>
  );
};

export default Home;
