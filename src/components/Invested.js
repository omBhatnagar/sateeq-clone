import ola from "../images/ola.svg";
import bharat from "../images/bharat.svg";
import zomato from "../images/zomato.svg";
import InvestedCards from "./InvestedCards";

const Invested = () => {
	const data = [
		{
			img: ola,
			earned: "₹29L",
			isFlexCol: false,
		},
		{
			img: bharat,
			earned: "₹4.0L",
			isFlexCol: false,
		},
		{
			img: zomato,
			earned: "₹9.5L",
			isFlexCol: true,
		},
	];

	return (
		<div className='flex flex-col md:flex-row md:justify-around md:items-center md:rounded-3xl lg:rounded-[3rem] bg-gradient-to-r from-grad-b to-testimonial-lb w-full mx-auto px-4 md:w-[97%] mx-auto'>
			<div className='md:w-1/3'>
				<h1 className='text-center text-white text-xl md:text-left md:text-3xl font-bold mb-4'>
					If you would have invested
				</h1>
				<p className='text-5xl text-white font-bold text-center md:text-left md:text-6xl mb-4'>
					₹5000
				</p>
				<p className='text-center text-invested-p mb-4 text-base md:text-left md:text-md font-semibold'>
					You could have earned
				</p>
				<div className='w-2/3 mx-auto md:mx-0 my-6'>
					<button className='bg-white text-nav-blue px-4 py-3 rounded-lg text-lg w-full font-bold'>
						View Our Deals
					</button>
				</div>
			</div>
			<div className='flex flex-col md:flex-row md:flex-wrap justify-center md:justify-between items-center gap-5 md:w-1/2 lg:w-5/12 py-16'>
				{data?.map((item) => (
					<InvestedCards
						img={item.img}
						earned={item.earned}
						isFlexCol={item.isFlexCol}
					/>
				))}
				<div className='w-full text-[hsla(0,0%,100%,.6)] text-center pt-6'>
					*In their first funding round
				</div>
			</div>
		</div>
	);
};

export default Invested;
