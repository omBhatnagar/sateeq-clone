import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const InvestHero = () => {
	return (
		<div className='w-11/12 mx-auto'>
			<div className='text-left font-extrabold text-4xl mb-4 md:text-left lg:mt-12 xl:mt-24'>
				<h1>Invest Now</h1>
			</div>
			<p className='text-[#2c3e50] text-xl leading-8 w-5/6'>
				{" "}
				Browse latest investment opportunities on Sateeq. All companies are{" "}
				<span className='font-semibold'> vetted & pass due diligence. </span>
			</p>
			<InputGroup className='my-4'>
				<InputLeftElement
					size='lg'
					children={<i class='fa-solid fa-magnifying-glass' />}
				/>
				<Input placeholder='Search Startups Campaign' size='lg' />
			</InputGroup>
		</div>
	);
};

export default InvestHero;
