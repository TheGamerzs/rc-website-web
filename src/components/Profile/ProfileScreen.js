import * as queries from '../../apollo/queries';
import * as Api from '../../library/Api/api';

import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'reactstrap';

import { Container } from 'reactstrap';
import LoadingIcon from '../_presentational/LoadingIcon';
import ManagerCashout from './managers/ManagerCashout';
import ManagerPayouts from './managers/ManagerPayouts';
import MemberProgress from './members/MemberProgress';
import MemberTurnins from './members/MemberTurnins';
import PermRender from '../_common/PermRender';
import { useQuery } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProfileScreen = props => {
	const [publicKeyVal, setPublicKeyVal] = useState('');

	const { loading, error, data } = useQuery(queries.GET_AUTH_USER);
	const pKeyCall = useQuery(queries.GET_AUTH_USER_PUBLIC_KEY);

	useEffect(() => {
		document.title = `RC - Profile`;

		if (sessionStorage.getItem('redirect')) {
			const redirect = sessionStorage.getItem('redirect');
			sessionStorage.removeItem('redirect');
			props.history.push(redirect);
		}

		if (pKeyCall.data) {
			setPublicKeyVal(pKeyCall.data.authorizedUserPublicKey);
		}
	}, [props.history, pKeyCall.data]);

	if (loading) return <LoadingIcon />;
	if (error) {
		console.error(error);
		return 'There was an error authenticating your request';
	}

	const { authorizedUser } = data;

	function handleSetPublicKey() {
		Api.setPublicApiKey(publicKeyVal).then(r => {
			if (!r?.status == 'success') {
				toast.error('Failed to update your public key');
				console.log(JSON.stringify(r));
				return;
			}
			if (!publicKeyVal) {
				toast.success('Sucessfully cleared your public key');
				return;
			}

			toast.success('Successfully set your public key');
		});
	}

	return (
		<Container>
			<h1 className="mt-2">Your public key</h1>
			{pKeyCall.loading ? (
				<LoadingIcon />
			) : (
				<Form noValidate autoComplete="off" className="my-2">
					<Input
						type="text"
						value={publicKeyVal}
						onChange={e =>
							setPublicKeyVal(
								e.target.value
									.replace(/\n/g, '')
									.replace(
										/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
										'',
									),
							)
						}
						valid={!!publicKeyVal}
						invalid={!publicKeyVal}
						placeholder="Your public API key"
						className="my-2"
					/>
					<Button onClick={handleSetPublicKey}>Update</Button>
				</Form>
			)}
			<PermRender perms={[3, 2, 1]} authorizedUser={authorizedUser}>
				<MemberProgress />
				<h1 className="mt-4">Your turn ins</h1>
				<MemberTurnins />
			</PermRender>
			<PermRender perms={[3, 2]} authorizedUser={authorizedUser}>
				<h1 className="mt-4">Your payouts</h1>
				<ManagerPayouts />
				<h1 className="mt-4">Your cashout</h1>
				<ManagerCashout />
				<small>
					Auto-populated values will only refresh once per every 2 minutes
				</small>
			</PermRender>
		</Container>
	);
};

export default withRouter(ProfileScreen);
