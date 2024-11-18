// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Optifit - Gestion de tournois sportifs',
	siteDescription:
		'Optifit - Gestion de tournois sportifs | Swiss made software',
	ogImage: '/og.jpg',
	logo: {
		src: '/favicon.ico',
		alt: 'Optifit'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
