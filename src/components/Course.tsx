import React from 'react';
import photo1 from "./images/product1.jpg"
import photo2 from "./images/product2.jpg"
import photo3 from "./images/product3.jpg"
import { Box, Heading, Text, Image, Grid, GridItem, Link } from '@chakra-ui/react';

const Course: React.FC = () => {
  return (
    <Box id="courses" py="8" px="4" maxW="1200px" mx="auto">
      <Heading as="h2" size="xl" mb="6" textAlign="center" color="blue.500">
        Explore Our Products 
      </Heading>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {/* Product 1 */}
        <GridItem>
          <Box
            bg="gray.800"
            color="white"
            p="6"
            borderRadius="md"
            boxShadow="lg"
            textAlign="center"
          >
            <Link href="https://buy.stripe.com/aEU2aa5WTfFbfuM9AC" textDecoration="none">
              <Image
                src={photo1} // Replace with actual image path
                alt="Course Image"
                boxSize="300px"
                objectFit="cover"
                borderRadius="md"
                mx="auto"
                mb="4"
              />
              <Heading as="h3" fontSize={19} mb="2" fontFamily="Oswald, sans-serif" fontWeight="bold">
                <Text as="span" color="white" >
                1:1 Mentorship
                </Text>
              </Heading>
            </Link>
            <Text fontSize={14} mb="4">
            Personal guidance tailored to your unique trading needs and goals.
            </Text>
            <Text fontSize="lg" color="green.300" fontWeight="bold">
              $500
            </Text>
          </Box>
        </GridItem>

        {/* Product 2 */}
        <GridItem>
          <Box
            bg="gray.800"
            color="white"
            p="6"
            borderRadius="md"
            boxShadow="lg"
            textAlign="center"
          >
            <Link href="https://buy.stripe.com/6oE6qq3OL9gN2I0eVb" textDecoration="none">
              <Image
                src={photo2}// Replace with actual image path
                alt="Course Image"
                boxSize="300px"
                objectFit="cover"
                borderRadius="md"
                mx="auto"
                mb="4"
              />
              <Heading as="h3" fontSize={19} mb="2" fontFamily="Oswald, sans-serif" fontWeight="bold">
                <Text as="span" color="white">
                9 Models
                </Text>
              </Heading>
            </Link>
            <Text fontSize={14} mb="4">
            Master nine essential trading models for consistent market success.
            </Text>
            <Text fontSize="lg" color="green.300" fontWeight="bold">
              $250
            </Text>
          </Box>
        </GridItem>

        {/* Product 3 */}
        <GridItem>
          <Box
            bg="gray.800"
            color="white"
            p="6"
            borderRadius="md"
            boxShadow="lg"
            textAlign="center"
          >
            <Link href="https://whop.com/checkout/DOJOVIP?pageRoute=thetradingdojo&d2c=true" textDecoration="none">
              <Image
                src={photo3} // Replace with actual image path
                alt="Course Image"
                boxSize="300px"
                objectFit="cover"
                borderRadius="md"
                mx="auto"
                mb="4"
              />
              <Heading as="h3" fontSize={19} mb="2" fontFamily="Oswald, sans-serif" fontWeight="bold">
                <Text as="span" color="white">
                ICT DOJO VIP
                </Text>
              </Heading>
            </Link>
            <Text fontSize={14} mb="4">
                    Advanced trading techniques and insights.Weekly Live Trading Calls
            </Text>
            <Text fontSize="lg" color="green.300" fontWeight="bold">
              $50 per Month
            </Text>
          </Box>
        </GridItem>

        {/* Add more GridItem for additional products as needed */}
      </Grid>
    </Box>
  );
};

export default Course;
