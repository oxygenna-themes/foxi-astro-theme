const applyTheme = () => {
	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}
}
const setupThemeSwitcher = () => {
	const themeSwitcher = document.getElementById('theme-selector')
	if (themeSwitcher) {
		themeSwitcher.addEventListener('click', () => {
			if (localStorage.theme === 'dark') {
				localStorage.theme = 'light'
				document.documentElement.classList.remove('dark')
			} else {
				localStorage.theme = 'dark'
				document.documentElement.classList.add('dark')
			}
		})
	}
}

const initializeObserver = () => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('scroll-animated')
			}
		})
	})

	const elements = document.querySelectorAll('.scroll-animation .col')

	elements.forEach((element) => {
		observer.observe(element)
	})
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
	applyTheme()
	initializeObserver()
	setupThemeSwitcher()
})

// Hook into Astro View Transitions
document.addEventListener('astro:page-loaded', () => {
	applyTheme()
	initializeObserver()
	setupThemeSwitcher()
})

// Replace with actual Astro View Transitions events
document.addEventListener('astro:after-swap', () => {
	applyTheme()
	initializeObserver()
	setupThemeSwitcher()
})
