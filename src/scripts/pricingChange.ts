const pricingTypeCheckbox = document.getElementById('pricingType') as HTMLInputElement | null

if (pricingTypeCheckbox) {
	pricingTypeCheckbox.addEventListener('change', function () {
		const plans = [
			{
				elementId: 'plan-0',
				monthlyPrice: '19',
				annualPrice: '15',
				monthlyText: '/month',
				annualText: '/month, billed anually'
			},
			{
				elementId: 'plan-1',
				monthlyPrice: '29',
				annualPrice: '25',
				monthlyText: '/month',
				annualText: '/month, billed anually'
			},
			{
				elementId: 'plan-2',
				monthlyPrice: '99',
				annualPrice: '55',
				monthlyText: '/month',
				annualText: '/month, billed anually'
			}
		]

		const isAnnualy = this.checked

		plans.forEach((plan) => {
			const planElement = document.getElementById(plan.elementId)

			if (planElement) {
				const priceElement = planElement.querySelector('.pricing__header-price')
				const perTimeElement = planElement.querySelector('.pricing__header-perTime')
				const monthlyLabel = document.getElementById('monthlyLabel')
				const annualLabel = document.getElementById('annualLabel')

				if (priceElement && perTimeElement) {
					if (isAnnualy) {
						priceElement.textContent = plan.annualPrice
						perTimeElement.textContent = plan.annualText
						if (monthlyLabel && annualLabel) {
							monthlyLabel.classList.remove('highlight', 'opacity-70')
							annualLabel.classList.add('highlight', 'opacity-70')
						}
					} else {
						priceElement.textContent = plan.monthlyPrice
						perTimeElement.textContent = plan.monthlyText
						if (monthlyLabel && annualLabel) {
							monthlyLabel.classList.add('highlight', 'opacity-70')
							annualLabel.classList.remove('highlight', 'opacity-70')
						}
					}
				}
			}
		})
	})
}
