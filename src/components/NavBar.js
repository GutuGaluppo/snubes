import React from 'react'
import snubesLogo from '../images/snubes-logo.png'
import menuIcon from '../images/menu-icon.png'

function NavBar() {
	return (
		<nav className="flex md:justify-evenly justify-between items-center h-4 p-8 md:p-10 text-gray-500 font-light">
			<img src={snubesLogo} alt="snubes logo" width='160px'/>
			<ul className='md:grid grid-flow-col auto-rows-auto gap-3 hidden'>
				<li>About Us</li>
				<li>How it works</li>
				<li>Become a Partner</li>
				<li>
					<select name="currency" id="currency" className="font-light">
						<option value="USD">USD</option>
						<option value="EUR">EUR</option>
						<option value="GBP">GBP</option>
					</select>
				</li>
				<li>
					<select name="language" id="language" className="font-light">
						<option value="en">EN</option>
						<option value="de">DE</option>
						<option value="es">ES</option>
						<option value="fr">FR</option>
						<option value="pt">PT</option>
					</select>
				</li>
				<li>Sign in</li>
				<li>Get Access</li>
			</ul>
			<button className="md:hidden block">
				<img src={menuIcon} alt="" width="30" />
			</button>
		</nav>
	)
}

export default NavBar