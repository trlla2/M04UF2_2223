import React from 'react';

class CountButton extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			contador: 0
		};
	}
	
	render(){
		return(
			<div>
				<p>{this.state.contador}</p>
				<button type="button"  onClick={()=>{
					this.setState({
						contador: this.state.contador+1
					});
				}
				}>cuenta</button>
			</div>
		);	
	}
}

export default CountButton;
