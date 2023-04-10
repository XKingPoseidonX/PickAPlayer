import { useState } from 'react'

import { Button, Stack, Nav, Container, Navbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './BestClubes.css';

function Tables() {
return (
	<div className="Tables">
	<table>
		<tr>
		<th>Name</th>
		<th>Age</th>
		<th>Gender</th>
		</tr>
		<tr>
		<td>Anom</td>
		<td>19</td>
		<td>Male</td>
		</tr>
		<tr>
		<td>Megha</td>
		<td>19</td>
		<td>Female</td>
		</tr>
		<tr>
		<td>Subham</td>
		<td>25</td>
		<td>Male</td>
		</tr>
	</table>
	</div>
);
}

export default Tables;
