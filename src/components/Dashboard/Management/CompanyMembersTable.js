import React, { useState } from 'react';

import CompanyMembersFilter from './CompanyMembersFilter';
import CompanySelector from './CompanyMemberButtons/CompanySelector';
import CustomPaginatedTable from '../../_common/CustomPaginatedTable';

import FormattedNumber from '../../_common/FormattedNumber';
import { GET_PAGINATED_ALL_MEMBER_DETAILS } from '../../../apollo/paginatedQueries';

const CompanyMembersTable = props => {
	const [filters, setFilters] = useState('rts|pigs|fired');

	const formatter = (member, key) => {
		const turninString = new Date(member.last_turnin).toDateString().split(' ');
		turninString.shift();

		const dateString = new Date(member.deadline).toDateString().split(' ');
		dateString.shift();


		return (
			<tr key={key}>
				<th scope="row">{member.rank}</th>
				<td
					data-search={`${member.in_game_id} ${member.in_game_name} ${member.discord_id}`}>
					({member.in_game_id}) {member.in_game_name}
				</td>
				<td>
					<FormattedNumber num={member.rts.vouchers} />
				</td>
				<td>
					<FormattedNumber num={member.pigs.vouchers} />
				</td>
				<td
					data-order={member.company}
					data-search={`${member.company} ${member.manager ? 'manager' : ''}`}>
					<CompanySelector member={member} refetch={props.refetch} />
				</td>
				<td data-order={new Date(member.last_turnin).toISOString()}>
					{turninString.join(' ')}
				</td>
				<td
					className="mx-auto text-center"
					data-order={new Date(member.deadline).toISOString()}>
					{dateString.join(' ')}
				</td>
			</tr>
		);
	};

	function onFilterChange(filter) {
		setFilters(filter);
	}

	return (
		<React.Fragment>
			<CompanyMembersFilter
				onFilterChange={onFilterChange}
				perms={props.perms}
			/>
			<CustomPaginatedTable
				config={config}
				headers={Headers}
				query={GET_PAGINATED_ALL_MEMBER_DETAILS}
				format={formatter}
				filters={filters}
			/>
		</React.Fragment>
	);
};

export default CompanyMembersTable;

const config = {
	id: 'member-list-table',
	jquery: {
		order: [[0, 'asc']],
		columns: [
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			{
				orderable: false,
			},
		],
	},
};

const Headers = [
	'Rank',
	'In Game',
	'RTS Total Vouchers',
	'PIGS Total Vouchers',
	'Company',
	'Last Turnin Date',
	'Deadline',
];
