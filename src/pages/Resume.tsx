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
                I analyse the needs of a business, and contribute values the business needs using my engineering Skills.
              </Text>
              <UnorderedList fontSize={[14, 16, 16, 18]} textColor={'white'} 
                spacing={3} p={3}>
                <ListItem>Benin City, Nigeria.</ListItem>
                <ListItem>+234-7065662752</ListItem>
                <ListItem>aigbojevincent6@gmail.com</ListItem>
              </UnorderedList>
            </Stack>
          </GridItem>
          
          <GridItem  p={5} colSpan={[2, 2, 1, 1]} mb={2}>
            <Heading textColor={'white'} fontSize={[20, 22, 24, 24]}>
              Techinal Skills
            </Heading>
            <Stack>
              <UnorderedList color={'white'} spacing={2} p={3} fontSize={'1.2rem'}>
                <ListItem>Html5</ListItem>
                <ListItem>Css3</ListItem>
                <ListItem>Javascript</ListItem>
                <ListItem>Tailwind css</ListItem>
                <ListItem>React js</ListItem>           
                <ListItem>Redux</ListItem>           
                <ListItem>Typescript</ListItem>
                <ListItem>Chakra ui</ListItem>             
                <ListItem>Firebase</ListItem>
                <ListItem>Next js</ListItem>
              </UnorderedList>
            </Stack>
          </GridItem>
        </Grid>

        <Grid templateColumns={'repeat(2, 1fr)'} gap={5}>

          <GridItem p={5} colSpan={[2,2,1,1]}>
            <Heading fontSize={['md', 'md', 'lg', 'xl']} textColor={'white'}>
              Professional Experience
            </Heading>

            <Stack>
              <Text fontSize={[16, 18, 20, 22]} 
              textColor={'green.300'} fontWeight={'medium'}>
                --Frontend Engineer  at Dimatech Consultancy--
              </Text>
              <Text fontSize={[10, 12, 14, 16]} textColor={'white'} bg={'gray.700'} w={'fit-content'} p={'1'} fontWeight={'semibold'}>
                2023 - to current 
              </Text>
              <Text fontSize={[14, 16, 16, 18]} textColor={'white'}>
                Lagos, Nigeria.
              </Text>
              <UnorderedList fontSize={[14, 16, 16, 18]} textColor={'white'} 
                spacing={3} p={3} fontStyle={'oblique'}>
                <ListItem>
                  Co-ordinated the design and development of web pages and ensuring that web design is smart phone capable and  user friendly.
                </ListItem>
                <ListItem>
                  Managed and consumed api's from the backend team stricking a balance between functionality and aesthetic design.
                </ListItem>
                <ListItem>
                  Colaborate with stackholders and peers in to ensure proper task allocation and successful deployment of software.
                </ListItem>
              </UnorderedList>
            </Stack>

            <Stack>
              <Text fontSize={[16, 18, 20, 22]} 
              textColor={'green.300'} fontWeight={'medium'}>
                --Frontend Developer  at Techaton-- Interm
              </Text>
              <Text fontSize={[10, 12, 14, 16]} textColor={'white'} bg={'gray.700'} w={'fit-content'} p={'1'} fontWeight={'semibold'}>
               2022 Sept -Dec
              </Text>
              <Text fontSize={[14, 16, 16, 18]} textColor={'white'}>
                Lagos, Nigeria.
              </Text>
              <UnorderedList fontSize={[14, 16, 16, 18]} textColor={'white'} 
                spacing={3} p={3} fontStyle={'oblique'}>
                <ListItem>
                 co-ordinated the use of development tools like React.js , google firebase and github  
                </ListItem>
                <ListItem>
                  Spearheadedly managed projects from start to finish
                </ListItem>
                <ListItem>
                  Use Slack, Zoom and Google Meet to communicate remotely with other developers 
                </ListItem>
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
            <Text fontSize={[10, 12, 14, 16]} textColor={'white'} bg={'gray.700'} w={'fit-content'} p={'1'} fontWeight={'semibold'}>
            2011 - 2013              
            </Text>
            <Text fontSize={[14, 16, 16, 18]} textColor={'white'} my={3}>
            Basic Computer Operation and Software/Hardware Engineering
            </Text>

            <Heading textColor={'green.300'} fontSize={[14, 16, 18, 20]} mt={10} mb={3}>
              University of Benin, Edo state.         
            </Heading>
            <Text fontSize={[10, 12, 14, 16]} textColor={'white'} bg={'gray.700'} w={'fit-content'} p={'1'} fontWeight={'semibold'}>
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
