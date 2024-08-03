import BizMapScreen from './components/TTools/Biz/map/BizMapScreen';
import BizScreen from './components/TTools/Biz/BizScreen';
import LeaderboardScreen from './components/Dashboard/Management/LeaderboardScreen';
import CompletionistScreen from './components/TTools/Completionist/CompletionistScreen';
import DashboardScreen from './components/Dashboard/Home/DashboardScreen';
import ErrorPage from './components/_common/ErrorPage';
import HomeScreen from './components/Home/HomeScreen';
import IndexScreen from './components/Index/IndexScreen';
import LoginScreen from './components/Authentication/LoginScreen';
import LogoutScreen from './components/Authentication/LogoutScreen';
import PIGSScreen from './components/Index/PIGSScreen';
import ProfileScreen from './components/Profile/ProfileScreen';
import StorageMapScreen from './components/TTools/Storages/map/StorageMapScreen';
import StoragesScreen from './components/TTools/Storages/StoragesScreen';
import RTSScreen from './components/Index/RTSScreen';
import TToolsAdminScreen from './components/TTools/Admin/TToolsAdminScreen';
import TToolsScreen from './components/TTools/Home/TToolsScreen';
import TruckingScreen from './components/TTools/Trucking/TruckingScreen';
import UnderConstruction from './components/_common/UnderConstruction';

const routes = [
	{
		path: '/',
		name: 'Index',
		component: IndexScreen,
	},
	{
		path: '/rts',
		name: 'RTS',
		component: RTSScreen,
	},
	{
		path: '/pigs',
		name: 'PIGS',
		component: PIGSScreen,
	},
	{
		path: '/login',
		name: 'Login',
		component: LoginScreen,
		layout: '/auth',
	},
	{
		path: '/logout',
		name: 'Logout',
		component: LogoutScreen,
		layout: '/auth',
	},
	{
		path: '/home',
		name: 'Home',
		component: HomeScreen,
		layout: '/home',
	},

	{
		path: '/dashboard',
		name: 'Dashboard Home',
		component: DashboardScreen,
		layout: '/home',
	},
	{
		path: '/dashboard/leaderboard',
		name: 'Leaderboard',
		component: LeaderboardScreen,
		layout: '/home',
	},
	{
		path: '/ttools/admin',
		name: 'Admin',
		component: TToolsAdminScreen,
		layout: '/home',
	},
	{
		path: '/ttools/',
		name: 'TTools Home',
		component: TToolsScreen,
		layout: '/home',
	},
	{
		path: '/ttools/biz/',
		name: 'Businesses',
		component: BizScreen,
		layout: '/home',
	},
	{
		path: '/ttools/biz/map/',
		name: 'Biz Map',
		component: BizMapScreen,
		layout: '/home',
	},
	{
		path: '/ttools/storage/',
		name: 'Storage',
		component: StoragesScreen,
		layout: '/home',
	},
	{
		path: '/ttools/storage/map/',
		name: 'Storage Map',
		component: StorageMapScreen,
		layout: '/home',
	},
	{
		path: '/ttools/trucking/',
		name: 'Trucking',
		component: TruckingScreen,
		layout: '/home',
	},
	{
		path: '/ttools/trucking/map/',
		name: 'Trucking Map',
		component: UnderConstruction,
		layout: '/home',
	},
	{
		path: '/ttools/completionist',
		name: 'Completionist',
		component: CompletionistScreen,
		layout: '/home',
	},
	{
		path: '/profile',
		name: 'Profile',
		component: ProfileScreen,
		layout: '/home',
	},
	{
		path: '*',
		name: '404',
		component: ErrorPage,
		layout: '/auth',
	},
	{
		path: '*',
		name: '404',
		component: ErrorPage,
		layout: '/home',
	},
];

export default routes;
