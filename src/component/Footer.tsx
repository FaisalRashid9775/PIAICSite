import { Box, Container, Flex, Heading, Text,SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <Box component="div" bgColor={"teal.600"} color={"white"} p={{ base: 5, lg: 15 }}>
        <Container maxW={1400}>
         <SimpleGrid templateColumns={{ lg:'repeat(4, 1fr)', base: 'repeat(1 , 1fr)'}} gap={{ base: 12, lg: 24 }}
            display={{ base: "grid", lg: "flex" }}
            textAlign={{ base: "center", lg: "initial" }}
            py={{ base: 2, lg: 5 }}>
            <Box>
              <Heading>Navigation</Heading>
              <Flex direction={"column"}>
                <Link href={"/"}>Home</Link>
                <Link href={"https://portal.piaic.org/signup"}>Apply</Link>
                <Link href={"/HowitWork"}>How it Work</Link>
              </Flex>
            </Box>
            <Box>
              <Heading>Available Program</Heading>
              <Flex direction={"column"}>
                <Link href={"/Program"}>Artifical Intelligence</Link>
                <Link href={"/Program"}>BlockChain</Link>
                <Link href={"/Program"}>IOT</Link>
                <Link href={"/Program"}>Cloud Computing</Link>
              </Flex>
            </Box>
            <Box>
              <Heading>Contact us</Heading>
              <Flex direction={"column"}>
                <Link href={"https://www.facebook.com/piaic/"}>Facebook</Link>
                <Link href={"https://www.facebook.com/piaic/"}>Youtube</Link>
                <Link href={"https://www.facebook.com/piaic/"}>Linkdln</Link>
              </Flex>
            </Box>
            <Box>
              <Heading>Help line</Heading>
              <Text>+92-308-2220203 (WhatsApp as well)</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
}
