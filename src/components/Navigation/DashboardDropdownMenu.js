import React from 'react';
import {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	UncontrolledDropdown,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import PermRender from '../_common/PermRender';

const DashboardDropdownMenu = ({ history, authorizedUser, routeName }) => {
	function redirect(event, page) {
		event.preventDefault();
		history.push(page);
		return false;
	}

	return (
		<UncontrolledDropdown
			className="btn-rotate"
			nav
			active={['Dashboard Home', 'Company', 'Payout', 'Applications'].includes(
				routeName
			)}>
			<DropdownToggle caret nav>
				Dashboard
			</DropdownToggle>
			<DropdownMenu end>
				<DropdownItem
					href="/home/dashboard"
					onClick={e => redirect(e, '/home/dashboard')}
					active={routeName === 'Dashboard Home'}>
					<i className={'bi bi-house'} style={Styles.icon} />
					Home
				</DropdownItem>
				<DropdownItem
					href="/home/dashboard/leaderboard"
					onClick={e => redirect(e, '/home/dashboard/leaderboard')}
					active={routeName === 'Leaderboard'}>
					<i className={'bi bi-kanban'} style={Styles.icon} />
					Leaderboard
				</DropdownItem>
			</DropdownMenu>
		</UncontrolledDropdown>
	);
};

export default withRouter(DashboardDropdownMenu);

const Styles = {
	icon: {
		marginRight: '10px',
		transition: 'opacity 0.3s !important',
		transform: 'rotate(0deg) !important',
		display: 'inline-block',
	},
};
