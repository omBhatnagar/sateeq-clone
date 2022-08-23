import companyLogo from "../../images/incentiv.jpeg";
import { NavLink } from "react-router-dom";
import cx from "classnames";

const NavbarAlt = ({ theme, accent, open, isOpen, logo2 }) => {
	const linkStyle = ({ isActive }) => ({
		color: isActive
			? accent
				? accent
				: "#C7C7C7"
			: theme === "dark"
			? "#8b8989"
			: "#000",
	});

	const MenuClasses = cx({
		"text-black": theme === "light",
	});

	const Logo = companyLogo;
	return (
		<div>
			<div
				className={cx(
					"py-4 transform transition-transform duration-500 ease-in-out md:hidden bg-white",
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
					<div className='h-1/2 flex item-center'>
						<img
							src={Logo}
							style={{ height: "4rem" }}
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
					"fixed md:absolute top-0 right-0 w-full sm:w-3/5 md:w-screen px-12 transform transition-transform duration-500 ease-in-out z-40 bg-white",
					{
						"translate-x-0": open,
						"-translate-x-full md:translate-x-0": !open,
					},
				)}
			>
				<div
					className={cx(
						"flex justify-between items-center w-full pt-4 md:hidden",
						// {
						//   "border-bb-primary": accent === "text-bb-primary",
						//   "border-ws-card-green": accent === "text-ws-card-green",
						//   "border-yilp-primary": accent === "text-yilp-primary",
						// }
					)}
				>
					{/* LOGO */}
					<div className='h-1/2 flex item-center'>
						<img
							src={Logo}
							style={{ height: "4rem" }}
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
							style={{ height: "4.5rem" }}
							className='py-2 hidden md:block'
							alt='Incentiv'
						/>
					</div>
					{/* NAVLIST */}
					<ul className='flex flex-col justify-between md:flex-row md:items-center list-none gap-1 md:gap-3ß'>
						<li className='flex justify-center md:order-1'>
							<NavLink
								to='/invest'
								style={linkStyle}
								className={({ isActive }) =>
									cx(
										{
											"text-neutral-700 font-bold":
												isActive && theme === "dark",
										},
										"p-3 md:px-0 md:pr-2 text-lg md:text-head-top cursor-pointer font-semibold whitespace-nowrap",
									)
								}
							>
								Invest
							</NavLink>
						</li>
						<li className='flex justify-center md:order-1'>
							<NavLink
								to='/raise'
								style={linkStyle}
								className={({ isActive }) =>
									cx(
										{
											"text-neutral-700 font-bold":
												isActive && theme === "dark",
										},
										"p-3 md:pl-3 md:pr-8 md:border-r border-slate-300 text-lg lg:text-xl cursor-pointer font-semibold whitespace-nowrap",
									)
								}
							>
								Raise
							</NavLink>
						</li>
						<li className='mt-3 md:mt-0 md:order-3'>
							<NavLink
								to='/signup'
								style={linkStyle}
								className='text-lg md:text-base cursor-pointer font-semibold whitespace-nowrap'
							>
								<div className='w-full mx-auto bg-nav-blue rounded-lg px-4 py-4 md:px-8 md:py-3 text-white text-center'>
									Sign Up
								</div>
							</NavLink>
						</li>
						<li className='mt-3 md:mt-0 md:order-2'>
							<NavLink to='/login' style={linkStyle}>
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
