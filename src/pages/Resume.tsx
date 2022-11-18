import { Box,  Grid, GridItem, Heading,  ListItem, Stack, Text, UnorderedList, } from "@chakra-ui/react";

export const Resume = () => {
  return(
    <Box p={5} bg={'black'}>
      
      <Heading size={['lg', 'xl', '2xl', '2xl']} textColor={'white'} my={3}  mb={10}>
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
            <Text fontSize={[14, 16, 18, 20]} textColor={'white'} fontStyle={'oblique'} >
              Passionate and innovative Frontend Developer, with 2+ years of experience utilizing technology to make for a better user experience.
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
               --Frontend Developer (Interm) at Techaton--
            </Text>
            <Text fontSize={[12, 14, 16, 18]} textColor={'white'} bg={'gray.700'} w={['50%', '30%', '25%', '25%']} p={'1'} fontWeight={'semibold'}>
              2022 - present
            </Text>
            <Text fontSize={[14, 16, 16, 18]} textColor={'white'}>
              Lagos, Nigeria.
            </Text>
            <UnorderedList fontSize={[14, 16, 16, 18]} textColor={'white'} 
              spacing={3} p={3} fontStyle={'oblique'}>
              <ListItem>
                creating web applications that works with Api and performs CRUD operation 
              </ListItem>
              <ListItem>
                Work with team on a collaborative project where we used github to manage repository, used trello for task update and Google Meet for cumminicating remotely
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
            <UnorderedList color={'white'} spacing={3} p={3} fontSize={'1.2rem'}>
              <ListItem>Html5</ListItem>
              <ListItem>Css3</ListItem>
              <ListItem>Javascript</ListItem>
              <ListItem>React</ListItem>
              <ListItem>Typescript</ListItem>
              <ListItem>Chakra ui</ListItem>
              <ListItem>Bootstrap</ListItem>
            </UnorderedList>
          </Stack>
        </GridItem>

        <GridItem  p={5} colSpan={[2, 2, 1, 1]} mb={2} >
          <Heading textColor={'white'} fontSize={[20, 22, 24, 24]}>
            Education
          </Heading>
          <Heading textColor={'green.300'} fontSize={[14, 16, 18, 20]} my={3}>
            Basic Computer Operation and Software/Hardware Engineering
          </Heading>
          <Text fontSize={[12, 14, 16, 18]} textColor={'white'} bg={'gray.700'} w={['50%', '30%', '25%', '25%']} p={'1'} fontWeight={'semibold'}>
              2011 - 2013
          </Text>
          <Text fontSize={[14, 16, 16, 18]} textColor={'white'} my={3}>
            Linestone Victory Computer Institute, Nigeria.
          </Text>

          <Heading textColor={'green.300'} fontSize={[14, 16, 18, 20]} mt={10} mb={3}>
            B.Eng Chemical Engineering
          </Heading>
          <Text fontSize={[12, 14, 16, 18]} textColor={'white'} bg={'gray.700'} w={['50%', '30%', '25%', '25%']} p={'1'} fontWeight={'semibold'}>
              2014 - 2019
          </Text>
          <Text fontSize={[14, 16, 16, 18]} textColor={'white'} my={3}>
            University Of Benin,  Nigeria.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  )
};
