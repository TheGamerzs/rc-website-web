import * as queries from '../../../apollo/queries';

import React, { useEffect } from 'react';

import CompanyMembersTable from './CompanyMembersTable';
import { Container } from 'reactstrap';
import LoadingIcon from '../../_presentational/LoadingIcon';
import ManagerCashoutContainer from './ManagerCashoutContainer';
import PermRender from '../../_common/PermRender';
import TopTurninForm from './TopTurninForm';
import { useQuery } from '@apollo/client';

const LeaderboardScreen = () => {
	useEffect(() => {
		document.title = `RC - Leaderboard`;
	}, []);

	const { loading, error, data } = useQuery(queries.GET_AUTH_USER);
	if (loading) return <LoadingIcon />;
	if (error) {
		console.error(error);
		return 'There was an error authenticating your request';
	}
	const { authorizedUser } = data;

	return (
		<Container>
			<h1>Company Members</h1>
			<CompanyMembersTable user={authorizedUser} />

			<PermRender perms={[3]} authorizedUser={authorizedUser}>
				<h1>Managers Cashouts</h1>
				<ManagerCashoutContainer />
			</PermRender>

			<h1>Get Top Turnins</h1>
			<TopTurninForm />
		</Container>
	);
};

export default LeaderboardScreen;
