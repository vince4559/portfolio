import { Flex, Heading, } from "@chakra-ui/react";
import { HomeNav } from "./HomeNav";
import { MenuNav } from "./MenuNav";

 

export const Navigation = () => {
  return(
   <Flex bg={'blackAlpha.900'} shadow={'dark-lg'} p={'.7rem'} px={3} >
    <Flex justify={'flex-start'} w={'full'} align='center'  >
      <Heading size={'lg'} fontFamily={'serif'} color="white" >
        Vincent Aigboje
      </Heading>
    </Flex>
    <Flex justify={'flex-end'} w={'full'} align='center' >
      <HomeNav />
    </Flex>
    <Flex justify={'flex-end'}  align='center'>
     <MenuNav />
    </Flex>
   </Flex>
  )
};
