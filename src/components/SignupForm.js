import { useState } from "react";
import FormInput from "./shared/FormInput";
import googleLogo from "../images/googleLogo.svg";
import register from "../images/register.svg";

const SignupForm = () => {
	const [fname, setFname] = useState();
	const [lname, setLname] = useState();
	const [email, setEmail] = useState();

	return (
		<div className='w-5/6 mx-auto md:mt-20 flex justify-between items-center gap-10 flex-row-reverse'>
			<div className='md:w-11/12 lg:w-5/12'>
				<div className='text-center'>
					<h1 className='text-[35px] leading-[43px] text-black font-extrabold'>
						Get Started
					</h1>
					<p className='text-lg leading-[30px] text-signup-blue-p'>
						Please provide us with your name and email
					</p>
				</div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						console.log("Form data: ", {
							fname,
							lname,
							email,
						});
					}}
				>
					<div className='flex justify-between items-center flex-wrap'>
						<FormInput
							value={fname}
							setValue={setFname}
							required={true}
							placeholder={"First Name"}
							type={"text"}
							grouped={true}
							size={"lg"}
							isInvalid={false}
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
					<button
						type='submit'
						className={`mt-4 w-full font-semibold text-lg mx-auto md:mx-0 bg-grad-b rounded-xl p-4 md:px-8 md:py-3 text-white text-center mb-4`}
					>
						Next
					</button>
				</form>
				<div
					className={`mt-4 w-full font-semibold text-lg mx-auto md:mx-0 border border-black rounded-xl p-4 md:px-8 md:py-3 text-black text-center mb-4 flex justify-around lg:justify-center lg:gap-6 items-center`}
				>
					<img src={googleLogo} alt='google-logo' />
					<span>Sign up with Google</span>
				</div>
			</div>
			<div className='hidden md:block'>
				<img src={register} alt='register-illustration' />
			</div>
		</div>
	);
};

export default SignupForm;
