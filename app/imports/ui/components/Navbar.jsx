import React from 'react';
import { Menu , MenuItem } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component
{
    render(){
        return(
        <Menu borderless>
            <MenuItem as={Link} to="\Home">Home </MenuItem>
            <MenuItem as={Link} to="\About" >About </MenuItem>
        </Menu>
        );
    }
}

export default Navbar;