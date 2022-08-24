import {
	Input,
	InputGroup,
	InputLeftAddon,
	Textarea,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
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
					/>
				);
			case "number":
				return (
					<NumberInput value={value} onChange={(e) => setValue(e.target.value)}>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
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
					/>
				);
			case "radio":
				return (
					<RadioGroup onChange={setValue} value={value}>
						{radioData?.map((radio) => (
							<Radio value={radio.value}>{radio.content}</Radio>
						))}
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
						/>
					</InputGroup>
				);
			default:
				return;
		}
	};
	return (
		<div className='my-4'>
			<h1 className='text-xl text-black font-semibold leading-8'>{heading}</h1>
			{returnInput(type)}
		</div>
	);
};

export default FormInput;
