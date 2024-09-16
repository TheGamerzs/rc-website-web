import { Button } from 'reactstrap';
import React from 'react';

const CompanySelector = props => {
	const { member } = props;

	function getCompanyButton() {
		let mCompany = member.company;
		if (member.company === 'fired') mCompany = 'yeeted';
		return (
			<Button color={mCompany} active={true}>
				{mCompany.toUpperCase()}
			</Button>
		);
	}

	return <React.Fragment>{getCompanyButton()}</React.Fragment>;
};

export default CompanySelector;
