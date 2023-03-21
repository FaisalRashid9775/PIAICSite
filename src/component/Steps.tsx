'use client'
import { Box, Container, SimpleGrid, Text, Heading } from "@chakra-ui/react";
import React from "react";

export default function Steps(props:any) {
  return (
    <div>
      <Box m={{base : 6 ,  lg:24}} boxShadow={'dark-lg'} borderRadius={'2xl'}>
        <Container maxW={1400}>
          <SimpleGrid templateColumns={{base: 'repeat(1 ,1fr)', lg :'repeat(2 ,1fr)'}} p={8} gap={{base: 4, lg: 2}}>
            <Box display={'block'} m={'auto'}>
                <Box borderRadius={'full'} bgColor={'teal'} color={'white'}>
                    <Heading fontSize={'3xl'} p={{lg:12, base : 4}}>
                    {props.num}   
                    </Heading>
                </Box>
            </Box>
            <Box color={'teal'}>
            <Heading color={'teal'} textAlign={'center'} pb={4}>{props.stepnum}</Heading>
            <Text>
              {props.text}
            </Text>
            <Text>{props.text1}</Text>
            <Text>{props.text2}</Text>
            <Text>{props.text3}</Text>
            <Text>{props.text4}</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
}
