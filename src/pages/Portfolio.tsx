import {  Stack, Grid, GridItem, VStack, Image, Text, Link, Heading } from "@chakra-ui/react";
import port1 from '../images/port1.png';
import port2 from '../images/port2.png';
import port3 from '../images/port3.png';
import port4 from '../images/port4.png';
import port5 from '../images/port5.png';
import port6 from '../images/port6.png';

export const Portfolio = () => {
  return(
     <section>
          <Stack bg={'black'} p={5}  >
          <Heading size={'lg'} p={2} color={'white'} mt={'5rem'} >
            My Portfolio__
            </Heading>
        <Grid templateColumns={'repeat(2, 1fr)'} display={['block', 'block', 'flex', 'flex']} justifyContent={'space-around'} m={3}   >

          <GridItem colSpan={[2, 2, 1, 1]} mb={7} w={'100%'}>
              <VStack  border={'solid 1px gray'} p={3} m={3} >
              <Image loading='lazy' alt='port' src={port6} 
              w={'200px'} objectFit={'contain'} h={'330px'} />
              <Text color={'gray'} fontSize={'1rem'} >
              a web app that give up to date information about your favorite crypto.
              with firebase integration for signup/login and setting watchlist for coin
              </Text>
              <Text color={'white'} fontSize={'1rem'}>
                Technologies used: Chakra ui, Typescript, React, React-alice-carousel, Chartjs, React-chartjs-2, react-paginate, firebase,
              </Text>
              <Text color={'white'} fontSize='.9rem'>link:__
                <Link color={'green.200'} 
                href="https://crypto-hub-i8wg.vercel.app/" isExternal>
                https://crypto-hub-i8wg.vercel.app/
                </Link>
              </Text>
              </VStack>          
          </GridItem>

          <GridItem colSpan={[2, 2, 1, 1]} mb={3} w={'100%'} >
          <VStack border={'solid 1px gray'} p={3} m={3}>
              <Image alt='port' loading='lazy' src={port5} w={'200px'} h={'360px'} objectFit={'contain'} />
              <Text color={'gray'} fontSize={'1.2rem'} >
              A premium restaurant delivery website
              </Text>
              <Text color={'white'}>Technologies used: Chakra ui, typescript, React
              </Text>
              <Text color={'white'} fontSize='.9rem' >link:_ 
              <Link color={'green.200'} 
              href="https://fast-food-order-exvi.vercel.app/" isExternal>
                https://fast-food-order-exvi.vercel.app/
              </Link>
              </Text>
              </VStack>           
          </GridItem>
        </Grid>

        <Grid templateColumns={'repeat(2, 1fr)'} display={['block', 'block', 'flex', 'flex']} justifyContent={'space-around'} m={3}  p={5} >
        <GridItem colSpan={[2, 2, 1, 1]} mb={3} w={'100%'}>
        <VStack  border={'solid 1px gray'} p={3} m={3} >
          <Image loading='lazy' alt='port' src={port1} w={'200px'} objectFit={'contain'} h={'330px'} />
          <Text color={'gray'} fontSize={'1.2rem'} >
            A phone- Ecommerce site. with awesome ways to filter products
          </Text>
          <Text color={'white'}>
            Technologies used: Chakra ui, javascript, React
          </Text>
          <Text color={'white'} fontSize='.9rem'>link:__
            <Link color={'green.200'} 
            href="https://online-store-8pti.vercel.app/" isExternal>
            https://online-store-8pti.vercel.app/
            </Link>
          </Text>
          </VStack>           
          </GridItem>

          <GridItem colSpan={[2, 2, 1, 1]} mb={7} w={'100%'}>
          <VStack  border={'solid 1px gray'} p={3} m={3} >
              <Image alt='port' loading='lazy' src={port2} w={'200px'} h={'330px'} objectFit={'contain'} />
              <Text color={'gray'} fontSize={'1.2rem'} >
                Real estate rental services
              </Text>
              <Text color={'white'}>
                Technologies used: Chakra ui, typescript, React, googlemap
                </Text>
              <Text color={'white'} fontSize='.9rem'> link:__
              <Link color={'green.200'} href="https://real-estate-rentals.vercel.app/" isExternal>
              https://real-estate-rentals.vercel.app/
              </Link>
              </Text>
              </VStack>          
          </GridItem>
        </Grid>

        <Grid templateColumns={'repeat(2, 1fr)'} display={['block', 'block', 'flex', 'flex']} justifyContent={'space-around'} m={3}   >

        <GridItem colSpan={[2, 2, 1, 1]} mb={3} w={'100%'}>
              <VStack  border={'solid 1px gray'} p={3} m={3} >
              <Image alt='port' loading='lazy' src={port4} w={'200px'} h={'300px'} objectFit={'contain'} />
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

          <GridItem colSpan={[2, 2, 1, 1]} mb={3} w={'100%'} >
          <VStack border={'solid 1px gray'} p={3} m={3}>
              <Image alt='port' loading='lazy' src={port3} w={'200px'} h={'330px'} objectFit={'contain'} />
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
        </Stack>
     </section>
  )
};
