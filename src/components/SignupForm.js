import { useState } from "react";
import FormInput from "./shared/FormInput";

const SignupForm = () => {
	const [fname, setFname] = useState();
	const [lname, setLname] = useState();
	const [email, setEmail] = useState();

	return (
		<div className='w-5/6 mx-auto md:mt-20'>
			<div className='text-center'>
				<h1 className='text-[35px] leading-[43px] text-black font-extrabold'>
					Get Started
				</h1>
				<p className='text-lg leading-[30px] text-signup-blue-p'>
					Please provide us with your name and email
				</p>
			</div>
			<div className='flex justify-between items-center'>
				<FormInput
					value={fname}
					setValue={setFname}
					required={true}
					placeholder={"First Name"}
					type={"text"}
				/>
				<FormInput
					value={lname}
					setValue={setLname}
					required={true}
					placeholder={"Last Name"}
					type={"text"}
				/>
			</div>
			<FormInput
				value={email}
				setValue={setEmail}
				required={true}
				placeholder={"Email"}
				type={"email"}
			/>
		</div>
	);
};

export default SignupForm;
