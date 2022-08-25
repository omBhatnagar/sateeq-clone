import dollar from "../images/dollar.svg";
import people from "../images/people.svg";
import check from "../images/check.svg";
import CtaCard from "./CtaCard";
import { useState } from "react";
import LoginModal from "./LoginModal";

const Cta = () => {
	const [isOpen, setIsOpened] = useState(false);

	const data = [
		{
			img: dollar,
			desc: " Start Investing with as low as 5000 INR ",
			bgBlue: true,
		},
		{
			img: people,
			desc: " Invest along with Top VC’s & Angel Investors ",
			bgBlue: false,
		},
		{
			img: check,
			desc: " Highly vetted Investment Opportunities ",
			bgBlue: false,
		},
	];

	return (
		<div>
			<div className='flex flex-col justify-between w-11/12 mx-auto md:flex-row md:w-5/6 md:mx-auto items-center gap-4 my-12'>
				{data?.map((item) => (
					<CtaCard img={item.img} desc={item.desc} bgBlue={item.bgBlue} />
				))}
			</div>
			<div
				onClick={() => setIsOpened(true)}
				className='cursor-pointer mt-4 mb-10 w-3/4 md:w-1/2 font-semibold text-lg mx-auto bg-nav-blue rounded-lg px-4 py-3 md:px-8 md:py-3 lg:w-1/3 xl:w-1/5 text-white text-center'
			>
				Sign Up
			</div>
			<LoginModal isOpen={isOpen} setIsOpen={setIsOpened} />
		</div>
	);
};

export default Cta;
