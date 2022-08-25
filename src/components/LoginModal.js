import { Modal } from "@mantine/core";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import googleLogo from "../images/googleLogo.svg";
import FormInput from "./shared/FormInput";

const LoginModal = ({ isOpen, setIsOpen }) => {
	const [isLogin, setIsLogin] = useState(false);

	const handleClose = () => setIsOpen(false);
	return (
		<>
			<Modal
				centered={true}
				size='sm'
				opened={isOpen}
				onClose={handleClose}
				withCloseButton={false}
				className='rounded-2xl'
			>
				{isLogin ? (
					<LoginForm setIsLogin={setIsLogin} />
				) : (
					<LoginSignup setIsLogin={setIsLogin} />
				)}
			</Modal>
		</>
	);
};

const LoginForm = () => {
	return (
		<div className='px-4 py-2'>
			<h1 className='my-2 text-2xl leading-8 text-[#30323e] font-bold text-center'>
				Log In
			</h1>
			<FormInput placeholder='Enter your phone/email' type='text' size='lg' />
			<button
				className={`my-2 w-full font-semibold text-md mx-auto md:mx-0 bg-grad-b rounded-xl p-4 md:px-8 md:py-3 text-white text-center mb-4`}
			>
				Request OTP
			</button>
			<div className='text-center'>
				<p className='text-sm text-[#787f9d] leading-4'>
					Don't have an account?{" "}
					<NavLink to='/signup' className='text-grad-b font-semibold'>
						Sign Up
					</NavLink>
				</p>
			</div>
		</div>
	);
};

const LoginSignup = ({ setIsLogin }) => {
	return (
		<div className='p-4'>
			<h1 className='text-2xl leading-8 text-black font-extrabold text-center'>
				Get Started
			</h1>
			<button
				onClick={() => setIsLogin(true)}
				className={`mt-4 w-full font-semibold text-md mx-auto md:mx-0 bg-grad-b rounded-xl p-4 md:px-8 md:py-3 text-white text-center mb-4`}
			>
				Login with Email or Phone
			</button>

			<div className='flex items-center gap-1'>
				<div className='w-5/6 h-0.5 bg-[#e0e0e0]' />
				<div className='whitespace-nowrap'>OR</div>
				<div className='w-5/6 h-0.5 bg-[#e0e0e0]' />
			</div>

			<div
				className={`mt-4 w-full font-semibold text-lg mx-auto md:mx-0 rounded-xl p-4 md:px-8 md:py-3 text-black text-center mb-4 flex justify-around lg:justify-center lg:gap-6 items-center shadow-xl`}
			>
				<img src={googleLogo} alt='google-logo' />
				<span>Sign up with Google</span>
			</div>
			<div className='text-center pt-4'>
				<p className='text-sm text-[#787f9d] leading-4'>
					Don't have an account?{" "}
					<NavLink to='/signup' className='text-grad-b font-semibold'>
						Sign Up
					</NavLink>
				</p>
				<p className='text-sm text-[#787f9d] leading-4 pt-6'>
					Are you a founder looking to raise funds?{" "}
					<NavLink to='/startupsignup' className='text-grad-b font-semibold'>
						Apply Now
					</NavLink>
				</p>
			</div>
		</div>
	);
};

export default LoginModal;
