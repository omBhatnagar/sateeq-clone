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
			<div className='flex justify-between items-center flex-wrap'>
				<FormInput
					value={fname}
					setValue={setFname}
					required={true}
					placeholder={"First Name"}
					type={"text"}
					grouped={true}
					size={"lg"}
				/>
				<FormInput
					value={lname}
					setValue={setLname}
					required={true}
					placeholder={"Last Name"}
					type={"text"}
					grouped={true}
					size={"lg"}
				/>
				<FormInput
					value={email}
					setValue={setEmail}
					required={true}
					placeholder={"Email"}
					type={"email"}
					grouped={false}
					size={"lg"}
				/>
			</div>
			<div
				className={`mt-4 w-full font-semibold text-lg mx-auto md:mx-0 bg-grad-b rounded-xl p-4 md:px-8 md:py-3 text-white text-center mb-4`}
			>
				Next
			</div>
		</div>
	);
};

export default SignupForm;
