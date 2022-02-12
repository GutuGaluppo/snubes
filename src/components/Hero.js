import React from 'react'
import Form from './Form'

function Hero() {
	return (
		<div>
			<div className="bg-white max-w-fit rounded md:hidden">
				<div className='md:text-center text-left px-6 py-4'>
					<h2 className="font-bold text-2xl">Find inbound call centers for your company</h2>
					<p className="hidden md:block">Use our AI and Big Data driven call center sourcing solution</p>
					<Form />
				</div>
			</div>
			<div className="w-auto h-30 p-6 bg-cover bg-[url('/src/images/hero-bg.jpg')]">
				<div className="flex justify-center items-center">
					<div className="bg-white max-w-fit rounded hidden md:block">
						<div className='text-center px-6 py-4'>
							<h2 className="font-bold text-2xl">Find inbound call centers for your company</h2>
							<p>Use our AI and Big Data driven call center sourcing solution</p>
							<Form />
						</div>
					</div>
					<div className="flex flex-col self-end md:m-2 text-white">
						<p className="font-medium mb-4 text-center">Welcome to Europe’s largest call center database</p>
						<div className="grid md:grid-cols-4 grid-cols-2 gap-2">
							<div className="text-center">
								<h2 className="font-bold">500+</h2>
								<small>Tenders</small>
							</div>
							<div className="text-center">
								<h2 className="font-bold">200+</h2>
								<small>Callcenter</small>
							</div>
							<div className="text-center">
								<h2 className="font-bold">375.000</h2>
								<small>Agents available</small>
							</div>
							<div className="text-center">
								<h2 className="font-bold">85%</h2>
								<small>Faster sourcing</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero