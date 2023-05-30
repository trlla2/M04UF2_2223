import React from 'react';

import TaskItem from './TaskItem';
import List from '@mui/material/List';

class TaskList extends React.Component{
	constructor (props){
		super(props);

		this.state = {
	 		items: this.props.list
		};
	}

	render(){
		console.log("render");
		let counter =-1;
		const tasks = this.state.items.map(task => {
		counter++;
			return(
				<TaskItem text={task} num_task={counter} onRemoveTask={this.props.onRemoveTask} />
			
			);
		});
		
		
		return(
			<List>
			{tasks}
			</List>
		);
	}

}

export default TaskList;
