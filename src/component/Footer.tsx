import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <Box bgColor={"teal.600"} color={'white'} p={{basa : 5, lg :15}}>
        <Container maxW={1400} p={{base : 5, lg :15}} >
          <Flex gap={{base : 12 , lg :24}} display={{base: 'grid' , lg :'flex'}} textAlign={{base: 'center' , lg: 'initial'}} py={{base : 2, lg : 5}}>
            <Box>
              <Heading>Navigation</Heading>
              <Flex direction={'column'}>
              <Link href={"/"}>Home</Link>
              <Link href={"https://portal.piaic.org/signup"}>Apply</Link>
              <Link href={"/HowitWork"}>How it Work</Link>
              </Flex>
            </Box>
            <Box>
              <Heading>Available Program</Heading>
              <Flex direction={"column"}>
                <Link href={""}>Artifical Intelligence</Link>
                <Link href={""}>BlockChain</Link>
                <Link href={""}>IOT</Link>
                <Link href={""}>Cloud Computing</Link>
              </Flex>
            </Box>
            <Box>
            <Heading>Contact us</Heading>
                <Flex direction={'column'}>
              <Link href={""}>Facebook</Link>
              <Link href={""}>Youtube</Link>
              <Link href={""}>Linkdln</Link>
                </Flex>
            </Box>
            <Box>
                <Heading>Help line</Heading>
                <Text>+92-308-2220203 (WhatsApp as well)</Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </div>
  );
}
