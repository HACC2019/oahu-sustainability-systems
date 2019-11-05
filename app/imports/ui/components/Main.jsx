import React from 'react';
import { Grid , Container , Card } from 'semantic-ui-react';
import Toolbar from '../components/Toolbar';
import { DragDropContext , Draggable , Droppable} from 'react-beautiful-dnd';
class Main extends React.Component
{
    render(){
        return(
	<DragDropContext>
            <Grid id="Main" divided>
                <Grid.Column width={12}>
                    <Toolbar/>
			<Droppable>
			</Droppable>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Card.Group>
			<Draggable>
                        	<Card fluid header='Option 1' />
			</Draggable>
                    </Card.Group>
                </Grid.Column>
            </Grid>
	</DragDropContext>

        );
    }
}

export default Main;