import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, Button, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
    // Implement search functionality here
  };

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">About Us</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
        <Spacer />
        <InputGroup maxW="300px" ml={4}>
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            bg="white"
            color="black"
          />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              onClick={handleSearch}
              bg="blue.600"
              color="white"
            />
          </InputRightElement>
        </InputGroup>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" p={10} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Box as="section" p={10}>
        <Heading size="lg" mb={6}>Featured Products</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/250" alt="Product 1" />
              <Box p={6}>
                <Heading size="md">Product 1</Heading>
                <Text mt={4}>$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/250" alt="Product 2" />
              <Box p={6}>
                <Heading size="md">Product 2</Heading>
                <Text mt={4}>$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/250" alt="Product 3" />
              <Box p={6}>
                <Heading size="md">Product 3</Heading>
                <Text mt={4}>$499.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/250" alt="Product 4" />
              <Box p={6}>
                <Heading size="md">Product 4</Heading>
                <Text mt={4}>$599.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" p={10} textAlign="center">
        <VStack spacing={4}>
          <HStack spacing={8}>
            <Link href="#" color="white"><FaFacebook size="24px" /></Link>
            <Link href="#" color="white"><FaTwitter size="24px" /></Link>
            <Link href="#" color="white"><FaInstagram size="24px" /></Link>
          </HStack>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <HStack spacing={8}>
            <Link href="#" color="white">Contact Us</Link>
            <Link href="#" color="white">Terms of Service</Link>
            <Link href="#" color="white">Privacy Policy</Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;