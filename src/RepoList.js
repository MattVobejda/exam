import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RepoList = (props) => {
    // const rows = props.repos.map((repo) => {
    //     return (
	   //      <tr key={repo.id}>
	   //  		<td>{repo.name}</td>
	   //  	</tr>
    //     );
    // })
    return (
    	<div className='row'>
	        
	        <table className='table'>
	        	<thead>
	        		<tr>
	        			<th><h3>meadch's repositories</h3></th>
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
	        		{/*{rows}*/}
	        		<tr key='1'>
	     				{/*<td>Pacman</td>
	     				<td><Link onClick={() => props.onClick(user.login)} to={`/${user.login}/repos`}>{user.login}</Link></td>*/}
	     				<td><a href=''>Pacman</a></td>
	     			</tr>
	     			<tr key='2'>
	     				<td><a href=''>FancyCat</a></td>
	     			</tr>
	     			<tr key='3'>
	     				<td><a href=''>TicTacToe</a></td>
	     			</tr>
	        	</tbody>
	        </table>
        </div>
    );	
}

RepoList.propTypes = {
	repos: PropTypes.array.isRequired
}

export default RepoList;