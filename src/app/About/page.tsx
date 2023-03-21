'use client'
import { Box, Center, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";


export default function page() {
  return (
    <div>
      <Box>
        <Container maxW={1400}>
          <Box p={{lg :24, base:4}} mx={{lg:40 , base:2}}>
            <Center >
            <Image borderRadius={'full'} w={70} h={90} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/President_of_Pakistan_Dr_Arif_Alvi_%28cropped%29.jpg/220px-President_of_Pakistan_Dr_Arif_Alvi_%28cropped%29.jpg'></Image>
              
            </Center>
            
            <Heading color={'teal'} textAlign={'center'}>Dr. Arif Alvi</Heading>
            <Heading color={'teal.200'} pb={4} fontSize={'sm'} textAlign={'center'}>President of the Islamic Republic of Pakistan</Heading>
            <Text pb={4}>
              Dr. Arif Alvi was sworn in as the 13th President of Islamic
              Republic of Pakistan on 9th September 2018.
            </Text>
            <Text pb={4}>
              Dr. Arif Alvi was born in 1949 and completed his early education
              in Karachi. He did his Bachelor of Dental Surgery (BDS) from De-
              Montmorency College of Dentistry, Lahore where he was declared the
              Best Graduate. He completed his Masters of Science in the field
              of Prosthodontics from University of Michigan (1975) and in
              Orthodontics from University of Pacific, San Francisco (1982). He
              was awarded fellowship Diplomatic American Board of Orthodontists
              (1995).
            </Text>
            <Text pb={4}>
              President Dr. Arif Alvi has been a renowned professional and has
              held many important positions in the field of Dentistry. He
              remained Dean of Orthodontics, College of Physicians and Surgeons
              of Pakistan, President, Pakistan Dental Association (1997-2001),
              Pakistan Association of Orthodontists (2005), Asia Pacific Dental
              Federation (2006-07) and Councilor of the World Dental Federation
              (2007-2013). Through his sheer hard work in the World Dental
              Federation, he was able to get the declaration of 20th March as
              World Oral Health Day. He is also an author of a book, theses, and
              many articles.
            </Text>
            <Text pb={4}>
              Dr. Arif Alvi political career commenced with his pro-democracy
              struggle against the dictatorship of General Ayub Khan. He is a
              founding member of Pakistan Tehreek-e-Insaf (PTI) that came into
              being in 1996. He remained a member of the PTI Central Executive
              Committee since its inception and has held the offices of PTI
              President of Sindh (1997-2001), Central Vice President (2001-2006)
              and Secretary General (2006-2013). In line with Constitution of
              Pakistan, he resigned from all the positions of PTI before
              assuming the prestigious office of the President.
            </Text>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
