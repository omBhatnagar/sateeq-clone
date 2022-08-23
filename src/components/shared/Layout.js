import Navbar from "./Navbar";
import cx from "classnames";
import { useState } from "react";

const Layout = ({ children, className, theme, accent }) => {
	const [isSidebarOpen, setIsSideBarOpen] = useState(false);
	const MainClasses = cx(
		{
			"bg-dark": theme === "dark",
			"bg-white": theme === "light",
		},
		className,
		"sm:py-20 overflow-x-hidden",
	);
	return (
		<div className='font-inter'>
			<Navbar
				theme={theme}
				accent={accent}
				open={isSidebarOpen}
				isOpen={setIsSideBarOpen}
			/>
			<div
				onClick={() => {
					return isSidebarOpen ? setIsSideBarOpen(false) : null;
				}}
			>
				<div className={MainClasses}>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
