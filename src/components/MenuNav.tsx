import { Flex, Menu, MenuButton, IconButton, MenuList, MenuItem, } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const MenuNav = () => {
  return(
    <Flex align={'center'} 
        justify={'flex-end'}
        w={'full'}
        display={['flex', 'flex', 'none', 'none']}>
        <Menu>
          <MenuButton
            as={IconButton}
            arial-label={'Options'}
            // icon={<HamburgerIcon />}
            variant='outline'
            colorScheme={'blue'}
            bg={'white'}
            size={'lg'}
          />
          
          <MenuList gap={3} bg="gray">
            <MenuItem>
            <NavLink to={'/'} style={({isActive}) => isActive? {color: 'turquoise'} : {color:'blue'}}>Home
          </NavLink>
            </MenuItem>
            <MenuItem>
            <NavLink to={'/about'} style={({isActive}) => isActive? {color: 'turquoise'} : {color:'blue'}}>About
            </NavLink>
            </MenuItem>
            <MenuItem>
            <NavLink to={'/resume'} style={({isActive}) => isActive? {color: 'turquoise'} : {color:'blue'}}>Resume
             </NavLink>
            </MenuItem>
            <MenuItem>
            <NavLink to={'/portfolio'} style={({isActive}) => isActive? {color: 'turquoise'} : {color:'blue'}}>Portfolio
            </NavLink>
            </MenuItem>
            <MenuItem>
            <NavLink to={'/contact'} style={({isActive}) => isActive? {color: 'turquoise'} : {color:'blue'}} >Contact
           </NavLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
  )
};
