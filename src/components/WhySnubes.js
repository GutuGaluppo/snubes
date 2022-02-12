import React from 'react'

const array = [
	{
		title: 'Trusted Know-How',
		description: 'We have more than 20 years of experience and continuously check call centers for their quality and capabilities. Customers like Allianz trust Snubes industry knowledge.'
	},
	{
		title: 'Time and cost savings',
		description: 'With Snubes you can easily compare prices, quality and availability, and find more potential suppliers. Reach your goal faster and save resources.'
	},
	{
		title: 'Satisfaction guaranteed',
		description: 'We offer a validated data-based approach to procurement, rather than awarding contracts only based on the lowest price, an existing relationship or "gut feeling".'
	}
]

function WhySnubes() {
	return (
		<div className="w-auto p-14 bg-cover bg-right md:bg-[url('/src/images/desk-bg.png')]">
			<div className="w-auto md:w-[31rem] ml-3 lg:mx-auto">
				<h2 className="text-left text-3xl font-semibold">Why Snubes?</h2>
				{
					array.map((item, index) => {
						return (
							<div className="mx-auto my-10" key={index}>
								<h3 className="text-left text-xl font-bold mb-4">{item.title}</h3>
								<p className="text-left">{item.description}</p>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default WhySnubes