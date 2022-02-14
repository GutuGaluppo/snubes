import React from 'react'
import talixoBlack from '../images/talixo-logo-black.png'
import Carousel from './Carousel'
import Partners from './Partners'

function CarouselComponent() {
	return (
		<div className="mx-auto py-10 border-y-4 border-zinc-100">
			<div className="flex flex-col items-center w-">
				<img src={talixoBlack} alt="" className="w-32" />
				<Carousel />
				<Partners />
			</div>
		</div >
	)
}

export default CarouselComponent