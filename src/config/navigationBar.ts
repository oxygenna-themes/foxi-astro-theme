// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/favicon.ico',
		alt: 'Optifit - Gestion de tournois sportifs',
		text: 'Optifit'
	},
	navItems: [
		{
			name: 'Accueil',
			link: '/',
		},
		{
			name: 'Fonctionnalités',
			link: '/#features',
		}
	],
	navActions: [{ name: 'Prendre contact', link: '/contact', style: 'primary', size: 'lg' }]
}
