import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component{

	state = {
		search_term: '',
		error: null
	} //only things that change should be in state, rest as just constants

    handleChange = (event) => {
		console.log(event.target.value);
		const value = event.target.value;

		this.setState((prevState, props) => ({
            search_term: value
        })); 
		
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
	}

	render(){

		return(
			<div className='row'>
				<div className='small-4 columns'>
					{
						(this.state.error) ? <p className='notification-box alert'>{this.state.error}</p> : null
					}
					<label>Search repositories by username</label>
					<input type='text' placeholder='username' value={this.state.search_term} onChange={this.handleChange} /><br />
					<button onClick={this.handleSubmit} disabled={this.state.search_term === ''}>Search</button>
				</div>
			</div>
		);
	}
}

//prop types are on input validation...
SearchForm.propTypes = {
	onSubmit: PropTypes.func.isRequired  //connection to on submit is burried up in handleSubmit, name of parents function...
}

export default SearchForm;