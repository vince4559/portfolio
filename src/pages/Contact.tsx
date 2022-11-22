import { Box, FormControl, Grid, GridItem, Heading, Input, Text, Stack, Flex, Textarea, Button, Image, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import address from '../images/address.png';
import phone from '../images/phone.png';
import mail from '../images/mail.png';
import socials from '../images/socials.png';
import twitter from '../images/twitter.png';
import github from '../images/guthub.png';
import linked from '../images/linked.png';





interface FormProps {
  sendername: string,
  mail: string,
  subject: string,
  message: string
}
export const Contact = () => {
  const initials = {
    sendername:'',
    mail: '',
    subject: '',
    message:'',
  }

  const [formdata, setFormData] = useState<FormProps>(initials);
  
  const handleEvent = (event:React.FormEvent) => {
    const {name, value}:any = event.target;
    setFormData({...formdata, 
    [name]: value
    })
  }

  const handleSubmit =(e:React.SyntheticEvent) => {
    e.preventDefault()
  }

  return(
    <Box bg={'blackAlpha.900'} p={3} >
      <Heading p={2} size={'xl'} color='whiteAlpha.700' mt={'5rem'}>
        Contact me__
        </Heading>
    <Grid templateColumns={'repeat(2, 1fr)'} gap={2} p={5} >
    <GridItem p={2} my={3} 
        colSpan={[4, 2, 2, 1]}
        bg={'blackAlpha.800'} w={'90%'} borderRadius={'3xl'}>

        <Flex gap={2} align={'center'}>
          <Image p={2} bg={'gray'}  src={address} 
            borderRadius={'full'}
            w={'40px'} objectFit={'contain'} />
          <Heading size={'md'} textColor={'white'}>
            My Address
          </Heading>
        </Flex>
        <Text textAlign={'center'}  fontFamily={'sans-serif'}  textColor={'white'} fontSize={[14, 16, 17, 18]}  >
          Benin city, Edo State, Nigeria.
        </Text>
      </GridItem>
      
      <GridItem p={2} mb={3} 
          colSpan={[4, 2, 2, 1]}
          bg={'blackAlpha.800'} w={'90%'} borderRadius={'3xl'}>
        <Flex gap={2} align={'center'}>
          <Image p={2} bg={'gray'}  src={socials} 
            borderRadius={'full'}
            w={'40px'} objectFit={'contain'} />
          <Heading size={'md'} textColor={'white'}>
              Social Profiles
          </Heading>
        </Flex>
        <Flex justify={'center'} gap={3}>
            <Link href="https://twitter.com/DaVinci25419866" isExternal>
              <Image  src={twitter} alt='twitter' w={'30px'}/>
              </Link>
            <Link isExternal
            href="https:www.linkedin.com/mwlite/in/vincent-aigboje-7615b6191">
              <Image  src={linked} alt='linked' w={'30px'}/>
              </Link>
            <Link isExternal href="https://github.com/vince4559">
              <Image src={github} alt='github' w={'30px'}/>
              </Link>
          </Flex>
      </GridItem>

      <GridItem p={2} mb={3}
        colSpan={[4, 2, 2, 1]}
        bg={'blackAlpha.800'} w={'90%'} borderRadius={'3xl'}>
        <Flex gap={2} align={'center'}>
          <Image p={1} bg={'gray'}  src={mail} 
            borderRadius={'full'}
            w={'40px'} objectFit={'contain'} />
          <Heading size={'md'} textColor={'white'}>Email Me</Heading>
        </Flex>
        <Text textAlign={'center'} 
          fontSize={[14, 16, 18, 20]} fontFamily={'sans-serif'}  textColor={'white'}>
          aigbojevincent6@gmail.com
        </Text>
      </GridItem>

      <GridItem p={2} 
        colSpan={[4, 2, 2, 1]}
        bg={'blackAlpha.800'} w={'90%'} borderRadius={'3xl'}>
        <Flex gap={2} align={'center'}>
          <Image p={2} bg={'gray'} src={phone} 
            borderRadius={'full'}
            w={'40px'} objectFit={'contain'} />
          <Heading size={'md'} textColor={'white'}>Call Me</Heading>
        </Flex>
        <Text textAlign={'center'}  fontSize={[16, 17, 18, 20]} textColor={'white'} fontFamily={'sans-serif'}>
          +234(7065662752)
        </Text>
      </GridItem>
    </Grid>
      <Box p={7} >
      <form onSubmit={handleSubmit} 
      action={"https://getform.io/f/20c2c50c-434f-48c4-a000-67059{portfolio}"} method={'POST'}>
        <Stack gap={2}>
          <Heading color={'gray'} fontSize={'1.5rem'}>Send a message__</Heading>
          <Flex gap={2} display={{base:'block', md:'flex', lg:'flex'}} >
          <FormControl w={'100%'} mb={3} isRequired color={'white'}>
            <Input type={'text'}
              name={'sendername'} 
              value={formdata.sendername}
              onChange={handleEvent}
              placeholder={'Your name'}  variant={'outline'} /> 
          </FormControl>
          <FormControl w={'100%'} isRequired color={'white'}>
            <Input type={'email'} 
              name={'mail'} 
              value={formdata.mail}
              onChange={handleEvent}
              placeholder={'Your Email'} variant={'outline'} /> 
          </FormControl>
          </Flex>
          <FormControl w={'100%'} isRequired color={'white'}>
            <Input type={'text'} 
              name={'subject'} 
              value={formdata.subject}
              onChange={handleEvent}
              placeholder={'Subject'}  variant={'outline'} /> 
          </FormControl>
          <FormControl isRequired color={'white'}>
            <Textarea 
              name={'message'} 
              value={formdata.message}
              onChange={handleEvent}
              placeholder="Message" variant={'outline'} />
          </FormControl>
          <Button type="submit" colorScheme={'green'}>Send Message</Button>
        </Stack>
    </form>
      </Box>
  </Box>
  )
};
