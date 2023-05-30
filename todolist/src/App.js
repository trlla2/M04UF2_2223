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
			tasklist: [],
			tasklistIds: [],
			tasklistTime: []
		};
	}
	componentDidMount (){
		this.fetchData();
	}
	fetchData = () => {
		fetch('http://192.168.1.117:8080', {method: "GET"})
			.then(response => response.json())
		.then(data => this.createTasklist(data));
	}

	createTasklist = (list) => {
		this.state.tasklistIds = [];
		this.state.tasklist = [];
		this.state.tasklistTime = [];
	
		if(list.lenght <= 0){
			return;
		}

		for(let i = 0; i < list.length; i++) {
			this.state.tasklistIds.unshift(list[i]._id);
			this.state.tasklist.unshift(list[i].tasks);
			this.state.tasklistTime.unshift(list[i].time);
		}

		this.setState ({
			tasklistIds: this.state.tasklistIds,
			tasklist: this.state.tasklist,
			tasklistTime: this.state.tasklistTime
		});
	}

  addTask = (task) =>{
		fetch('http://192.168.1.117:8080',{
				method: "POST",
				body: '{"task":"' + task + '", "remove": "false"}'
			})
				.then(response => response.json())
				.then(data => this.fetchData());

/*
		console.log(task);

		this.state.tasklist.unshift(task);

		this.setState({
			tasklist: this.state.tasklist
		});
*/
  }
  removeTask = (task_num) =>{
  	fetch('http://192.168.1.117:8080',{
		methot: "POST",
		body: '{"task":"' + task_num + '", "remove": "true"}'

	})
		.then(response => response.json)
		.then(data => this.fetchData());
  /*
	this.state.tasklist.splice(task_num,1);
	this.setState({
		tasklist: this.state.tasklist
	});
	*/
  }

  render(){
 	 return (
   	 <Box
	sx={{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		height:'100%',
		background:'linear-gradient(to right bottom, #430089, #cc0066)'
	}}
	 >
	 <Paper elevation={3}
	 		sx={{
				padding:'15px'
			}}>
		<Title text="TODO App" id="title"/>	
		<TaskFrom onAddTask={this.addTask} />
		<TaskList list={this.state.tasklist} onRemoveTask={this.removeTask}/>	
		<p>you have <strong style={{color:'#B22222'}}>{this.state.tasklist.length}</strong> pending tasks</p>
		</Paper>
		</Box>
 	 );
	}
}

export default App;
