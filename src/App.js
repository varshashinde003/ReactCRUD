import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddEmployee from './AddEmployee';
import Employee from './Employee';
import ShowEmployees from './ShowEmployees';
import UpdateEmployee from './UpdateEmployees';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
class App extends Component {
    render() {
        console.log("render")
        return ( 
            <Router>
            <div className = "App">
                <header className = "App-header">
                    <h1 className = "App-title"> Welcome To My First React App </h1> <br />
                    <MenuList className="horiz-menu">
                    <Link to="/"><MenuItem>Show Employees</MenuItem></Link>
                    <Link to="/add"><MenuItem>Add Employees</MenuItem></Link>
                </MenuList>
                </header>
                <Route exact path="/" component={ShowEmployees}/>
                <Route path="/add" component={AddEmployee}/>
                <Route path="/edit/:_id" component={UpdateEmployee}/>

                
            </div>
            </Router>
        );
    }
}
export default App;