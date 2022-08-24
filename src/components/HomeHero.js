import { NavLink } from "react-router-dom";

const HomeHero = ({
	line1,
	line2,
	line3,
	desc,
	btnDesc,
	btnColor,
	isLogin,
	img,
	url,
}) => {
	return (
		<div className='mt-6 md:mt-10 flex flex-col items-center md:flex-row md:px-10 w-11/12 mx-auto'>
			<div className='xl:w-5/12 pt-5 lg:pb-20'>
				<div className='text-center text-5xl md:text-6xl md:text-left lg:mt-12 xl:mt-24'>
					<span className='block font-bold mb-3 md:mb-4 leading-hero'>
						{line1}
					</span>
					<span className='block font-bold pb-4 md:pb-5 leading-hero whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-grad-lb via-grad-b to-grad-db'>
						{line2}
					</span>
					<span className='block font-bold mb-4 leading-hero'>{line3}</span>
				</div>
				<p className='text-hero-p text-center md:text-left mt-2'>{desc}</p>
				<NavLink to={`/${url}`}>
					<div
						className={`mt-4 w-3/4 md:w-1/2 font-semibold text-lg mx-auto md:mx-0 ${btnColor} rounded-xl px-4 py-5 md:px-8 md:py-3 text-white text-center`}
					>
						{btnDesc}
					</div>
				</NavLink>
				{isLogin && (
					<p className='text-center md:text-left mt-6 text-hero-p'>
						Already a member?
						<NavLink to='/login'>
							<span className='font-bold text-black'> Login</span>
						</NavLink>
					</p>
				)}
			</div>
			<div className='xl:w-1/2 mx-auto'>
				<img src={img} alt='' className='w-11/12 ml-auto' />
			</div>
		</div>
	);
};

export default HomeHero;
