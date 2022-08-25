import { Input } from "@mantine/core";
import { useState } from "react";

const InvestHero = () => {
	const [value, setValue] = useState("");
	return (
		<div className='w-11/12 mx-auto md:mt-20'>
			<div className='text-left font-extrabold text-4xl mb-4 md:text-left lg:mt-12 xl:mt-24'>
				<h1>Invest Now</h1>
			</div>
			<p className='text-[#2c3e50] text-xl leading-8 w-5/6'>
				{" "}
				Browse latest investment opportunities on Sateeq. All companies are{" "}
				<span className='font-semibold'> vetted & pass due diligence. </span>
			</p>
			<div className='my-4'>
				<Input
					icon={<i class='fa-solid fa-magnifying-glass' />}
					placeholder='Search Startups Campaign'
					size='lg'
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
						console.log("Search Bar State: ", e.target.value);
					}}
				/>
			</div>
		</div>
	);
};

export default InvestHero;
