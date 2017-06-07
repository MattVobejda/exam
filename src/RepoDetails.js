import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RepoDetails = (props) => {
    // const rows = props.repos.map((repo) => {
    //     return (
	   //      <tr key={repo.id}>
	   //  		<td>{repo.name}</td>
	   //  	</tr>
    //     );
    // })
    return (
    	<div className='row'>
	        <h3>Pacman details</h3>
	        <table className='table'>
	        	<thead>
	        		<tr>
	        			<th width='10'>Stars</th>
	        			<th width='10'>Forks</th>
	        			<th width='100'>Primary Language</th>
	        		</tr>
	        	</thead>
	        	<tbody>
	        		{/*{rows}*/}
	        		<tr key='1'>
	     				{/*<td>Pacman</td>
	     				<td><Link onClick={() => props.onClick(user.login)} to={`/${user.login}/repos`}>{user.login}</Link></td>*/}
	     				<td>32</td>
	     				<td>6</td>
	     				<td>JavaScript</td>
	     			</tr>
	        	</tbody>
	        </table>
        </div>
    );	
}

RepoDetails.propTypes = {
	repos: PropTypes.array.isRequired
}

export default RepoDetails;