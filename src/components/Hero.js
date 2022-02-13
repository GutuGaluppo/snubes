import React from 'react'
import DataHero from './DataHero'
import Form from './Form'

function Hero() {
	return (
		<div>
			<div className="bg-white max-w-fit rounded lg:hidden mx-auto">
				<Form />
			</div>
			<div className="w-auto h-30 p-6 bg-cover bg-[url('/src/images/hero-bg.jpg')]">
				<div className="flex justify-center items-center">
					<div className="bg-white max-w-fit rounded hidden lg:block">
						<Form />
					</div>
					<DataHero />
				</div>
			</div>
		</div>
	)
}

export default Hero