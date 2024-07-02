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

// Initialize observer on initial load
initializeObserver()

// Hook into Astro View Transitions
document.addEventListener('astro:page-loaded', initializeObserver)

// This event should be triggered after the new content is loaded
document.addEventListener('astro:after-swap', initializeObserver)
