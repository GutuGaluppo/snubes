import React from 'react'
import talixoLogo from '../images/talixo-logo.png'
import allianzLogo from '../images/allianz.png'
import usercentricLogo from '../images/usercentrics.png'
import creditshelfLogo from '../images/creditshelf.png'
import laserhubLogo from '../images/laserhub.png'

const partnersArray = [
	{
		title: 'Allianz',
		logo: allianzLogo
	},
	{
		title: 'Creditshelf',
		logo: creditshelfLogo
	},
	{
		title: 'Usercentric',
		logo: usercentricLogo
	},
	{
		title: 'Laserhub',
		logo: laserhubLogo
	},
	{
		title: 'Talixo',
		logo: talixoLogo
	}
]

function Partners() {
	return <div className="flex flex-wrap justify-center items-center pb-10 space-y-4">
		{partnersArray.map((partner) => (
			<img src={partner.logo} alt="" className="w-28 mx-16 object-cover" key={partner.title} />
		))}
	</div>
}

export default Partners