import { Box,  Grid, GridItem, Heading,  ListItem, Stack, Text, UnorderedList, } from "@chakra-ui/react";

export const Resume = () => {
  return(
    <section>
          <Box p={5} bg={'black'} minH={'95vh'}>
        <Heading size={'lg'} textColor={'white'} mt={'5rem'}  mb={10}>
            CHECK MY RESUME___
        </Heading>
        <Grid templateColumns={'repeat(2, 1fr)'} gap={5}>
          <GridItem p={3} colSpan={[2, 2, 1, 1]} mb={2}>
            <Heading textColor={'white'} fontSize={[20, 22, 24, 24]}>
              Summary
            </Heading>
            <Stack p={5}>
            <Text  fontSize={[16, 18, 22, 24]} 
              textColor={'green.300'} fontWeight={'medium'} my={3}>
                VINCENT AIGBOJE
              </Text>
              <Text fontSize={[14, 16, 18, 20]} textColor={'white'} fontStyle={'oblique'} textTransform='capitalize'>
                Self Driven and enthusiastic Frontend Developer. i help company and 
                individual increase website performance. leading to more revenue and customer sactisfaction.
              </Text>
              <UnorderedList fontSize={[14, 16, 16, 18]} textColor={'white'} 
                spacing={3} p={3}>
                <ListItem>Benin City, Nigeria.</ListItem>
                <ListItem>+234-7065662752</ListItem>
                <ListItem>aigbojevincent6@gmail.com</ListItem>
              </UnorderedList>
            </Stack>
          </GridItem>
          <GridItem p={5} colSpan={[2,2,1,1]}>
            <Heading fontSize={['md', 'md', 'lg', 'xl']} textColor={'white'}>
              Professional Experience
            </Heading>
            <Stack>
              <Text fontSize={[16, 18, 22, 24]} 
              textColor={'green.300'} fontWeight={'medium'}>
                --Frontend Developer  at Techaton--
              </Text>
              <Text fontSize={[10, 12, 14, 16]} textColor={'white'} bg={'gray.700'} w={['50%', '30%', '25%', '25%']} p={'1'} fontWeight={'semibold'}>
                2022 
              </Text>
              <Text fontSize={[14, 16, 16, 18]} textColor={'white'}>
                Lagos, Nigeria.
              </Text>
              <UnorderedList fontSize={[14, 16, 16, 18]} textColor={'white'} 
                spacing={3} p={3} fontStyle={'oblique'}>
                <ListItem>
                  Led full redesign of website with findings from customer segmentation and competitive research, increasing website leads.
                </ListItem>
                <ListItem>
                  Managed and consumed api's from the backend team
                </ListItem>
                <ListItem>
                  Spearheadedly managed projects from start to finish
                </ListItem>
              </UnorderedList>
            </Stack>
          </GridItem>
        </Grid>

        <Grid templateColumns={'repeat(2, 1fr)'} gap={5}>
          <GridItem  p={5} colSpan={[2, 2, 1, 1]} mb={2}>
            <Heading textColor={'white'} fontSize={[20, 22, 24, 24]}>
              Techinal Skills
            </Heading>
            <Stack>
              <UnorderedList color={'white'} spacing={2} p={3} fontSize={'1.2rem'}>
                <ListItem>Html5</ListItem>
                <ListItem>Css3</ListItem>
                <ListItem>Javascript</ListItem>                
                <ListItem>Typescript</ListItem>
                <ListItem>Chakra ui</ListItem>
                <ListItem>Bootstrap</ListItem>
                <ListItem>Tailwind css</ListItem>
                <ListItem>React</ListItem>
                <ListItem>Firebase</ListItem>
                <ListItem>Next js</ListItem>
              </UnorderedList>
            </Stack>
          </GridItem>

          <GridItem  p={5} colSpan={[2, 2, 1, 1]} mb={2} >
            <Heading textColor={'white'} fontSize={[20, 22, 24, 24]}>
              Education
            </Heading>
            <Heading textColor={'green.300'} fontSize={[14, 16, 18, 20]} my={3}>
            Linestone Victory Computer Institute, Edo state.
            </Heading>
            <Text fontSize={[10, 12, 14, 16]} textColor={'white'} bg={'gray.700'} w={['50%', '30%', '25%', '25%']} p={'1'} fontWeight={'semibold'}>
            2011 - 2013              
            </Text>
            <Text fontSize={[14, 16, 16, 18]} textColor={'white'} my={3}>
            Basic Computer Operation and Software/Hardware Engineering
            </Text>

            <Heading textColor={'green.300'} fontSize={[14, 16, 18, 20]} mt={10} mb={3}>
              University of Benin, Edo state.         
            </Heading>
            <Text fontSize={[10, 12, 14, 16]} textColor={'white'} bg={'gray.700'} w={['50%', '30%', '25%', '25%']} p={'1'} fontWeight={'semibold'}>
            2014 - 2020
            </Text>
            <Text fontSize={[14, 16, 16, 18]} textColor={'white'} my={3}>
            B.Eng Chemical Engineering      
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </section>
  )
};
