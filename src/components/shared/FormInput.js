// import {
// 	Input,
// 	InputGroup,
// 	InputLeftAddon,
// 	Textarea,
// 	Radio,
// 	RadioGroup,
// } from "@chakra-ui/react";

import { Input, Radio, Textarea } from "@mantine/core";

const FormInput = ({
	value,
	setValue,
	heading,
	placeholder,
	type,
	required,
	isInvalid,
	placeholderStyle,
	grouped,
	size,
}) => {
	const returnInput = (type) => {
		switch (type) {
			case "text":
				return (
					<Input
						placeholder={placeholder}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						required={required}
						size={size}
						invalid={isInvalid ? !value : false}
					/>
				);
			case "number":
				return (
					<Input
						type='text'
						pattern={`[0-9]*{3,30}`}
						placeholder={placeholder}
						value={value}
						onChange={(e) =>
							setValue((v) => (e.target.validity.valid ? e.target.value : v))
						}
						required={required}
						size={size}
						invalid={isInvalid ? !value : false}
					/>
				);
			case "email":
				return (
					<Input
						type='email'
						placeholder={placeholder}
						_placeholder={placeholderStyle}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						required={required}
						size={size}
						invalid={isInvalid ? !value : false}
					/>
				);
			case "radio":
				return (
					<Radio.Group
						onChange={(e) => setValue(e)}
						value={value}
						className='flex gap-3'
					>
						<Radio value={"true"} label='Yes' />
						<Radio value={"false"} label='No' />
					</Radio.Group>
				);
			case "textarea":
				return (
					<Textarea
						placeholder={placeholder}
						_placeholder={placeholderStyle}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						required={required}
						size={size}
						invalid={isInvalid ? !value : false}
					/>
				);
			case "phone":
				return (
					<div className='flex justify-center items-center w-full'>
						<div>+91</div>
						<Input
							type='tel'
							value={value}
							placeholder={placeholder}
							_placeholder={placeholderStyle}
							required={required}
							onChange={(e) => setValue(e.target.value)}
							size={size}
							// isInvalid={isInvalid ? !value : false}
						/>
					</div>
				);
			default:
				return;
		}
	};
	return (
		<div className={`my-4 ${grouped ? "w-[45%]" : "w-full"}`}>
			<h1 className='text-xl text-black font-semibold leading-8'>{heading}</h1>
			{returnInput(type)}
		</div>
	);
};

export default FormInput;
