import React from 'react'
import bestService from '../images/best-service.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
	return (
		<div className="bg-zinc-700">
			<div className="flex flex-col md:flex-row text-center md:text-left items-center justify-evenly py-12 text-white font-extralight">
				<img src={bestService} alt="" width="80" className="hidden md:block" />
				<ul className="space-y-2">
					<li><a href="#">About us</a></li>
					<li><a href="#">Become a artner</a></li>
					<li><a href="#">FAQ</a></li>
				</ul>
				<ul className="space-y-2">
					<li><a href="#">Imprint</a></li>
					<li><a href="#">Terms & Conditions</a></li>
					<li><a href="#">Privacy Policy</a></li>
				</ul>
				<ul className="space-y-2">
					<li>support@snubes.com</li>
					<li>+49 (0) 305 5645327</li>
					<li>
						<ul className="grid grid-flow-col gap-2">
							<li>
								<a href="https://www.facebook.com/SnubesGlobal/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'fa-facebook']} /></a>
							</li>
							<li>

								<a href="https://twitter.com/SnubesGlobal" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'fa-twitter']} /></a>
							</li>
							<li>
								<a href="https://www.linkedin.com/company/snubes/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'fa-linkedin']} /></a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div className="bg-gray-200 p-4 text-center">
				<p className="text-gray-600">© 2019 Snubes GmbH All Rights Reserved.</p>
			</div>
		</div>
	)
}

export default Footer