import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ThankRequest from './ThankRequest'

import PhoneInput from 'react-phone-input-2'

function Form() {
	const [isSubmited, setIsSubmited] = useState(false)
	const [countryCode, setCountryCode] = useState('')

	const { register, control, handleSubmit, watch, formState: { errors } } = useForm()

	const onSubmit = data => {
		if (data.companyName === '' || data.name === '' || data.phoneNumber === '' || data.email === '') {
			alert('Please fill all the fields')
		} else {
			console.log(data)
			setIsSubmited(true)
		}
	}

	useEffect(() => {
		fetch('https://ipapi.co/json/')
			.then(res => res.json())
			.then(response => {
				if (!response.country) {
					setCountryCode('de')
				} else {
					setCountryCode(response.country)
				}
			})
			.catch((data, status) => {
				console.log('Request failed:', data);
			});
	}, [])

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
					<label htmlFor="company" className="flex flex-col md:flex-row items-start md:items-center mx-auto">
						<span className="text-right w-15 font-normal mr-5">Company</span>
						<input
							type="text"
							maxLength={80}
							placeholder="Company name"
							{...register("company", {
								required: true,
								maxLength: 80,
								pattern: /^[a-zA-Z]+$/
							})}
							className={`px-6 py-2 border rounded w-80 ${(errors?.company?.type === "required" || errors?.company?.type === "pattern") && 'border-red-500'}`}
						/>
					</label>
					<label htmlFor="name" className="flex flex-col md:flex-row items-start md:items-center  mx-auto">
						<span className="text-right md:w-[70px] mr-5">Name</span>
						<input
							type="text"
							maxLength={50}
							placeholder="Full name"
							{...register("fullName", {
								required: true,
								maxLength: 50,
							})}
							className={`px-6 py-2 border rounded w-80 ${errors?.fullName?.type === "required" && 'border-red-500'}`}
						/>
					</label>
					<label htmlFor="phone" className="flex flex-col md:flex-row items-start md:items-center mx-auto">
						<span className="text-right md:w-[70px] mr-5">Phone</span>
						<Controller
							control={control}
							name="phoneNumber"
							rules={{ required: true }}
							render={({ field: { ref, ...field } }) => (
								<PhoneInput
									{...field}
									inputProps={{
										ref,
										required: true,
									}}
									inputStyle={{ borderColor: errors?.phoneNumber?.type === "required" && 'rgb(239 68 68)',padding: '0.5rem 1.5rem', borderWidth: '1px', borderRadius: '0.25rem', width: '20rem' }}
									specialLabel={null}
									autoFormat={true}
									country={countryCode.toLowerCase()}
									countryCodeEditable={true}
								/>
							)}
						/>
					</label>
					<label htmlFor="email" className="flex flex-col md:flex-row items-start md:items-center mx-auto">
						<span className="text-right md:w-[70px] mr-5">
							Email
						</span>
						<input
							type="email"
							placeholder='name@email.com'
							{...register("email", {
								required: true,
							})}
							className={`px-6 py-2 border rounded w-80 ${errors?.email?.type === "required" && 'border-red-500'}`}
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