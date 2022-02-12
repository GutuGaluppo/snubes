import React from 'react'
import talixoBlack from '../images/talixo-logo-black.png'
import talixoLogo from '../images/talixo-logo.png'
import allianzLogo from '../images/allianz.png'
import usercentricLogo from '../images/usercentrics.png'
import creditshelfLogo from '../images/creditshelf.png'
import laserhubLogo from '../images/laserhub.png'

function CarouselComponent() {
	return (
		<div className="mx-auto">
			<div className="flex flex-col items-center w-">
				{/* 
			TODO
			1- logo
			2- carousel with users testimonials
			3- partners
			*/}
				<img src={talixoBlack} alt="" className="w-32" />

				<div className="flex flex-wrap justify-center items-center py-12 space-y-4">
					<img src={allianzLogo} alt="" className="w-28 mx-16 object-cover" />
					<img src={creditshelfLogo} alt="" className="w-28 mx-16 object-cover" />
					<img src={usercentricLogo} alt="" className="w-28 mx-16 object-cover" />
					<img src={laserhubLogo} alt="" className="w-28 mx-16 object-cover" />
					<img src={talixoLogo} alt="" className="w-28 mx-16 object-cover" />
				</div>
			</div>
		</div >
	)
}

export default CarouselComponent