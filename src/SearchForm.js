import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import PropTypes from 'prop-types';

//class SearchForm extends Component{
const SearchForm = (props) => {

	//state = {
	//	search_term: '',
	//	error: null
	//} //only things that change should be in state, rest as just constants

{/*}    handleChange = (event) => {
		console.log(event.target.value);
		const value = event.target.value;
		
		if(value.length<3){
			this.setState((prevState, props) => ({
	            search_term: value,
	            error: 'Username is to short, must be greater than 3 characters'
	        }));
		} else {
			this.setState((prevState, props) => ({
	            search_term: value,
	            error: null
	        })); 			
		}	
    }

	handleSubmit = (event) => {
		//event.preventDefault(); //always do this, alternative to a return false that we used before...
		console.log("I got here!");
		if (this.props.location.path !== '/'){
			this.props.history.push('/');
		}

		this.props.onSubmit(this.state.search_term)
			.then(() => {
				this.setState((prevState, props) => ({
		            search_term: '',
		            error: null
		        })); 
			})
			.catch(() => {
				this.setState((prevState, props) => ({
		            error: 'Unrecognized username'
		        })); 
			}
		)
	}*/}

	//render(){

		return(
			<div className='row'>
				<div className='small-4 columns'>
					{/*{
						(this.state.error) ? <p className='notification-box alert'>{this.state.error}</p> : null
					}*/}
					{
						(true) ? <p className='notification-box alert'>Unknown username!</p> : null
					}
					<label>Search repositories by username</label>
					{/*<input type='text' placeholder='username' value={this.state.search_term} onChange={this.handleChange} /><br />*/}
					<input type='text' placeholder='username' /><br />
					{/*<button onClick={this.handleSubmit} disabled={this.state.search_term === ''}>Search</button>*/}
					<button disabled='true'>Search</button>
				</div>
			</div>
		);
	//}
}

//prop types are on input validation...
//SearchForm.propTypes = {
//	onSubmit: PropTypes.func.isRequired  //connection to on submit is burried up in handleSubmit, name of parents function...
//}

export default SearchForm;