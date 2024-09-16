import React from 'react';
import * as queries from '../../../apollo/queries';
import LoadingIcon from '../../_presentational/LoadingIcon';
import { Table } from 'reactstrap';
import ServerRow from './ServerRow';
import { useQuery } from '@apollo/client';

const ServerUptime = () => {
	const { loading, error, data } = useQuery(queries.GET_ALL_MEMBERS_SIMPLE);
	if (loading) return <LoadingIcon />;
	if (error) {
		console.error(error);
		return 'There was an error getting all members';
	}
	const memberArray = data.getAllMembers.members;

	const members = {};

	memberArray.forEach(member => {
		members[member.in_game_id] = true;
	});

	return (
		<Table hover size="sm">
			<thead>
				<tr>
					<th scope="col">Server</th>
					<th scope="col">Members</th>
					<th scope="col">Uptime</th>
					<th scope="col">Dxp</th>
					<th scope="col">Names</th>
				</tr>
			</thead>
			<tbody>
				<ServerRow
					server={'main'}
					id={'2epova'}
					name={'EU-1'}
					members={members}
				/>
				<ServerRow
					server={'beta'}
					id={'njyvop'}
					name={'EU-2 (Beta)'}
					members={members}
				/>
				
			</tbody>
		</Table>
	);
};

export default ServerUptime;
