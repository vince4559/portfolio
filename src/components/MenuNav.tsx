import { Flex, Menu, MenuButton, IconButton, MenuList, MenuItem, } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

export const MenuNav = () => {
  return(
    <Flex align={'center'} 
        justify={'flex-end'}
        w={'full'}
        display={['flex', 'flex', 'none', 'none']}>
        <Menu lazyBehavior='unmount'>
          <MenuButton
            as={IconButton}
            arial-label={'menu-nav'}
            icon={<AiOutlineMenu />}
            variant='outline'
            colorScheme={'blue'}
            bg={'white'}
            size={'lg'}
          />
          
          <MenuList gap={3} bg="black" w={'full'} >
            <MenuItem fontWeight={'bold'} >
            <NavLink to={'/'} style={({isActive}) => isActive? {color: 'turquoise'} : {color:'blue'}}>Home
          </NavLink>
            </MenuItem>
            <MenuItem fontWeight={'bold'}>
            <NavLink to={'/about'} style={({isActive}) => isActive? {color: 'turquoise'} : {color:'blue'}}>About
            </NavLink>
            </MenuItem>
            <MenuItem fontWeight={'bold'}>
            <NavLink to={'/resume'} style={({isActive}) => isActive? {color: 'turquoise'} : {color:'blue'}}>Resume
             </NavLink>
            </MenuItem>
            <MenuItem fontWeight={'bold'}>
            <NavLink to={'/portfolio'} style={({isActive}) => isActive? {color: 'turquoise'} : {color:'blue'}}>Portfolio
            </NavLink>
            </MenuItem>
            <MenuItem fontWeight={'bold'}>
            <NavLink to={'/contact'} style={({isActive}) => isActive? {color: 'turquoise'} : {color:'blue'}}>Contact
           </NavLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
  )
};
