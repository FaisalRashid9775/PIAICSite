import React from 'react'
import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Logo from '../../public/LOGO.png'
import Logo1 from '../../public/LOGO1.svg'
import { RevealWrapper } from 'next-reveal'

export default function Partner() {
  return (
    <div>
        <Box my={24}>
            <Container>
                <Box>
                <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
                    
                    <Heading color={'teal.600'} textAlign={'center'} m={10}>Strategic Partner</Heading>
                    </RevealWrapper>
                </Box>
                <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                    
                <Flex m={10} gap={10} pl={8}>
                    <Image src={Logo} alt={"panacloud"} height={90} width={150}></Image>
                    <Image src={Logo1} alt={'silayni'} height={90} width={150}></Image>
                </Flex>
                  </RevealWrapper>
            </Container>
        </Box>
    </div>
  )
}
