import {  Text, VStack } from "@chakra-ui/react";


export const Footer = () => {
  return(
  <VStack bg={'blackAlpha.800'} w={'100%'} minH={'fit-content'}>
    <Text color={'gray.300'} p={'1rem'} mb={2} fontSize={'15px'}>
     &copy; 2023 Vincent_Aigboje. All right Reserve. 
      </Text>
  </VStack>
  ) 
};
