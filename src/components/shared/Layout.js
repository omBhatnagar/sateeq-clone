import Navbar from "./Navbar";
import cx from "classnames";
import { useState } from "react";
import Footer from "./Footer";
import Sticky from "./Sticky";

const Layout = ({ children, className, theme, accent, isHome }) => {
	const [isSidebarOpen, setIsSideBarOpen] = useState(false);
	const MainClasses = cx(
		{
			"bg-dark": theme === "dark",
			"bg-white": theme === "light",
		},
		className,
		"sm:py-12 overflow-x-hidden",
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
			<Footer />
			<Sticky isHome={isHome} />
		</div>
	);
};

Layout.defaultProps = {
	isHome: false,
};
export default Layout;
