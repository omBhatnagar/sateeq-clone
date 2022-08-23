import { useState } from "react";
import cx from "classnames";

const Accordion = ({ heading, children }) => {
	const [active, setActive] = useState(false);

	return (
		<div className=''>
			{/* HEADING */}
			<div
				className='flex justify-between items-center px-3 cursor-pointer'
				onClick={() => setActive(!active)}
			>
				<div className='text-xl md:text-2xl flex-1 font-semibold'>
					{heading}
				</div>
				<i
					className={cx(
						{
							"fa-solid fa-minus": active,
							"fa-solid fa-plus": !active,
						},
						" mt-0.5 transform transition-transform duration-1000",
					)}
				/>
			</div>
			{/* HIDDEN CONTENT */}
			<div
				className={cx(
					{
						"max-h-96 duration-1000": active,
						"max-h-0 duration-500": !active,
					},
					"text-gray-600 text-justify text-sm md:text-lg w-10/12 transform transition-all ease-in-out overflow-hidden px-3",
				)}
			>
				{children}
			</div>
			<hr className='my-3 bg-gray-300' />
		</div>
	);
};

export default Accordion;
