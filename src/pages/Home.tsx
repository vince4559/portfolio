import { Box,  HStack, Image, Link, Stack, Text, } from "@chakra-ui/react";

import home from '../images/home.png';
import twitter from '../images/twitter.png';
import github from '../images/guthub.png';
import linked from '../images/linked.png';
import { Navigation } from "../components/Navigation";
import { GiStumpRegrowth } from "react-icons/gi";




export const Home = () => {
  return(
    <Box>
      <Navigation />
      <Box p={5} h={'100vh'} bgImg={home} bgPosition='center' objectFit={'contain'} 
      bgRepeat='no-repeat' bgColor={'blackAlpha.300'} w={'full'} bgBlendMode='color-dodge'>
      <Stack position={'absolute'} bottom={['3rem','2rem','12rem','8rem']} 
      p={'1.2rem'} >
     
      <Text w={['60%','50%']} color={'white'} py={'1rem'} fontSize={['.9rem','1.3rem','1.5rem','1.5rem']}   > 
      I analyse the needs of brands, and contribute values the business needs using my engineering Skills, leading to more customer sactisfaction.      
      </Text>

      <HStack w={['70%','50%']}>
        <GiStumpRegrowth size={'2rem'} color='white' />
        <Text color={'greenyellow'}>Let's grow your brand!!!.</Text>
      </HStack>

      <HStack p={'.7rem'} spacing={2}>
        <Link href="https://twitter.com/DaVinci25419866" isExternal>
         <Image src={twitter} w={'35px'} objectFit={'cover'} alt="twitter" />
        </Link>
        <Link href="https://github.com/vince4559" isExternal>
         <Image src={github} w={'35px'} objectFit={'cover'} alt="git-hub" />
        </Link>
        <Link  isExternal
         href="https://www.linkedin.com/in/vincent-aigboje-7615b6191/">
         <Image src={linked} w={'35px'} objectFit={'cover'} alt="linken" />
        </Link>
      </HStack>
      </Stack>
      
    </Box>
    </Box>
  )
};
