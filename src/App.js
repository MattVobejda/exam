import React, { Component } from 'react';
import SearchForm from './SearchForm';
//import UserList from './userlist';
import RepoList from './RepoList';
import RepoDetails from './RepoDetails';
import './index.css';
//import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
		<Router>
		    <div className="wrapper">
		        <div className='header'>
		        	<h1>Github viewer <button>Home</button></h1>
		        </div>
		        {/*<Route path='/' render={(props) => {
		            return <GitRequestForm {...props} onSubmit={this.handleSearchFormSubmit} />
		        }} />*/}
		        <SearchForm onSubmit={this.handleSearchFormSubmit} />                     
		        {/*<span className={this.state.isLoading}></span>*/}
		        <span className='loading-indicator large'></span>
		        {/*<UserList users={this.state.users} onClick={this.userClick} />*/}
		        
		        {/*<Route path='/:user/repos' render={(props) => {
		            if(this.state.users.length <1){
		                return <Redirect to='/' />
		            }
		            return <RepoList repos={this.state.repos} />
		        }} />*/}
		        <RepoList />
		        <RepoDetails />
		    </div>
		</Router>
	);
  }
}

export default App;
