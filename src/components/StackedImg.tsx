import { Image, Flex } from "@chakra-ui/react";
import javasript from '../images/js.png';
import html from '../images/html.png';
import css from '../images/css3.png';
import react from '../images/react.png';
import typescript from '../images/typescript.png';
import bootstrap from '../images/bootstarp.png';
import github from '../images/guthub.png';
import slack from '../images/slack.png';
import chakras from '../images/chakra.png';
import tailwind from '../images/tailwind.png';
import nextjs from '../images/nextjs.jpg';
import firebase from '../images/firebase.png';



export const StackedImg = () => {
  return(
    <Flex justifyContent={'center'} gap={6} p={3} wrap={'wrap'}>
      <span style={{color:'turquoise'}}>Html5
      <Image w={'30px'} objectFit={'contain'} src={html} alt="html5" />
      </span>
      <span style={{color:'turquoise'}}>Css3
      <Image w={'40px'} objectFit={'contain'} src={css} alt="css" />
      </span>
      <span style={{color:'turquoise'}}>Javascript
      <Image w={'40px'} objectFit={'contain'} src={javasript} alt="javascript" />
      </span>
      <span style={{color:'turquoise'}}>React
      <Image w={'30px'} objectFit={'contain'} src={react} alt="react" />
      </span>
      <span style={{color:'turquoise'}}>Chakra-ui
      <Image w={'60px'} objectFit={'contain'} src={chakras} alt="chakra" />
      </span>
      <span style={{color:'turquoise'}}>Bootstrap
      <Image w={'40px'} objectFit={'contain'} src={bootstrap} alt="bootstrap" />
      </span>
      <span style={{color:'turquoise'}}>Typescript
      <Image w={'40px'} objectFit={'contain'} src={typescript} alt="typescript" />
      </span>
      <span style={{color:'turquoise'}}>Github
      <Image w={'40px'} objectFit={'contain'} src={github} alt="github" />
      </span>
      <span style={{color:'turquoise'}}>Slack
      <Image w={'40px'} objectFit={'contain'} src={slack} alt="slack" />
      </span>
      <span style={{color:'turquoise'}}>Tailwind
      <Image w={'40px'} objectFit={'contain'} src={tailwind} alt="tailwind" />
      </span>
      <span style={{color:'turquoise'}}>Nextjs
      <Image w={'50px'} objectFit={'contain'} src={nextjs} alt="nextjs" />
      </span>
      <span style={{color:'turquoise'}}>Firebase
      <Image w={'80px'} objectFit={'contain'} src={firebase} alt="firebase" />
      </span>
    </Flex>
  )
};
