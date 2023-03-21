'use client'
import { Box, Container, Heading, SimpleGrid,Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";


export default function BCC() {
  return (
    <div>
        <Box mt={{base:8, lg:32}}>
        <Container maxW={1400}>
          <Box mb={{lg :20 , base :8}} boxShadow={'dark-lg'} boxSize={'full'} p={{lg:60, base:8}} bgColor={'yellow'} color={'black'} textAlign={'center'}>
            <Heading fontSize={{base:"3xl", lg: '6xl'}}>BLOCKCHAIN SPECIALIST</Heading>
            <Heading fontSize={'md'} pt={8}>
            A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS
.
            </Heading>
          </Box>
          <Box>
            <Box color={'yellow.600'} textAlign={'center'}>
                <Heading fontSize={'4xl'} pb={{base : 2, lg:8}}>
                Program Structure
                </Heading>
                <Heading fontSize={'2xl'} >
                Four Quarters of Blockchain Course Work
                </Heading>
            </Box>
          </Box>
            <Box pt={20} pb={10}>
                <Heading color={'teal'}>
                    Technical Track
                </Heading>
            </Box>
            <SimpleGrid gap={8} templateColumns={{base: 'reprat(1, 1fr)', lg:'repeat(4, 1fr)'} } textAlign={'center'}>
                <Box bgColor={'white'} color={'yellow.400'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quarter 1</Heading>
                   <Text>Foundations of Blockchain</Text>
                </Box>
                <Box bgColor={'yellow.100'} color={'black'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quarter 2</Heading>
                   <Text>Smart Contract Development</Text>
                </Box>
                <Box bgColor={'yellow.200'} color={'black'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quater 3</Heading>
                   <Text>Dapp Development</Text>
                </Box>
                <Box bgColor={'yellow.300'} color={'black'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quater 4</Heading>
                   <Text>Advanced Blockchain Topics</Text>
                </Box>
                
            </SimpleGrid>


            <Box pt={20} pb={10}>
                <Heading color={'teal'}>
                    Compulsary Innovation Track
                </Heading>
            </Box>
            <SimpleGrid gap={8} templateColumns={{base: 'reprat(1, 1fr)', lg:'repeat(4, 1fr)'} } textAlign={'center'}>
            <Link href={'https://www.piaic.org/block-chain'}>
                <Box bgColor={'white'} color={'black'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    <Heading>Quarter 1</Heading>
                   <Text> Learn Innovation Methodology</Text>
                </Box>
            </Link>
                
                <Link href={'https://www.piaic.org/block-chain'}>
                <Box bgColor={'blackAlpha.500'} color={'white'} p={16} boxShadow={'dark-lg'} borderRadius={'2xl'}>
                    
                    <Heading>Quarter 2</Heading>
                   <Text>Infrastructure As Code and DevOps</Text>
                </Box>
                </Link>

                <Link href={'https://www.piaic.org/block-chain'}>

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
