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
	
	itemList = () => {
		console.log("render");
		let counter =-1;
		const tasks = this.props.list.map(task => {
		counter++;
			return(
				<TaskItem text={task} time={this.props.listTime[counter]} onRemoveTask={this.props.onRemoveTask} />
			
			);
		});	

		return tasks;
	}

	render(){
		
		const tasks = this.itemList();
		
		return(
			<List>
			{tasks}
			</List>
		);
	}

}

export default TaskList;
