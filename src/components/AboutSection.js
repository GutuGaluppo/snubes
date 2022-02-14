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

function AboutSection() {
	return (
		<div className="w-auto p-5 py-8 lg:p-14 bg-cover bg-right lg:bg-center md:bg-[url('/src/images/desk-bg.png')] border-y-4 border-zinc-100">
			<div className="w-auto md:w-[31rem] ml-3 lg:mx-auto bg-white md:p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
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

export default AboutSection