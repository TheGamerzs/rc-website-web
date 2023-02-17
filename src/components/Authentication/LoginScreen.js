import LoginButton from './LoginButton';
import React from 'react';

class LoginScreen extends React.Component {
	componentDidMount() {
		document.body.classList.toggle('login-page');
	}
	componentWillUnmount() {
		document.body.classList.toggle('login-page');
	}
	render() {
		return (
			<div className="login-page">
				<div className="d-flex align-items-center flex-column">
					<img
						src="https://www.rockwelltransport.com/assets/images/logo-rc-376x226.png"
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
	}
}

export default LoginScreen;
