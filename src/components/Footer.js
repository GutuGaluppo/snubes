import React from 'react'
import bestService from '../images/best-service.png'

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
							<li><a href="#"><img src="" alt="" />facebook</a></li>
							<li><a href="#"><img src="" alt="" />Twitter</a></li>
							<li><a href="#"><img src="" alt="" />LinkedIn</a></li>
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