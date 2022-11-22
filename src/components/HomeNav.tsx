import { NavLink } from 'react-router-dom'
 import {HStack } from '@chakra-ui/react'
export const HomeNav = () => {
  return(
    <HStack spacing={3} wrap='wrap' display={['none', 'none', 'flex', 'flex']} >
        <NavLink to={'/'} style={({isActive}) => isActive? {color: 'white'} : {color:'turquoise'}}>Home
        </NavLink>
        <NavLink to={'/about'} style={({isActive}) => isActive? {color: 'white'} : {color:'turquoise'}}>About
        </NavLink>
        <NavLink to={'/resume'} style={({isActive}) => isActive? {color: 'white'} : {color:'turquoise'}}>Resume
        </NavLink>
        <NavLink to={'/portfolio'} style={({isActive}) => isActive? {color: 'white'} : {color:'turquoise'}}>Portfolio
        </NavLink>
        <NavLink to={'/contact'} style={({isActive}) => isActive? {color: 'white'} : {color:'turquoise'}}>Contact
        </NavLink>
      </HStack>
  )
};
