import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
    root: {
    width: '50%',
    padding:'1% 3% 2% 3%',
    margin:'auto',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});
class UpdateEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            dept: "",
            addr: "",
            email:""
        }
        //this.handleChange = this.handleChange.bind(this)  
    }
    async componentDidMount()
    {
        console.log("componentDidMount")
        try {
            const id = this.props.match.params._id
            /*console.log(`-----------------------${id}`)*/
            let employee = await fetch(`http://localhost:8080/empdata/${id}`)
            employee = await employee.json()
            /*console.table(employee)*/
            this.setState({name: employee.name,
            age: employee.age,
            dept: employee.dept,
            addr: employee.addr,
            email:employee.email})
        } catch (e) {
            console.error(e)
            throw e
        }
    }
    async updateData() {
        try {
            const data = {
                id : this.props.match.params._id,
                name: this.state.name,
                age: this.state.age,
                dept: this.state.dept,
                addr: this.state.addr,
                email: this.state.email
            }
            let result = await fetch(`http://localhost:8080/empdata`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                "body": JSON.stringify(data)
            })
            result = await result.json()
            console.log(result)
            return this.props.history.push("/")   
            /*console.log(`${result}`)*/
        } catch (e) {
            console.error(e)
        }
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value })
    }
    render() {
        const { classes } = this.props;
        return ( <
            div className = "">
            <Paper className={classes.root}>
            <form className={classes.container} noValidate autoComplete="off">
            <TextField
          id="full-width"
          name="name"
          label=""
          value = { this.state.name } onChange = {
                (event) => this.handleChange(event) } 
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Employee Name"
          helperText="Required"
          fullWidth
          margin="normal"
        />

        <br / > <br / >
            <TextField
          id="full-width"
          name="age"
          label=""
          value = { this.state.age } onChange = {
                (event) => this.handleChange(event) } 
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Employee Age"
          helperText="Required"
          fullWidth
          margin="normal"
        />
             <br / > <br / >
                <TextField
          id="full-width"
          name="dept"
          label=""
          value = { this.state.dept } onChange = {
                (event) => this.handleChange(event) } 
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Employee Department"
          helperText="Required"
          fullWidth
          margin="normal"
        />
                <br / > <br / >
                <TextField
          id="full-width"
          name="addr"
          label=""
          value = { this.state.addr } onChange = {
                (event) => this.handleChange(event) } 
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Employee Address"
          helperText="Required"
          fullWidth
          margin="normal"
        />
        <br / > <br / >
            <TextField
          id="full-width"
          name="email"
          label=""
          value = { this.state.email } onChange = {
                (event) => this.handleChange(event) } 
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Employee Email"
          helperText="Required"
          fullWidth
          margin="normal"
        />
                <br / > <br / >
            <Button variant="contained" color="" onClick = {
                () => this.updateData() }>Submit</Button>
            </form>
            </Paper>
            </div>
        );
    }
}

UpdateEmployee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpdateEmployee);