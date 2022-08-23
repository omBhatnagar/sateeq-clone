const InvestedCards = ({ img, earned, isFlexCol }) => {
	return (
		<div
			className={`flex ${
				isFlexCol ? "flex-col md:flex-row" : "flex-row md:flex-col"
			} justify-evenly items-center gap-4 bg-white rounded-3xl px-6 py-10 w-full ${
				isFlexCol ? "" : "md:w-[47%]"
			}`}
		>
			<div className={`${isFlexCol ? "w-2/3 md:w-1/3" : "w-1/2 md:w-2/3"}`}>
				<img src={img} alt='' className={`${isFlexCol ? "w-full" : ""}`} />
			</div>
			<div className=''>
				<p className='text-invested-card-p text-center'>
					You could have earned
				</p>
				<h1 className='font-bold text-4xl text-center'>{earned}</h1>
			</div>
		</div>
	);
};

export default InvestedCards;
