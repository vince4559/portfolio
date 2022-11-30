import {  Stack, Grid, GridItem, VStack, Image, Text, Link, Heading } from "@chakra-ui/react";
import port1 from '../images/port1.png';
import port2 from '../images/port2.png';
import port3 from '../images/port3.png';
import port4 from '../images/port4.png';

export const Portfolio = () => {
  return(
      <Stack bg={'black'} p={5}  >
        <Heading size={'lg'} p={2} color={'white'} mt={'5rem'} >My Portfolio__</Heading>
      <Grid templateColumns={'repeat(2, 1fr)'} display={['block', 'block', 'flex', 'flex']} justifyContent={'space-around'} m={3}   >

        <GridItem colSpan={[2, 2, 1, 1]} mb={7} w={'100%'}>
            <VStack  border={'solid 1px gray'} p={3} m={3} >
            <Image loading='lazy' alt='port' src={port1} w={'200px'} objectFit={'contain'} />
            <Text color={'gray'} fontSize={'1.2rem'} >A simple task tracker, use to organise your todos along side the time/date for execution</Text>
            <Text color={'white'}>
              Technologies used: Chakra ui, javascript, React
            </Text>
            <Text color={'white'} fontSize='.9rem'>link:__
              <Link color={'green.200'} 
              href="https://todo-task-list-app.netlify.app/" isExternal>
              https://todo-task-list-app.netlify.app/
              </Link>
            </Text>
            </VStack>          
        </GridItem>

        <GridItem colSpan={[2, 2, 1, 1]} mb={3} w={'100%'} >
        <VStack border={'solid 1px gray'} p={3} m={3}>
            <Image alt='port' loading='lazy' src={port3} w={'200px'} objectFit={'contain'} />
            <Text color={'gray'} fontSize={'1.2rem'} >
             An application that tell you some usefull information about a country when you search with the country name
            </Text>
            <Text color={'white'}>Technologies used: country-Api, Chakra ui, javascript, React
            </Text>
            <Text color={'white'} fontSize='.9rem' >link:__
            <Link color={'green.200'} 
            href="https://countrysearchinfo.netlify.app/" isExternal>
               https://countrysearchinfo.netlify.app/
            </Link>
            </Text>
            </VStack>           
        </GridItem>
      </Grid>

      <Grid templateColumns={'repeat(2, 1fr)'} display={['block', 'block', 'flex', 'flex']} justifyContent={'space-around'} m={3}  p={5} >
      <GridItem colSpan={[2, 2, 1, 1]} mb={3} w={'100%'}>
            <VStack  border={'solid 1px gray'} p={3} m={3} >
            <Image alt='port' loading='lazy' src={port2} w={'200px'} objectFit={'contain'} />
            <Text color={'gray'} fontSize={'1.2rem'} >
              An application that analysis the amount of words, letters and numbers of characters in a text
            </Text>
            <Text color={'white'}>
              Technologies used: Chakra ui, javascript, React
              </Text>
            <Text color={'white'} fontSize='.9rem'> link:__
            <Link color={'green.200'} href="##" isExternal>
            https://analyze-text.vercel.app/
            </Link>
            </Text>
            </VStack>          
        </GridItem>

        <GridItem colSpan={[2, 2, 1, 1]} mb={3} w={'100%'}>
            <VStack  border={'solid 1px gray'} p={3} m={3} >
            <Image alt='port' loading='lazy' src={port4} w={'200px'} objectFit={'contain'} />
            <Text color={'gray'} fontSize={'1.2rem'} >
              A fully functional site, with user dashboard that displays registration details
            </Text>
            <Text color={'white'}>Technologies used: Chakra ui, javascript React.</Text>
            <Text color={'white'} fontSize='.8rem'>link:__
            <Link color={'green.200'} 
            href="https://techatonproject2.netlify.app/" isExternal>
              https://techatonproject2.netlify.app/
              </Link>
            </Text>
            </VStack>          
        </GridItem>
      </Grid>
      </Stack>
  )
};
