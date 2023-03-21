'use client'
import { Box, Container, Heading, SimpleGrid,Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";


export default function IOT() {
  return (
    <div>
        <Box mt={{base:8, lg:32}}>
        <Container maxW={1400}>
          <Box mb={{lg :20 , base :8}} boxShadow={'dark-lg'} boxSize={'full'} p={{lg:60, base:8}} bgColor={'hotpink'} color={'white'} textAlign={'center'}>
            <Heading fontSize={{base:"3xl", lg: '6xl'}}>Cloud Native and Mobile Web Computing Specialist</Heading>
            <Heading fontSize={'md'} pt={8}>
            A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.

.
            </Heading>
          </Box>
          <Box>
            <Box color={'hotpink'} textAlign={'center'}>
                <Heading fontSize={'4xl'} pb={{base : 2, lg:8}}>
                Program Structure
                </Heading>
                <Heading fontSize={'2xl'} >
                A four-quarter cloud computing program.
                </Heading>
            </Box>
          </Box>
            <Box pt={20} pb={10}>
                <Heading color={'teal'}>
                    Technical Track
                </Heading>
            </Box>
            <SimpleGrid gap={8} templateColumns={{base: 'reprat(1, 1fr)', lg:'repeat(4, 1fr)'} } textAlign={'center'}>
                <Box bgColor={'white'} color={'hotpink'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quarter 1</Heading>
                   <Text>Cloud Native Computing Foundations</Text>
                </Box>
                <Box bgColor={'pink.200'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quarter 2</Heading>
                   <Text>Developing Cloud Native Microservices</Text>
                </Box>
                <Box bgColor={'pink.400'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quater 3</Heading>
                   <Text>Kubernetes in Practice</Text>
                </Box>
                <Box bgColor={'pink.600'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quater 4</Heading>
                   <Text>AWS Application Development</Text>
                </Box>
                
                
            </SimpleGrid>


            <Box pt={20} pb={10}>
                <Heading color={'teal'}>
                    Compulsary Innovation Track
                </Heading>
            </Box>
            <SimpleGrid gap={8} templateColumns={{base: 'reprat(1, 1fr)', lg:'repeat(4, 1fr)'} } textAlign={'center'} mb={20}>
            <Link href={'https://www.piaic.org/cloud-native'}>
                <Box bgColor={'white'} color={'black'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quarter 1</Heading>
                   <Text> Learn Innovation Methodology</Text>
                </Box>
            </Link>
                
               

                <Link href={'https://www.piaic.org/cloud-native'}>
                <Box bgColor={'blackAlpha.500'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    
                    <Heading>Quarter 2</Heading>
                   <Text>Infrastructure As Code and DevOps</Text>
                </Box>
                </Link>

                <Link href={'https://www.piaic.org/cloud-native'}>

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
