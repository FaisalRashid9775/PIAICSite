'use client'
import { Box, Container, Heading, SimpleGrid,Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

export default function AI() {
  return (
    <div>
      <Box>
        <Container maxW={1400}>
          <Box mb={20} boxShadow={'dark-lg'} boxSize={'full'} p={{lg:60, base:8}} bgColor={'purple'} color={'white'} textAlign={'center'}>
            <Heading fontSize={{base: "3xl", lg: '6xl'}}>Artificial Intelligence</Heading>
            <Heading fontSize={'md'} pt={8}>
              A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING
              PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF
              AI.
            </Heading>
          </Box>
          <Box>
            <Box color={'purple'} textAlign={'center'}>
                <Heading fontSize={'4xl'} pb={{base : 2, lg:8}}>
                Program Structure
                </Heading>
                <Heading fontSize={'2xl'} >
                A four-quarter AI program in Data Science, Machine Learning, and Deep Learning.
                </Heading>
            </Box>
          </Box>
            <Box pt={20} pb={10}>
                <Heading color={'teal'}>
                    Technical Track
                </Heading>
            </Box>
            <SimpleGrid gap={8} templateColumns={{base: 'reprat(1, 1fr)', lg:'repeat(4, 1fr)'} } textAlign={'center'}>
                <Box bgColor={'white'} color={'purple'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quarter 1</Heading>
                   <Text>AI Foundations</Text>
                </Box>
                <Box bgColor={'purple.400'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quarter 2</Heading>
                   <Text>Introduction to Data Science & Deep Learning</Text>
                </Box>
                <Box bgColor={'purple.600'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quater 3</Heading>
                   <Text>Deploying AI Solutions</Text>
                </Box>
                <Box bgColor={'purple.800'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quater 4</Heading>
                   <Text>AI In Practice</Text>
                </Box>
                
            </SimpleGrid>


            <Box pt={20} pb={10}>
                <Heading color={'teal'}>
                    Compulsary Innovation Track
                </Heading>
            </Box>
            <SimpleGrid gap={8} templateColumns={{base: 'reprat(1, 1fr)', lg:'repeat(4, 1fr)'} } textAlign={'center'}>
            <Link href={'https://www.piaic.org/artificial-inteligence'}>
                <Box bgColor={'white'} color={'black'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quarter 1</Heading>
                   <Text> Learn Innovation Methodology</Text>
                </Box>
            </Link>
                
                <Link href={'https://www.piaic.org/artificial-inteligence'}>
                <Box bgColor={'blackAlpha.500'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    
                    <Heading>Quarter 2</Heading>
                   <Text>Infrastructure As Code and DevOps</Text>
                </Box>
                </Link>

                <Link href={'https://www.piaic.org/artificial-inteligence'}>

                <Box bgColor={'blackAlpha.800'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quater 3</Heading>
                   <Text>Learn UI/UX and Bot Design</Text>
                </Box>
                </Link>
               
                
            </SimpleGrid>
          

          

        </Container>
      </Box>
    </div>
  );
}
