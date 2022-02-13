import React, { useState } from 'react'

function Form() {
	const [company, setCompany] = useState('')
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')

	return <div className='md:text-center px-6 py-4'>
		<h2 className="font-bold text-2xl">Find inbound call centers for your company</h2>
		<p className="hidden md:block">Use our AI and Big Data driven call center sourcing solution</p>
		<form className="grid grid-flow-row gap-3 mt-6">
			{/* 
			TODO:

			1- The input box "Company name" should validate the name up to 80 characters max, and numbers are not allowed.
			2- The input box "Name" should validate up to 50 characters; all characters are allowed.
			3- The input box "Phone number" should validate only numbers, 
			and please prefill the country ISD code according to the location. For example, 
			if a person opens your application in Germany, then +49 should be prefilled in the number input box; 
			or if the country is France, then it should be +33 and so on. 
			(Hint: Please keep in mind if the browser location is turned off, then how you will achieve it)
			4- Validate Email

			5- Use the store concept to show the data once you click the "Get Informed" button.

		*/}

			<label htmlFor="company" className="flex flex-col md:flex-row items-start md:items-center mx-auto">
				<span className="text-right w-15 font-normal">Company</span>
				<input
					type="text"
					maxLength={80}
					placeholder="Company name"
					value={company}
					onChange={e => setCompany(e.target.value)}
					className="px-6 py-2 border rounded md:ml-5 w-80"
				/>
			</label>
			<label htmlFor="name" className="flex flex-col md:flex-row items-start md:items-center  mx-auto">
				<span className="text-right md:w-[70px]">
					Name
				</span>
				<input
					type="text"
					maxLength={50}
					placeholder="Name"
					value={name}
					onChange={e => setName(e.target.value)}
					className="px-6 py-2 border rounded md:ml-5 w-80"
				/>
			</label>
			<label htmlFor="phone" className="flex flex-col md:flex-row items-start md:items-center mx-auto">
				<span className="text-right md:w-[70px]">
					Phone
				</span>
				<input
					type="phone"
					placeholder="Phone number"
					value={phone}
					onChange={e => setPhone(e.target.value)}
					className="px-6 py-2 border rounded md:ml-5 w-80"
				/>
			</label>
			<label htmlFor="email" className="flex flex-col md:flex-row items-start md:items-center mx-auto">
				<span className="text-right md:w-[70px]">
					Email
				</span>
				<input
					type="email"
					placeholder='name@email.com'
					value={email}
					onChange={e => setEmail(e.target.value)}
					className="px-6 py-2 border rounded md:ml-5 w-80"
				/>
			</label>
			<button className="px-6 py-2 bg-blue-500 text-white rounded w-60 mx-auto my-2">Get informed</button>
		</form>
	</div>
}

export default Form