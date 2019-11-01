import React from 'react';
import { Grid , Container , Card } from 'semantic-ui-react';
import Toolbar from '../components/Toolbar';
class Main extends React.Component
{
    render(){
        return(

            <Grid id="Main" divided>
                <Grid.Column width={12}>
                    <Toolbar/>
                    test
                </Grid.Column>
                <Grid.Column width={4}>
                    <Card.Group>
                        <Card fluid header='Option 1' />
                        <Card fluid header='Option 2' />
                        <Card fluid header='Option 3' />
                    </Card.Group>
                </Grid.Column>
            </Grid>

        );
    }
}

export default Main;