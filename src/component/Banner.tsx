import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import pres from "../../public/President.png";
import { RevealWrapper } from "next-reveal";

export default function Banner() {
  return (
    <div>
      <Box p={{ base: 2, lg: 30 }}>
        <Container maxW={1400}>
          <SimpleGrid
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          >
            <RevealWrapper
              origin="left"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Box>
                <Image
                  src={pres}
                  alt={"presidentimage"}
                  height={720}
                  width={300}
                ></Image>
              </Box>
            </RevealWrapper>
            <Box py={{ base: 4, lg: 32 }}>
              <RevealWrapper
                origin="right"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Heading color={"teal"} fontSize={{base:'2xl', lg:'6xl'}}>
                  Presidential Initiative
                </Heading>
                <Heading color={"teal.200"} pt={2} fontSize={{base:'xl', lg :'3xl'}}>
                  for Artificial Intelligence & Computing (PIAIC)
                </Heading>
                <Text pt={5}>
                  The mission of PIAIC is to reshape Pakistan by revolutionizing
                  education, research, and business by adopting latest,
                  cutting-edge technologies. Experts are calling this the 4th
                  industrial revolution. We want Pakistan to become a global hub
                  for AI, data science, cloud native computing, edge computing,
                  blockchain, augmented reality, and internet of things.
                </Text>
              </RevealWrapper>
              <RevealWrapper
                origin="right"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Button
                  mt={{ base: 12, lg: 32 }}
                  float={"left"}
                  colorScheme={"teal"}
                >
                  Apply Now
                </Button>
              </RevealWrapper>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
}
