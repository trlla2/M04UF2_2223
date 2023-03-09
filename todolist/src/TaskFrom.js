import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class TaskFrom extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			task: ""
		};
	}
	render(){
		return(
			<form>
				<p><TextField id="outlined-basic"  variant="outlined"  type="text" value={this.state.task} onChange={event => { 
					
					console.log(event.target.value);
					this.setState({
						task:event.target.value
					});

				}} placeholder="Add your new todo"/>
         		<Button variant="contained" type="button" onClick={() =>{
					if (this.state.task.trim()=== ""){
						this.setState({
							task: ""
						});
						return;
					}
					this.props.onAddTask(this.state.task);
					this.setState({
						task:""
					});
				}}>+</Button></p>
			</form>	
		);
	}

}

export default TaskFrom;
