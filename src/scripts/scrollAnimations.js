const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('scroll-animated')
		}
	})
})

const elements = document.querySelectorAll('.scroll-animation .col')
console.log(elements)
elements.forEach((element) => {
	observer.observe(element)
})
