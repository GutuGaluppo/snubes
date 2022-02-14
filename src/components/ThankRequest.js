import React from 'react'

const title = (title) => {
	return <p className="leading-10">{title}</p>
}
const userInfo = (userInfo) => {
	return <p className="font-bold text-left leading-10">{userInfo}</p>
}

function ThankRequest({ company, fullName, email, phoneNumber }) {

	return <div className='text-center px-6 py-6'>
		<h2 className="font-bold text-2xl">Thank you for your request!</h2>
		<p className="block my-6">You’ve taken the first step. Our experts will get in touch with you soon.</p>
		<hr />

		<table className="mx-auto mt-6">
			<tbody>
				<tr>
					<td className="text-left">
						{title('Company')}
						{title('Name')}
						{title('Phone')}
						{title('Email')}
					</td>
					<td className="text-left pl-10">
						{userInfo(`${company}`)}
						{userInfo(`${fullName}`)}
						{userInfo(`+${phoneNumber}`)}
						{userInfo(`${email}`)}
					</td>
				</tr>
			</tbody>
		</table>
	</div >
}

export default ThankRequest