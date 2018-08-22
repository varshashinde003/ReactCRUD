import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  }
});
class ShowEmployees extends Component {
	constructor(props)
	{
		super(props)
		this.state = {
			employees:[]
		}
	}
	async componentDidMount() {
        try
        {
            this.getEmployees()
        }
        catch (e) {
            console.error(e)
            throw e
        }
    }
    async getEmployees()
    {
        try {
            let employees = await fetch(`http://localhost:8080/empdata`)
            employees = await employees.json()
            /*console.table(employees)*/
            this.setState({employees})
        } catch (e) {
            console.error(e)
            throw e
        }
    }
    async deleteData(id) {
        try {
            let result = await fetch(`http://localhost:8080/empdata/${id}`, {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            result = await result.json()
            console.log(result)
            this.getEmployees()
            /*console.log(`${result}`)*/
        } catch (e) {
            console.error(e)
        }
    }
    render() {
        const { classes } = this.props;
        return (
        	<div align="center">
                <Paper className={classes.root}>
                <Table className={classes.table}>
                <TableHead>
                    <TableCell class="tableHeadcss">NAME</TableCell>
                    <TableCell class="tableHeadcss">AGE</TableCell>
                    <TableCell class="tableHeadcss">DEPARTMENT</TableCell>
                    <TableCell class="tableHeadcss">ADDRESS</TableCell>
                    <TableCell class="tableHeadcss">EMAIL</TableCell>
                    <TableCell class="tableHeadcss">EDIT</TableCell>
                    <TableCell class="tableHeadcss">DELETE</TableCell>
                </TableHead>
        		<TableBody>
        			{
        				this.state.employees.map(
        					employee=>
        						<TableRow key={employee._id}>
	        						<TableCell>{employee.name}</TableCell>
	        						<TableCell>{employee.age}</TableCell>
	        						<TableCell>{employee.dept}</TableCell>
                                    <TableCell>{employee.addr}</TableCell>
                                    <TableCell>{employee.email}</TableCell>
	        						<TableCell><Link to={`edit/${employee._id}`}><Button variant="contained">Edit</Button></Link></TableCell>
                                    <TableCell>
                                    <Button variant="contained" onClick = {() => this.deleteData(employee._id)}>Delete</Button>
                                    </TableCell>
        						</TableRow>
        					)
        			}
        			</TableBody>
        		</Table>
                </Paper>
            </div>
        )
    }
}
ShowEmployees.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowEmployees);