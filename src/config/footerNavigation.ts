// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Optifit',
		aboutText:
			'Optifit is a sports tournament management platform that helps you organize and manage your sports tournaments with ease.',
		logo: {
			src: '/favicon.ico',
			alt: 'Optifit - Gestion de tournois sportifs',
			text: 'Optifit'
		}
	},
	footerColumns: [],
	subFooter: {
		copywriteText: `© Optifit ${new Date().getFullYear()}`
	}
}
