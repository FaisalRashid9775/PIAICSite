'use client'
import { Box, Container, Heading, SimpleGrid,Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";


export default function IOT() {
  return (
    <div>
        <Box mt={{base:8, lg:32}}>
        <Container maxW={1400}>
          <Box mb={{lg :20 , base :8}} boxShadow={'dark-lg'} boxSize={'full'} p={{lg:60, base:8}} bgColor={'teal'} color={'white'} textAlign={'center'}>
            <Heading fontSize={{base:"3xl", lg: '6xl'}}>Internet of Things and
AI Specialist</Heading>
            <Heading fontSize={'md'} pt={8}>
            A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI

.
            </Heading>
          </Box>
          <Box>
            <Box color={'purple.600'} textAlign={'center'}>
                <Heading fontSize={'4xl'} pb={{base : 2, lg:8}}>
                Program Structure
                </Heading>
                <Heading fontSize={'2xl'} >
                Six Quarters of IOT Course Work
                </Heading>
            </Box>
          </Box>
            <Box pt={20} pb={10}>
                <Heading color={'teal'}>
                    Technical Track
                </Heading>
            </Box>
            <SimpleGrid gap={8} templateColumns={{base: 'reprat(1, 1fr)', lg:'repeat(4, 1fr)'} } textAlign={'center'}>
                <Box bgColor={'white'} color={'teal'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quarter 1</Heading>
                   <Text>Introduction to IoT Concepts and Rust Programming</Text>
                </Box>
                <Box bgColor={'teal.200'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quarter 2</Heading>
                   <Text>Embedded Rust and Real-time Systems Programming</Text>
                </Box>
                <Box bgColor={'teal.400'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quater 3</Heading>
                   <Text>Micro Services Development for IoT Edge and IoT Cloud using Web Assembly, Node.js, Docker and KubeEdge technologies</Text>
                </Box>
                <Box bgColor={'teal.500'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quater 4</Heading>
                   <Text>Voice Computing for Device Control</Text>
                </Box>
                <Box bgColor={'teal.600'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quater 5</Heading>
                   <Text>Artificial Intelligence (AI) for Internet of Things (IoT)</Text>
                </Box>
                <Box bgColor={'teal.800'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quater 6</Heading>
                   <Text>Blockchain and IOTA Technologies for IoT (Optional)</Text>
                </Box>
                
            </SimpleGrid>


            <Box pt={20} pb={10}>
                <Heading color={'teal'}>
                    Compulsary Innovation Track
                </Heading>
            </Box>
            <SimpleGrid gap={8} templateColumns={{base: 'reprat(1, 1fr)', lg:'repeat(4, 1fr)'} } textAlign={'center'}>
            <Link href={'https://www.piaic.org/iot'}>
                <Box bgColor={'white'} color={'black'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quarter 1</Heading>
                   <Text> Learn Innovation Methodology</Text>
                </Box>
            </Link>
                
                <Link href={'https://www.piaic.org/iot'}>
                <Box bgColor={'blackAlpha.500'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    
                    <Heading>Quarter 2</Heading>
                   <Text>Infrastructure As Code and DevOps</Text>
                </Box>
                </Link>

                <Link href={'https://www.piaic.org/iot'}>

                <Box bgColor={'blackAlpha.800'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quater 3</Heading>
                   <Text>Learn UI/UX and Bot Design</Text>
                </Box>
                </Link>
               
                
            </SimpleGrid>
          

          

        </Container>
      </Box>
    </div>
  )
}
