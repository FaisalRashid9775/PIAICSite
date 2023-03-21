"use client";
import React from "react";
import { Box, Container, SimpleGrid, Button, Flex,Menu,MenuButton,MenuItem,IconButton,MenuList } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../public/Logo.svg";
import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <div>
        <Box boxShadow={"dark-lg"} color={'teal'}>
        
          <SimpleGrid templateColumns={{base :'repeat(3, 1fr)', lg : 'repeat(3, 1fr)'}}>
            <Box>
              <Link href={'/'}>
              <Image src={logo} alt={"piaic"} width={50} height={60}></Image>
              </Link>
            </Box>
            <Box color={'teal'} fontSize={"xl"} p={5}>
              <Flex gap={20} display={{ lg: "flex", base: "none" }}>
                <Link href={"/HowitWork"}>How it work</Link>
                <Link href={"/Program"}>Program</Link>
                <Link href={"./About"}>About</Link>
              </Flex>
            </Box>
            <Box p={5} display={{ lg: "flex", base: "none" }}>
              <Button float={"right"} colorScheme={"teal"}>
                <Link href={'https://portal.piaic.org/signup'}>Apply Now</Link>
              </Button>
            </Box>
            <Box display={{base : 'initial', lg : 'none'}} p={5} pl={20} float={'right'}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  <MenuItem>
                    <Link href={'/HowitWork'}>How it work</Link>
                  </MenuItem>
                  <MenuItem >
                  <Link href={'/Program'}>Program</Link>
                  </MenuItem>
                  <MenuItem >
                  <Link href={'/About'}>About</Link>
                  </MenuItem>
                  <MenuItem >
                  <Link href={'https://portal.piaic.org/signup'}>Apply Now</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </SimpleGrid>
       
      </Box>
    </div>
  )
}
