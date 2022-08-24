const StartupHero = () => {
	return (
		<div className='w-5/6 mx-auto lg:w-2/3 md:mt-20'>
			<h1 className='text-3xl leading-[48px] font-semibold mb-4'>
				Raise with Incentiv
			</h1>
			<p className='text-base leading-8 text-[#000000de]'>
				{" "}
				Tell us a little about your company. Applications are usually processed
				within 5 working days.{" "}
			</p>
			<div className='flex justify-around items-center my-6'>
				<h1 className='text-2xl font-semibold'>Application</h1>
				<hr className='w-full ml-4'></hr>
			</div>
		</div>
	);
};

export default StartupHero;
