import React from 'react'
import signUp from '../images/signup-icon.png'
import source from '../images/source-icon.png'
import offers from '../images/offers-icon.png'

const infoArray = [
	{
		title: 'Sign up for free',
		icon: `${signUp}`,
		description: 'Signing up and setting up your project takes less than 5 minutes'
	},
	{
		title: 'Source smarter',
		icon: `${source}`,
		description: 'Our data-based AI and our experts will help you find exactly what you are looking for'
	},
	{
		title: 'Receive offers',
		icon: `${offers}`,
		description: 'With our insights you always receive high-quality proposals at the best price'
	}
]

function InfoIcons() {
	return (
		<div className="flex justify-center items-center mx-auto py-10 border-y-4 border-zinc-100">
			<div className="grid grid-flow-rows sm:grid-flow-cols sm:grid-cols-3 gap-1">
				{
					infoArray.map((info, index) => {
						return (
							<div className="flex md:flex-col items-center m-5 md:mx-4 px-5 md:p-0" key={index}>
								<img src={info.icon} alt={info.icon} className="w-16 h-16 mb-4" />
								<div className="pl-7 md:px-5">
									<h3 className="font-bold md:text-center text-xl mb-2">{info.title}</h3>
									<p className="max-w-xs md:text-center">{info.description}</p>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default InfoIcons