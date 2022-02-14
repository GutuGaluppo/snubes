import React from 'react'
import talixoBlack from '../images/talixo-logo-black.png'
import talixoLogo from '../images/talixo-logo.png'
import allianzLogo from '../images/allianz.png'
import usercentricLogo from '../images/usercentrics.png'
import creditshelfLogo from '../images/creditshelf.png'
import laserhubLogo from '../images/laserhub.png'

function CarouselComponent() {
	return (
		<div className="mx-auto py-10 border-y-4 border-zinc-100">
			<div className="flex flex-col items-center w-">
				<img src={talixoBlack} alt="" className="w-32" />
				<p className="mx-auto px-5 pt-5 text-left italic md:w-[31rem]">
					“Finding a suitable outsourcing service provider through Snubes was very easy and our personal consultant helped us every step of the way.
					After a short time we had good offers on the table.
					An on-site visit confirmed the positive impression and we have now found a matching partner.
					Thank you for your great support, which has helped us a lot in the selection process.”
				</p>
				<p className="py-5">
					<span className="font-bold">Jan Brenneke</span>, VP Operations
				</p>
				<div className="flex flex-wrap justify-center items-center pb-10 space-y-4">
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