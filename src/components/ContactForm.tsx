import { Box, FormControl, Heading, Input, Stack, Flex, Textarea, Button, useToast, FormLabel, } 
from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from "react";



interface FormProps {
    user_name: string,
    user_email: string,
    subject: string,
    message: string
  };

const ContactForm = () => {

    const initials = {
        user_name:'',
        user_email: '',
        subject: '',
        message:'',
      }
      const toast = useToast();
    const form = useRef<any>();
    const [formdata, setFormData] = useState<FormProps>(initials);

    const sendEmail = (e:React.FormEvent) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w3izkwb', 'template_64szm85', form.current, 'peuiDGssTmTXGUebi')
          .then((result) => {
              console.log(result.text);
              toast({
                title: result.text,
                description: "Your message was sent successfully",
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
              setFormData(initials)
          }, (error) => {
              console.log(error.text);
              toast({
                title: error.text,
                description: "Your message was not sent ",
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
              setFormData(initials)
          });
      };

      const handleEvent = (event:React.FormEvent) => {
        const {name, value}:any = event.target;
        setFormData({...formdata, 
        [name]: value
        })
      }
    
  return (
    <Box p={7} >
    <form ref={form} onSubmit={sendEmail} >
      <Stack gap={2}>
        <Heading color={'gray'} fontSize={'1.5rem'}>Send a message__</Heading>

        <Flex gap={2} display={{base:'block', md:'flex', lg:'flex'}} >
        <FormControl w={'100%'} mb={3} isRequired color={'white'}>
            <FormLabel>Your Name</FormLabel>
          <Input type={'text'}
            name="user_name"
            value={formdata.user_name}
            onChange={handleEvent}
            placeholder={'Your name'}  variant={'outline'} /> 
        </FormControl>
        <FormControl w={'100%'} isRequired color={'white'}>
        <FormLabel>Your Email</FormLabel>
          <Input type={'email'} 
            name="user_email"
            value={formdata.user_email}
            onChange={handleEvent}
            placeholder={'Your Email'} variant={'outline'} /> 
        </FormControl>
        </Flex>
        <FormControl w={'100%'} isRequired color={'white'}>
        <FormLabel>Subject</FormLabel>
          <Input type={'text'} 
            name={'subject'} 
            value={formdata.subject}
            onChange={handleEvent}
            placeholder={'Subject'}  variant={'outline'} /> 
        </FormControl>
        <FormControl isRequired color={'white'}>
        <FormLabel>Leave a message for us</FormLabel>
          <Textarea 
            name="message"
            value={formdata.message}
            onChange={handleEvent}
            placeholder="Message" variant={'outline'} />
        </FormControl>
        <Button type="submit" colorScheme={'green'} value='send'>
          Send Message
        </Button>
      </Stack>
  </form>
    </Box>
  )
}

export default ContactForm
