import {  Text, VStack } from "@chakra-ui/react";


export const Footer = () => {
  return(
  <VStack bg={'blackAlpha.900'} w={'100%'} minH={'fit-content'}>
    <Text color={'gray.500'} p={'.8rem'} fontSize={'14px'}>
     &copy; 2022 Vincent_Aigboje. All right Reserve. 
      </Text>
  </VStack>
  ) 
};
