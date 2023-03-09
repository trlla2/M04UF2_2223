import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Title from './Title';
import TaskFrom from './TaskFrom';
import TaskList from './TaskList';
//import './App.css';
import './TODO.css';

class  App extends React.Component {
  constructor (props){
		super(props);
		
		this.state = {
			tasklist: ["lista 1", "lista 2"]
		};
	}
  addTask = (task) =>{
		console.log(task);

		this.state.tasklist.unshift(task);

		this.setState({
			tasklist: this.state.tasklist
		});
  }
  removeTask = (task_num) =>{
	this.state.tasklist.splice(task_num,1);
	this.setState({
		tasklist: this.state.tasklist
	});
  }

  render(){
 	 return (
   	 <Box
	sx={{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		height:'100%',
		background:'linear-gradient(to right bottom, #430089, #20B2AA)'
	}}
	 >
	 <Paper elevation={3}
	 		sx={{
				padding:'15px'
			}}>
		<Title text="TODO App" id="title" />
		
		<TaskFrom onAddTask={this.addTask} />
		<TaskList list={this.state.tasklist} onRemoveTask={this.removeTask}/>	
		<p>you have <strong style={{color:'#B22222'}}>{this.state.tasklist.length}</strong> pending tasks</p>
		</Paper>
		</Box>
 	 );
	}
}

export default App;
