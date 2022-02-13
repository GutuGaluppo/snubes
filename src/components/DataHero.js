import React from 'react'

function DataHero() {
	return <div className="flex flex-col self-end md:m-2 text-white">
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
}

export default DataHero