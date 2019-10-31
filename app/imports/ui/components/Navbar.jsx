import React from 'react';
import { Menu , MenuItem } from 'semantic-ui-react';
class Navbar extends React.Component
{
    render(){
        return(
        <Menu>
            <MenuItem link="Home">Home </MenuItem>
            <MenuItem link="About">About </MenuItem>
        </Menu>
        );
    }
}

export default Navbar;