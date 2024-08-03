import LoginButton from './LoginButton';
import React, { useEffect } from 'react';

import logo from '../../assets/img/logo/logo_rc-376x226.png';

const LoginScreen = () => {
	useEffect(() => {
		document.body.classList.toggle('login-page');
	});

	return (
		<div className="login-page">
			<div className="d-flex align-items-center flex-column">
				<img
					src={logo}
					alt="RC Logo"
					style={{
						height: '226px',
						width: '376px',
					}}
				/>
				<p className="text-light">
					<strong>Welcome to RC's website!</strong>
				</p>
				<p className="text-light">Please login to proceed...</p>
				<LoginButton />
			</div>
		</div>
	);
};

export default LoginScreen;
