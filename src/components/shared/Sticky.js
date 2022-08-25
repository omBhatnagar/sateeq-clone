import { NavLink } from "react-router-dom";

const Sticky = ({ isHome }) => {
	return (
		<div>
			<div className='fixed bottom-[40px] right-[20px] z-50 '>
				<a href='https://api.whatsapp.com/send/?phone=%2B918882725419&text=Hi%20Sateeq%20👋🏻,%20%20I%20Want%20to%20know%20more&type=phone_number'>
					<div className='w-[60px] h-[60px] bg-[#25d366] shadow-whatsapp-shadow rounded-full flex justify-center items-center'>
						<i class='fa-brands fa-whatsapp fa-2xl text-white'></i>
					</div>
				</a>
			</div>
			{isHome && (
				<NavLink to='/signup'>
					<div
						className={`sm:hidden fixed bottom-[18px] left-[10px] z-10 w-5/6 font-semibold text-lg md:mx-0 bg-grad-b rounded-xl px-6 py-5 md:px-8 md:py-3 text-white text-center flex justify-between items-center`}
					>
						<span>Sign up to explore</span>
						<i class='fa-solid fa-arrow-right'></i>
					</div>
				</NavLink>
			)}
		</div>
	);
};

export default Sticky;
