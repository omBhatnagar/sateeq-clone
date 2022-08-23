import { NavLink } from "react-router-dom";
import home2 from "../images/home2.svg";

const HomeHero = () => {
	return (
		<div className='mt-6 md:mt-10 flex flex-col md:flex-row md:px-6 w-11/12 mx-auto'>
			<div className='xl:w-1/3 mx-auto'>
				<div className='text-center text-5xl md:text-6xl md:text-left lg:mt-12 xl:mt-24'>
					<span className='block font-bold mb-3 md:mb-4 leading-hero'>
						Invest In
					</span>
					<span className='block font-bold pb-4 md:pb-5 leading-hero whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-grad-lb via-grad-b to-grad-db'>
						{" "}
						Highly-Vetted{" "}
					</span>
					<span className='block font-bold mb-4 leading-hero'>Startups</span>
				</div>
				<p className='text-hero-p text-center md:text-left mt-2'>
					{" "}
					Access Startups opportunities & start Investment journey with amount
					as small as ₹5000.{" "}
				</p>
				<NavLink to='/signup'>
					<div className='mt-4 w-3/4 md:w-1/2 font-semibold text-lg mx-auto md:mx-0 bg-nav-blue rounded-xl px-4 py-5 md:px-8 md:py-3 text-white text-center'>
						Invest Now
					</div>
				</NavLink>
				<p className='text-center md:text-left mt-6 text-hero-p'>
					Already a member?
					<NavLink to='/login'>
						<span className='font-bold text-black'> Login</span>
					</NavLink>
				</p>
			</div>
			<div className='xl:m-1/3 mx-auto'>
				<img src={home2} alt='' />
			</div>
		</div>
	);
};

export default HomeHero;
