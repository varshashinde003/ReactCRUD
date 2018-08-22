import React, { Component } from 'react';

class Employee extends Component {
	constructor(props){
		super (props)
		this.state = {

		}
		//this.handleChange = this.handleChange.bind(this)	
	}

    render() {
        return (
        	<div className="">
	        	<h1>{this.props.name}</h1>
	        	<h1>{this.props.age}</h1>
	        	<button onClick={()=>{this.props.clickF?this.props.clickF():""}}>Click Here</button>
        	</div>
        	);
    	}
}

export default Employee;