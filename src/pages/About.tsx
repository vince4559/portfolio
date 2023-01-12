import {Box,  Heading, Grid, GridItem, List, ListIcon, ListItem, Text, Stack, UnorderedList, Link,} from '@chakra-ui/react'
import { StackedImg } from '../components/StackedImg';
import { AiOutlineCheck } from "react-icons/ai";


export const About = () => {
  return(
    <section>
            <Box bg={'gray'} minH={'95vh'}>
          <Box p={5} bg={'black'}>
          <Heading color={'gray.200'} mt={'5rem'} p={3} size={'lg'}>About Me___</Heading>
          <Heading textAlign={'center'} textColor={'green.500'} my={4} size={'lg'}>
            Frontend  Developer
          </Heading>
          <Text textAlign={'center'} textColor={'whiteAlpha.800'} fontSize={[16, 18, 20, 22]} p={3}>
            A passionate and a fast learner who loves to solve problem and not afraid to fail, and also excel with communicating among teams at all levels. Nothing brings me greater pleasure than finding innovative and realible solutions to problems.
          </Text>
          <Stack>
          <Grid templateColumns={'repeat(2, 1fr)'} display={['block', 'block', 'flex', 'flex']} justifyContent={'space-around'} my={5} >
            <GridItem colSpan={[2, 2, 1, 1]} mb={3}>
              <UnorderedList spacing={3} fontSize={[14, 16, 17, 18]} fontWeight={'medium'} color={'white'}>
                  <ListItem>github: <Link _hover={{color: 'green'}} href="https://github.com/vince4559" isExternal>
                      https://github.com/vince4559
                    </Link>
                  
                  </ListItem>
                  <ListItem>
                    Phone: +2347065662752
                  </ListItem>
                  <ListItem>
                    City: Benin city, Nigeria.
                  </ListItem>
                </UnorderedList>
                
              </GridItem>
              <GridItem colSpan={[2, 2, 1, 1]} >
              <UnorderedList spacing={3} fontSize={[14, 16, 17, 18]} fontWeight={'medium'} color={'white'} >
                <ListItem>
                    Degree: B.ENG,  CHEMICAL ENGINEERING
                </ListItem>
                <ListItem>
                    Email: aigbojevincent6@gmail.com
                  </ListItem>
                  <ListItem>
                    Freelance: Avialable
                  </ListItem>
              </UnorderedList>
              </GridItem>
            </Grid>
          </Stack>

          <Stack my={4} >
            <Heading size={'lg'} color={'gray.200'}>My Skills__</Heading>
            <StackedImg />
          </Stack>

          <Stack gap={2} my={3}>
          <Heading  textColor={'gray.200'}>Interest__</Heading>
            <Grid templateColumns={'repeat(2, 1fr)'} gap={2} display={['block', 'block', 'flex', 'flex']} justifyContent={'space-around'} >
            <GridItem colSpan={[2, 2, 1, 1]}>
              <List fontSize={[16, 18, 18, 20]} textColor={'white'} spacing={3}>
                <ListItem>
                <ListIcon as={AiOutlineCheck} color={'green.400'} />
                Quick Learning
                </ListItem>
                <ListItem>
                <ListIcon as={AiOutlineCheck} color={'green.400'} />
                Positive Attitude
                </ListItem>
                <ListItem>
                <ListIcon as={AiOutlineCheck} color={'green.400'} />
                Problem Solving
                </ListItem>
              </List>
            </GridItem>
            <GridItem colSpan={[2, 2, 1, 1]} mt={3} >
            <List fontSize={[16, 18, 18, 20]} 
                  textColor={'white'} spacing={3} >
                <ListItem>
                <ListIcon as={AiOutlineCheck} color={'green.400'} />
                Good Team Player
                </ListItem>
                <ListItem>
                <ListIcon as={AiOutlineCheck} color={'green.400'}/>
                Good Cummunication Skills
                </ListItem>
                <ListItem>
                <ListIcon as={AiOutlineCheck} color={'green.400'}/>
                Time and task Management
                </ListItem>
              </List>
            </GridItem>
          </Grid>
          </Stack>
        </Box>
        </Box>
    </section>
  )
};
