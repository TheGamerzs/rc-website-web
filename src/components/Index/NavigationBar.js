import '../../assets/css/mobirise-icons.css';
import '../../assets/css/mobirise-icons-bold.css';
import '../../assets/css/social-icons.css';

import React, { useState, useEffect } from 'react';

import logo from '../../assets/img/logo/logo-rc-376x226.png';

const NavigationBar = ({ history }) => {
	const HomePage = () => history.push('/');
	const ProfilePage = () => history.push('/home/profile');
	const TToolsPage = () => history.push('/home/ttools');

	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [isTop, setIsTop] = useState(true);
	const [fadeFromTop, setFadeFromTop] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const handleScroll = () => {
		if (window.scrollY === 0) setIsTop(true);
		else {
			const heightQuater = window.innerHeight * 0.5;
			setIsTop(false);
			setFadeFromTop(window.scrollY / heightQuater);
		}
	};

	return (
		<nav
			className={
				'navbar navbar-expand-lg fixed-top navbar-dark' +
				(dropdownOpen ? ' bg-dark' : ' pl-5 pr-5')
			}
			style={{
				backgroundColor: !isTop ? 'rgba(35, 35, 35, ' + fadeFromTop + ')' : '',
			}}>
			<a className="navbar-brand" onClick={HomePage} href="/">
				<img src={logo} alt="RC" title="" style={{ height: '4.9rem' }} />
			</a>
			<button
				className="navbar-toggler"
				type="button"
				onClick={() => setDropdownOpen(!dropdownOpen)}>
				<span
					className="mbri-menu"
					style={{
						color: 'rgb(255, 134, 0)',
					}}></span>
			</button>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav mr-auto"></ul>
				<form className="form-inline my-2 my-lg-0">
					<a
						onClick={ProfilePage}
						className="nav-link link text-white font-weight-bold h5 d-flex"
						href="home/profile/">
						<span
							className="mbrib-home mbr-iconfont mbr-iconfont-btn mr-2"
							style={{
								color: 'rgb(255, 134, 0)',
								fontSize: '1.6rem',
							}}></span>
						Employee Login
					</a>
					<a
						onClick={TToolsPage}
						href="home/ttools/"
						className="nav-link link text-white font-weight-bold h5 mr-2 d-flex">
						<span
							className="mbrib-sites mbr-iconfont mbr-iconfont-btn mr-2"
							style={{
								color: 'rgb(255, 134, 0)',
								fontSize: '1.6rem',
							}}></span>
						TTools
					</a>
				</form>
			</div>
			{dropdownOpen ? (
				<div className="navbar-collapse">
					<ul className="navbar-nav mr-auto"></ul>
					<form className="form-inline my-2 my-lg-0">
						<a
							onClick={ProfilePage}
							className="nav-link link text-white font-weight-bold h5 d-flex"
							href="home/profile/">
							<span
								className="mbri-home mbr-iconfont mbr-iconfont-btn mr-2"
								style={{
									color: 'rgb(255, 134, 0)',
									fontSize: '1.6rem',
								}}></span>
							Employee Login
						</a>
						<a
							onClick={TToolsPage}
							href="home/ttools/"
							className="nav-link link text-white font-weight-bold h5 mr-2 d-flex">
							<span
								className="mobi-mbri mbri-sites mbr-iconfont mbr-iconfont-btn mr-2"
								style={{
									color: 'rgb(255, 134, 0)',
									fontSize: '1.6rem',
								}}></span>
							TTools
						</a>
					</form>
				</div>
			) : null}
		</nav>
	);
};

export default NavigationBar;
