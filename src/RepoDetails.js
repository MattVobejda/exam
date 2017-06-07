import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

const RepoDetails = (props) => {
	console.log(props);
    const rows = props.repodetail.map((repo) => {
        return (
	        <tr key={repo.id}>
 				<td>{repo.stargazers_count}</td>
 				<td>{repo.forks}</td>
 				<td>{repo.language}</td>
	    	</tr>
        );
    })
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
	        		{rows}
	        	</tbody>
	        </table>
        </div>
    );	
}

RepoDetails.propTypes = {
	repodetail: PropTypes.array.isRequired
}

export default RepoDetails;