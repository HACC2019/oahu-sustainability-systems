import React from 'react';
import Menu from 'semantic-ui-react';
import MenuItem from "semantic-ui-react";


class Navbar extends React.Component
{
    render(){
        const returnVal = <Menu>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
        </Menu>;
        return(
            returnVal
        );
    }
};

export default Navbar;