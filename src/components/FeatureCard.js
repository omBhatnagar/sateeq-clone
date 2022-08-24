const FeatureCard = ({ img, heading, desc, isReverse }) => {
	return (
		<div
			className={`flex flex-col text-center ${
				isReverse
					? "md:flex-row-reverse md:text-right"
					: "md:flex-row md:text-left"
			} justify-center md:justify-between items-center w-11/12 md:px-10 mx-auto my-6 `}
		>
			<div className='md:w-7/12'>
				<h1 className='text-3xl font-extrabold mb-6'>{heading}</h1>
				<p className='text-lg text-[#646464]'>{desc}</p>
			</div>
			<div className='w-2/3 md:w-1/3'>
				<img src={img} alt='' />
			</div>
		</div>
	);
};

export default FeatureCard;
