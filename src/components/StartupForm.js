import { useRef, useState } from "react";
import FormInput from "./shared/FormInput";

const StartupForm = () => {
	const [file, setFile] = useState();
	const [pitch, setPitch] = useState();
	const [companyName, setCompanyName] = useState();
	const [email, setEmail] = useState();
	const [contact, setContact] = useState();
	const [city, setCity] = useState();
	const [amount, setAmount] = useState();
	const [isRaised, setIsRaised] = useState();
	const [companyInfo, setCompanyInfo] = useState();

	const inputRef = useRef(null);
	const pitchRef = useRef(null);

	const handleClick = () => inputRef.current.click();
	const pitchHandler = () => pitchRef.current.click();
	const fileHandler = (e) => {
		setFile(e.target.files[0]);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			companyLogo: file,
			companyName,
			email,
			contact,
			city,
			amount,
			isRaised,
			companyInfo,
			pitch,
		};
		console.log("Form Data: ", data);
	};

	const formSchema = [
		{
			value: companyName,
			setValue: setCompanyName,
			heading: "What is your company called?",
			placeholder: "Compnay Name",
			type: "text",
			required: true,
		},
		{
			value: email,
			setValue: setEmail,
			heading: "Email Id",
			placeholder: "Email",
			type: "email",
			required: true,
		},
		{
			value: contact,
			setValue: setContact,
			heading: "Contact No",
			placeholder: "Contact No.",
			type: "phone",
			required: true,
		},
		{
			value: city,
			setValue: setCity,
			heading: "Where is your company based?",
			placeholder: "City",
			type: "text",
			required: true,
		},
		{
			value: amount,
			setValue: setAmount,
			heading: "How much are you looking to raise?",
			placeholder: "Amount",
			type: "number",
			required: true,
		},
		{
			value: isRaised,
			setValue: setIsRaised,
			heading: "Has your company raised funds before?",
			placeholder: "",
			type: "radio",
			radioData: [
				{
					value: true,
					content: "Yes",
				},
				{
					value: false,
					content: "No",
				},
			],
			required: true,
		},
		{
			value: companyInfo,
			setValue: setCompanyInfo,
			heading: "How is your company doing?",
			placeholder: "Tell us about your revenue, growth, users, etc.",
			type: "textarea",
			required: true,
		},
	];
	return (
		<div className='w-5/6 lg:w-2/3 mx-auto mb-8'>
			<form onSubmit={handleSubmit}>
				<input
					type='file'
					name='logo'
					className='hidden'
					onChange={fileHandler}
					ref={inputRef}
				/>
				<div
					className='w-[100px] h-[100px] text-xs flex justify-center items-center rounded-full border-2 border-grad-b'
					onClick={handleClick}
				>
					Company logo
				</div>
				{formSchema?.map((item) => (
					<FormInput
						value={item.value}
						setValue={item.setValue}
						heading={item.heading}
						placeholder={item.placeholder}
						type={item.type}
						required={item.required}
					/>
				))}
				<input
					type='file'
					name='logo'
					className='hidden'
					onChange={(e) => setPitch(e.target.files[0])}
					ref={pitchRef}
				/>
				<div className='my-4'>
					<h1 className='text-xl text-black font-semibold leading-8'>
						Pitch Deck
					</h1>
					<div className='border-4 border-[#78aff5] border-dashed rounded-xl bg-[#f0f8ff] flex justify-center items-center px-6 py-10 w-11/12 mx-auto'>
						Drag and drop or click to browse
					</div>
				</div>
				<div className='w-11/12 mx-auto mt-8'>
					<div
						onClick={handleSubmit}
						className="className='mt-4 w-11/12 font-semibold text-lg mx-auto bg-nav-blue rounded-lg px-4 py-3 md:px-8 md:py-3 text-white text-center"
					>
						Submit
					</div>
				</div>
			</form>
		</div>
	);
};

export default StartupForm;
