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
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Foxi. Tailwind CSS Astro Starter Kit by Oxygenna',
	siteDescription:
		'Foxi is a design and development agency that specializes in creating beautiful and functional websites.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Foxi. logo'
	},
	mode: 'auto',
	scrollAnimations: true
}
