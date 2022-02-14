import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ThankRequest from './ThankRequest'

function Form() {
	const [isSubmited, setIsSubmited] = useState(false)

	const { register, handleSubmit, watch, formState: { errors } } = useForm()

	const onSubmit = data => {
		if (data.companyName === '' || data.name === '' || data.phoneNumber === '' || data.email === '') {
			alert('Please fill all the fields')
		} else {
			setIsSubmited(true)
		}
	}
	// const onError = (error, e) => console.log(error, e)

	{/* TODO:
	- Add validation
	- Add submit button
	- Add form reset
	
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

	// const handlePhoneNumber = (e) => {
	// 	const value = e.target.value
	// 	const regex = /^\d+$/
	// 	if (regex.test(value)) {
	// 		setPhone(value)
	// 	}
	// }


	return <div className='md:text-center px-6 py-4'>
		{isSubmited ?
			<ThankRequest
				company={watch('company')}
				fullName={watch('fullName')}
				phoneNumber={watch('phoneNumber')}
				email={watch('email')}
			/> : <>
				<h2 className="font-bold text-2xl">Find inbound call centers for your company</h2>
				<p className="hidden md:block">Use our AI and Big Data driven call center sourcing solution</p>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="grid grid-flow-row gap-3 mt-6"
				>
					<label htmlFor="company" className="flex flex-col md:flex-row items-start md:items-center  mx-auto">
						<span className="text-right w-15 font-normal">Company</span>
						<input
							type="text"
							maxLength={80}
							placeholder="Company name"
							{...register("company", {
								required: true,
								maxLength: 80,
								pattern: /^[a-zA-Z]+$/
							})}
							className={`px-6 py-2 border rounded md:ml-5 w-80 mx-auto ${errors?.company?.type === "required" || errors?.company?.type === "pattern" && 'border-red-500'}`}
						/>
					</label>
					<label htmlFor="name" className="flex flex-col md:flex-row items-start md:items-center  mx-auto">
						<span className="text-right md:w-[70px]">
							Name
						</span>
						<input
							type="text"
							maxLength={50}
							placeholder="Full name"
							{...register("fullName", {
								required: true,
								maxLength: 50,
							})}
							className={`px-6 py-2 border rounded md:ml-5 w-80 mx-auto ${errors?.fullName?.type === "required" && 'border-red-500'}`}
						/>
					</label>
					<label htmlFor="phone" className="flex flex-col md:flex-row items-start md:items-center mx-auto">
						<span className="text-right md:w-[70px]">
							Phone
						</span>
						<input
							type="phone"
							placeholder="Phone number"
							{...register("phoneNumber", {
								required: true,
								maxLength: 80,
								pattern: /^\d+$/,
								valueAsNumber: true
							})}
							className={`px-6 py-2 border rounded md:ml-5 w-80 mx-auto ${errors?.phoneNumber?.type === "required" || errors?.company?.type === "pattern" && 'border-red-500'}`}
						/>
					</label>
					<label htmlFor="email" className="flex flex-col md:flex-row items-start md:items-center mx-auto">
						<span className="text-right md:w-[70px]">
							Email
						</span>
						<input
							type="email"
							placeholder='name@email.com'
							{...register("email", {
								required: true,
							})}
							className={`px-6 py-2 border rounded md:ml-5 w-80 mx-auto ${errors?.email?.type === "required" && 'border-red-500'}`}
						/>
					</label>
					<input
						type="submit"
						value="Get Informed"
						className="px-6 py-2 bg-blue-500 text-white rounded w-60 mx-auto my-2"
					/>
				</form>
			</>
		}
	</div >
}

export default Form