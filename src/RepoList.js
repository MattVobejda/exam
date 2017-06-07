import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RepoList = (props) => {
    const rows = props.repos.map((repo) => {
         return (
	         <tr key={repo.id}>
	     		<td><Link onClick={() => props.onClick(repo.id)} to={`repos/${repo.name}/`}>{repo.name}</Link></td>
	     	</tr>
         );
    })

    return (
    	<div className='row'>
	        <table className='table'>
	        	<thead>
	        		<tr>
	        			<th><h3>{props.user}'s repositories</h3></th>
	        		</tr>
	        		<tr>
	        			<th>Filter repos by primary language</th>
	        		</tr>
	        		<tr>
	        			<th>
	        				<select>
							    <option value='all'>All</option>
							    <option value='javascript'>JavaScript</option>
							    <option value='html'>HTML</option>
							    <option value='ruby'>Ruby</option>
							</select>
	        			</th>
	        		</tr>
				    <tr>
			            <th>Name</th>
			        </tr>
	        	</thead>
	        	<tbody>
	        		{rows}
	        	</tbody>
	        </table>
        </div>
    );	
}

RepoList.propTypes = {
	repos: PropTypes.array.isRequired
}

export default RepoList;