import React from 'react'
import { Box, Container,Heading, SimpleGrid,Text } from '@chakra-ui/react'
import { RevealWrapper } from 'next-reveal'
import Link from 'next/link'

export default function Program() {
  return (
    <div>
        <Box mb={10}>
            <Container maxW={1400}>
              <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>

                <Heading color={'teal.600'} textAlign={'center'} mb={10}>Available Program</Heading>
              </RevealWrapper>
                <SimpleGrid templateColumns={{base:'repeat(1 ,1fr)', lg: 'repeat(4, 1fr)'}} gap={5}>
                  <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                  <Link href={'/Program'}>
                    <Box py={24} boxShadow={'dark-lg'} bgColor={'purple'}>                   
                    <Heading color={'white'} fontSize={'larger'} textAlign={'center'} m={'auto'}> Artifical Intelligence</Heading>
                    </Box>
                  </Link>
                  </RevealWrapper>
                  <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                  <Link href={'/Program'}>
                    <Box py={24} boxShadow={'dark-lg'} bgColor={'yellow'}>
                    <Heading fontSize={'larger'} color={'black'} textAlign={'center'}> BlockChain</Heading>
                    </Box>
                  </Link>
                  </RevealWrapper>

                  <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                    <Link href={'/Program'}>

                    <Box py={24} boxShadow={'dark-lg'} bgColor={'hotpink'} >
                    <Heading fontSize={'larger'} color={'white'} textAlign={'center'}> Cloud Native</Heading>
                    </Box>
                    </Link>
                    </RevealWrapper>
                    <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                  <Link href={'/Program'}>
                    <Box py={24} boxShadow={'dark-lg'} bgColor={'teal'}>
                    <Heading fontSize={'larger'} color={'white'} textAlign={'center'}> Internet of Thing</Heading>
                    </Box>
                  </Link>
                    
                    </RevealWrapper>
                   
                </SimpleGrid>
            </Container>
        </Box>
    </div>
  )
}
