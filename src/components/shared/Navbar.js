import companyLogo from "../../images/logo-dark.svg";
import { NavLink } from "react-router-dom";
import cx from "classnames";

const NavbarAlt = ({ theme, accent, open, isOpen, logo2 }) => {
	const MenuClasses = cx({
		"text-black": theme === "light",
	});

	const Logo = companyLogo;
	return (
		<div>
			<div
				className={cx(
					"transform transition-transform duration-500 ease-in-out md:hidden bg-white",
				)}
			>
				{/* MOBILE VIEW */}
				<div
					className={cx(
						"flex justify-between items-center w-screen px-10",
						// {
						//   "border-bb-primary": accent === "text-bb-primary",
						//   "border-ws-card-green": accent === "text-ws-card-green",
						//   "border-yilp-primary": accent === "text-yilp-primary",
						// }
					)}
				>
					{/* LOGO */}
					<div className='flex item-center'>
						<img
							src={Logo}
							style={{ width: "6rem" }}
							className='py-2'
							alt='Incentiv'
						/>
						{/* LOGO 2*/}
						{/* {logo2 && (
              <img
                src={logo2}
                style={{ height: "4rem" }}
                className="p-2"
                alt="Muniversiti Programs"
              />
            )} */}
					</div>
					{/* MENU */}
					<button
						className='nav-btn'
						onClick={() => {
							isOpen(!open);
						}}
					>
						<i className={`fa fa-bars ${MenuClasses}`} />
					</button>
				</div>
			</div>

			<div
				className={cx(
					"fixed sm:absolute top-0 right-0 w-full sm:w-3/5 sm:w-screen px-6 sm:px-24 transform transition-transform duration-500 ease-in-out z-40 bg-white",
					{
						"translate-x-0": open,
						"-translate-x-full md:translate-x-0": !open,
					},
				)}
			>
				<div
					className={cx("flex justify-between items-center w-full md:hidden")}
				>
					{/* LOGO */}
					<div className='flex item-center'>
						<img
							src={Logo}
							style={{ width: "6rem" }}
							className='py-2'
							alt='Incentiv'
						/>
					</div>
					{/* MENU */}
					<button
						className='nav-btn p-2'
						onClick={() => {
							isOpen(!open);
						}}
					>
						<i className={`fa-solid fa-xmark z-44 fa-lg ${MenuClasses}`} />
					</button>
				</div>
				<div
					className={
						"flex flex-col h-screen py-28 tracking-wider md:flex-row md:items-center justify-start md:justify-between md:h-auto md:w-full md:py-0 md:mx-auto"
					}
				>
					<div className='flex md:gap-8 items-center'>
						<img
							src={Logo}
							style={{ height: "7rem" }}
							className='py-2 hidden md:block'
							alt='Incentiv'
						/>
					</div>
					{/* NAVLIST */}
					<ul className='flex flex-col justify-between md:flex-row md:items-center list-none gap-1 md:gap-3ß'>
						<li className='flex justify-center md:order-1'>
							<NavLink
								to='/invest'
								className='p-3 md:px-0 md:pr-2 text-lg md:text-head-top cursor-pointer font-semibold whitespace-nowrap'
							>
								Invest
							</NavLink>
						</li>
						<li className='flex justify-center md:order-1'>
							<NavLink
								to='/raise'
								className='p-3 md:pl-3 md:pr-16 md:border-r border-slate-300 text-lg cursor-pointer font-semibold whitespace-nowrap'
							>
								Raise
							</NavLink>
						</li>
						<li className='mt-3 md:mt-0 md:order-3'>
							<NavLink
								to='/signup'
								className='text-lg md:text-base cursor-pointer font-semibold whitespace-nowrap'
							>
								<div className='w-full mx-auto bg-nav-blue rounded-lg px-4 py-4 md:px-8 md:py-3 text-white text-center'>
									Sign Up
								</div>
							</NavLink>
						</li>
						<li className='mt-3 md:mt-0 md:order-2 md:pl-8'>
							<NavLink to='/login'>
								<div className='font-semibold text-lg md:text-base w-full mx-auto border border-nav-blue rounded-lg px-4 py-4 md:border-none text-nav-blue md:text-black text-center'>
									Login
								</div>
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavbarAlt;
