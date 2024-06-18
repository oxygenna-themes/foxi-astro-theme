export interface FooterAbout {
	title: string
	aboutText: string
	logo: {
		src: string
		alt: string
	}
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SocialLink {
	link: string
	icon: string
}

export interface SubFooter {
	copywriteText: string
	socials: SocialLink[]
}
