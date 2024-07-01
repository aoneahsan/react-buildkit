export const LOCALSTORAGE_KEYS = {
	userData: '8f3j3ff-f-3ff3f',
	userAuthToken: 'd7fgf33--3-3--3',
} as const;

export const APP_ROUTES = {
	wildCard: '*',
	rootRoute: '/',
	home: '/home',
	register: '/register',
	login: '/login',
	myAccount: '/my-account',
} as const;

export const API_URLS = {
	register: '/register',
	login: '/login',
	logout: '/logout',
	getUserData: '/getUserData',
	updateUserData: '/updateUserData',
	updateUserStatus: '/updateUserStatus',
} as const;

export const developerDetails = {
	portfolioWebsite: 'https://aoneahsan.com',
	updatedResume: 'https://aoneahsan.com/resume',
	updatedCV: 'https://aoneahsan.com/cv',
	linkedinProfile: 'https://linkedin.com/in/aoneahsan',
	githubProfile: 'https://github.com/aoneahsan',
} as const;
