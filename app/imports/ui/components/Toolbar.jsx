import React from 'react';
import { Menu , MenuItem , Dropdown } from 'semantic-ui-react';
class Toolbar extends React.Component
{
    render(){
        return(
        <Menu borderless>
            <Menu.Item>
            <Dropdown text='Choose Data Set'>
                <Dropdown.Menu>
                    <Dropdown.Item text='New' />
                    <Dropdown.Item text='Open...' description='ctrl + o' />
                    <Dropdown.Item text='Save as...' description='ctrl + s' />
                    <Dropdown.Item text='Rename' description='ctrl + r' />
                    <Dropdown.Item text='Make a copy' />
                    <Dropdown.Item icon='folder' text='Move to folder' />
                    <Dropdown.Item icon='trash' text='Move to trash' />
                    <Dropdown.Divider />
                    <Dropdown.Item text='Download As...' />
                    <Dropdown.Item text='Publish To Web' />
                    <Dropdown.Item text='E-mail Collaborators' />
                </Dropdown.Menu>
            </Dropdown>
            </Menu.Item>
        </Menu>
        );
    }
}

export default Toolbar;