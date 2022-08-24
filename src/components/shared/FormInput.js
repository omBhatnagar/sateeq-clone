import {
	Input,
	InputGroup,
	InputLeftAddon,
	Textarea,
	Radio,
	RadioGroup,
} from "@chakra-ui/react";

const FormInput = ({
	value,
	setValue,
	heading,
	placeholder,
	type,
	required,
	radioData,
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
						_placeholder={placeholderStyle}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						required={required}
						size={size}
						isInvalid={!value}
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
						isInvalid={!value}
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
						isInvalid={!value}
					/>
				);
			case "radio":
				return (
					<RadioGroup
						onChange={(e) => setValue(e)}
						value={value}
						className='flex gap-3'
					>
						<Radio value={"true"}>Yes</Radio>
						<Radio value={"false"}>No</Radio>
					</RadioGroup>
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
						isInvalid={!value}
					/>
				);
			case "phone":
				return (
					<InputGroup>
						<InputLeftAddon children='+91' />
						<Input
							type='tel'
							value={value}
							placeholder={placeholder}
							_placeholder={placeholderStyle}
							required={required}
							onChange={(e) => setValue(e.target.value)}
							size={size}
							isInvalid={!value}
						/>
					</InputGroup>
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
