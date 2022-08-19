import React from 'react';
import { Query } from 'react-apollo';
import * as queries from '../../../apollo/queries';
import LoadingIcon from '../../_presentational/LoadingIcon';
import { Table } from 'reactstrap';
import ServerRow from './ServerRow';

const ServerUptime = () => {
	return (
		<Query query={queries.GET_ALL_MEMBERS_SIMPLE}>
			{({ loading, error, data }) => {
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
								<th scope="col">Heisters</th>
								<th scope="col">Uptime</th>
								<th scope="col">Dxp</th>
								<th scope="col">Names</th>
							</tr>
						</thead>
						<tbody>
							<ServerRow
								server={'main'}
								name={'NY-1'}
								members={members}
							/>
							<ServerRow
								server={'beta'}
								name={'NY-2 (Beta)'}
								members={members}
							/>
							<ServerRow
								server={'event'}
								name={'Event Server'}
								members={members}
							/>
						</tbody>
					</Table>
				);
			}}
		</Query>
	);
};

export default ServerUptime;
