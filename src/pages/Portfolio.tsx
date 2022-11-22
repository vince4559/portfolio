import {  Stack, Grid, GridItem, VStack, Image, Text, Link, Heading } from "@chakra-ui/react";
import port1 from '../images/port1.png';
import port2 from '../images/port2.png';
import port3 from '../images/port3.png';
import port4 from '../images/port4.png';

export const Portfolio = () => {
  return(
      <Stack bg={'black'} p={5}  >
        <Heading p={2} color={'white'} mt={'3rem'} >My Portfolio__</Heading>
      <Grid templateColumns={'repeat(2, 1fr)'} display={['block', 'block', 'flex', 'flex']} justifyContent={'space-around'} m={3}   >

        <GridItem colSpan={[2, 2, 1, 1]} mb={7} w={'100%'}>
            <VStack  border={'solid 1px gray'} p={3} m={3} >
            <Image alt='port' src={port1} w={'200px'} objectFit={'contain'} />
            <Text color={'gray'} fontSize={'1.2rem'} >A simple task tracker, use to organise your todos along side the time/date for execution</Text>
            <Text color={'white'}>Technologies used: Chakra ui, javascript, React</Text>
            <span style={{color: 'white'}}> Live link: 
            <Link color={'blue'} href="https://todo-task-list-app.netlify.app/">https://todo-task-list-app.netlify.app/</Link>
            </span>
            </VStack>          
        </GridItem>

        <GridItem colSpan={[2, 2, 1, 1]} mb={3} w={'100%'} >
        <VStack border={'solid 1px gray'} p={3} m={3}>
            <Image alt='port' src={port3} w={'200px'} objectFit={'contain'} />
            <Text color={'gray'} fontSize={'1.2rem'} >
             An application that tell you some usefull information about a country when you search with the country name
            </Text>
            <Text color={'white'}>Technologies used: country-Api, Chakra ui, javascript, React</Text>
            <span style={{color: 'white'}}> Live link: 
            <Link color={'blue'} href="https://countrysearchinfo.netlify.app/"> https://countrysearchinfo.netlify.app/</Link>
            </span>
            </VStack>           
        </GridItem>
      </Grid>

      <Grid templateColumns={'repeat(2, 1fr)'} display={['block', 'block', 'flex', 'flex']} justifyContent={'space-around'} m={3}  p={5} >
      <GridItem colSpan={[2, 2, 1, 1]} mb={3} w={'100%'}>
            <VStack  border={'solid 1px gray'} p={3} m={3} >
            <Image alt='port' src={port2} w={'200px'} objectFit={'contain'} />
            <Text color={'gray'} fontSize={'1.2rem'} >
              An application that analysis the amount of words, letters and numbers of each character.
            </Text>
            <Text color={'white'}>Technologies used: Chakra ui, javascript React.</Text>
            <span style={{color: 'white'}}> Live link: 
            <Link color={'blue'} href="##"> http://task</Link>
            </span>
            </VStack>          
        </GridItem>

        <GridItem colSpan={[2, 2, 1, 1]} mb={3} w={'100%'}>
            <VStack  border={'solid 1px gray'} p={3} m={3} >
            <Image alt='port' src={port4} w={'200px'} objectFit={'contain'} />
            <Text color={'gray'} fontSize={'1.2rem'} >
              A website where users can register and get to see their information on the dashboard and can also log out.
            </Text>
            <Text color={'white'}>Technologies used: Chakra ui, javascript React.</Text>
            <span style={{color: 'white'}}> Live link: 
            <Link color={'blue'} href="https://techatonproject2.netlify.app/">https://techatonproject2.netlify.app/</Link>
            </span>
            </VStack>          
        </GridItem>
      </Grid>
      </Stack>
  )
};
