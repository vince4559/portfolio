import { Box,  HStack, Image, Link, Stack, Text, } from "@chakra-ui/react";

import home from '../images/home.png';
import twitter from '../images/twitter.png';
import github from '../images/guthub.png';
import linked from '../images/linked.png';




export const Home = () => {
  return(
    <Box p={5} h={'100vh'} bgImg={home} bgPosition='center' objectFit={'contain'} bgRepeat='no-repeat' bgColor={'black'} w={'full'} >
      <Stack position={'absolute'} bottom={['8rem','7rem','12rem','14rem']} 
      p={'1.2rem'} >
     
      <Text w={'50%'} color={'white'} py={'1rem'} fontSize={['1.1rem','1.5rem','1.5rem','1.5rem']} textAlign='left' > 
      A Frontend Developer who loves to solve problem, collaborate  and ready to take on new challanges and also excel with communication at all level.
      </Text>
      <HStack p={'.7rem'} spacing={2}>
        <Link href="https://twitter.com/DaVinci25419866">
         <Image src={twitter} w={'35px'} objectFit={'cover'} alt="twitter" />
        </Link>
        <Link href="https://github.com/vince4559">
         <Image src={github} w={'35px'} objectFit={'cover'} alt="git-hub" />
        </Link>
        <Link href="#">
         <Image src={linked} w={'35px'} objectFit={'cover'} alt="linken" />
        </Link>
      </HStack>
      </Stack>
      
    </Box>
  )
};
