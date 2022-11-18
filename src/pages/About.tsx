import {Box,  Heading, Grid, GridItem, List, ListIcon, ListItem, Text, Stack,} from '@chakra-ui/react'
import { StackedImg } from '../components/StackedImg';

export const About = () => {
  return(
    <Box bg={'gray'} h={'100vh'}>
      <Box p={5} bg={'black'}>
      <Heading color={'gray.200'} p={3} size={['md', 'lg', 'lg', 'xl']}>About Me___</Heading>
      <Heading textAlign={'center'} textColor={'green.500'} my={4} size={['md', 'lg', 'lg', '2xl']}>
        Frontend  Developer
      </Heading>
      <Text textAlign={'center'} textColor={'white'} fontSize={[16, 18, 20, 22]}>
        I'm a passionate and always ready to learn frontend developer, who is always ready to take on a new challanges 
      </Text>
      <Stack>
      <Grid templateColumns={'repeat(2, 1fr)'} display={['block', 'block', 'flex', 'flex']} justifyContent={'space-around'} my={5} >
        <GridItem colSpan={[2, 2, 1, 1]} mb={3}>
          <List spacing={3} fontSize={[14, 16, 17, 18]} fontWeight={'medium'} color={'white'}>
              <ListItem>
                <ListIcon   />
                github: www.portfolio.com
              </ListItem>
              <ListItem>
                <ListIcon  />
                Phone: +2347065662752
              </ListItem>
              <ListItem>
                <ListIcon  />
                City: Benin city, Nigeria.
              </ListItem>
            </List>
            
          </GridItem>
          <GridItem colSpan={[2, 2, 1, 1]} >
          <List spacing={3} fontSize={[14, 16, 17, 18]} fontWeight={'medium'} color={'white'} >
            <ListItem>
                <ListIcon />
                Degree: B.ENG,  CHEMICAL ENGINEERING
            </ListItem>
            <ListItem>
                <ListIcon  />
                Email: aigbojevincent6@gmail.com
              </ListItem>
              <ListItem>
                <ListIcon   />
                Freelance: Avialable
              </ListItem>
          </List>
          </GridItem>
        </Grid>
      </Stack>

      <Stack my={4} >
        <Heading color={'gray.200'}>My Skills__</Heading>
        <StackedImg />
      </Stack>

      <Stack gap={2} my={3}>
      <Heading  textColor={'gray.200'}>Interest__</Heading>
        <Grid templateColumns={'repeat(2, 1fr)'} gap={2} display={['block', 'block', 'flex', 'flex']} justifyContent={'space-around'} >
        <GridItem colSpan={[2, 2, 1, 1]}>
          <List fontSize={[16, 18, 18, 20]} textColor={'white'} spacing={3}>
            <ListItem>
            <ListIcon  color={'white'} />
            Quick Learning
            </ListItem>
            <ListItem>
            <ListIcon  color={'white'} />
            Positive Attitude
            </ListItem>
            <ListItem>
            <ListIcon  color={'white'} />
            Problem Solving
            </ListItem>
          </List>
        </GridItem>
        <GridItem colSpan={[2, 2, 1, 1]} mt={3} >
        <List fontSize={[16, 18, 18, 20]} 
              textColor={'white'} spacing={3} >
            <ListItem>
            <ListIcon  color={'white'} />
            Good Team Player
            </ListItem>
            <ListItem>
            <ListIcon  color={'white'} />
            Good Cummunication Skills
            </ListItem>
            <ListItem>
            <ListIcon  color={'white'} />
            Time and task Management
            </ListItem>
          </List>
        </GridItem>
      </Grid>
      </Stack>
    </Box>
    </Box>
  )
};
