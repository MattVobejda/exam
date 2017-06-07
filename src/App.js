import React, { Component } from 'react';
import SearchForm from './SearchForm';
//import UserList from './userlist';
import RepoList from './RepoList';
import RepoDetails from './RepoDetails';
import './index.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends Component {

    state = {
        user: '',
        repos: [],
        repodetail: [],
        repoDetailFlag: true,
        isLoading: false
    }

    handleSearchFormSubmit = (search_term) =>{
        this.setState({
            repos: [],
            isLoading: 'loading-indicator large'
        });
        return axios.get(`https://api.github.com/search/users?q=${search_term}`)
            .then(({data}) => {
            	//console.log(`App - git - data: `,data);
                console.log(`App - git - data.items[0].login: `,data.items[0].login);
                
                const login = data.items[0].login;
                const url = data.items[0].repos_url;
                
                if (login < 1){
                    this.setState({
                        user: '',
                        isLoading: false
                    });
                    throw new Error('No Results!');
                } else {
	                axios.get(url)
					    .then((response) => {
					    	console.log(`App - 2nd Axios Call - response.data: `, response.data);
					        this.setState({
					        	user: login,
					            repos: response.data,
					            isLoading: false
					        })
					    console.log(`App - userClick - state: `,this.state.repos);
					    }
					)
                }
	            console.log(`App - state`, this.state);
            }
        );
    }

    userClick = (repoid) => {
    	//console.log(`App - userClick - repoid: `, repoid);
        const repodetail = [];
        for(let i=0;i<this.state.repos.length;i++){
        	if(repoid === this.state.repos[i].id){
	        	console.log(`App - repos - stars: `,this.state.repos[i].stargazers_count);
	        	console.log(`App - repos - Forks: `,this.state.repos[i].forks);
	        	console.log(`App - repos - PrimaryLang: `,this.state.repos[i].language);  
	        	repodetail.push(this.state.repos[i])
	        	break;
        	}
        }

		this.setState((prevState, props) => ({
            repodetail: repodetail,
            repoDetailFlag: false
        })); 
		//console.log(this.state.repodetail);
    }

    homeClick = (repoid) => {
		this.setState((prevState, props) => ({
	        user: '',
	        repos: [],
	        repodetail: [],
	        repoDetailFlag: true,
	        isLoading: false
        })); 
		//console.log('you clicked the home button!')
    }

  render() {
    return (
		<Router>
		    <div className="wrapper">
		        <div className='header'>
		        	<h1>Github viewer 
			        	{
							(this.state.repoDetailFlag) ? <button className='home_button'>Home</button> : <button onClick={this.homeClick} className='home_button2'>Home</button>
						}
					</h1>
		        </div>
		        <Route path='/' render={(props) => {
		            return <SearchForm {...props} onSubmit={this.handleSearchFormSubmit} />
		        }} />                  
		        <span className={this.state.isLoading}></span>
		        <RepoList repos={this.state.repos} user={this.state.user} onClick={this.userClick} />

		        <Route path='/repos/:repo' render={(props) => {
		            if(this.state.repos.length<1){
		                return <Redirect to='/' />
		            }
		            return <RepoDetails repodetail={this.state.repodetail}/>
		        }} />
		    </div>
		</Router>
	);
  }
}

export default App;
