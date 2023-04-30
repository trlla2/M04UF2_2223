import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

class TaskItem extends React.Component{
	constructor(props){
	super(props);
	this.state={
		open: false
	};
}
	 openDialog = () =>{
		this.setState({
			open:true
		});
	}
	closeDialog = () =>{
		this.setState({
		open:false
		});
	}
	removeTask = () => {
		this.props.onRemoveTask(this.props.num_task);
		this.closeDialog();
	}

	render(){
	const today = new Date();
	const time = today.getHours() + ":" + today.getMinutes();
		return(
			
			<ListItem>
				<ListItemText primary={this.props.text}/>
				<ListItemText primary={time}/>
				<Tooltip onClick={this.openDialog} title="Borrar">
					<IconButton>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
				<Dialog open={this.state.open}>
				<DialogContent>
				<DialogContentText>
					¿Quieres borrar?
				</DialogContentText>
				<DialogActions>
				<Button color="error" onClick={this.closeDialog}>Cancel</Button>
				<Button variant="contained" onClick={this.removeTask}>Si</Button>
				</DialogActions>
				</DialogContent>
				</Dialog>
			</ListItem>
			
		);
	}

}

export default TaskItem;
