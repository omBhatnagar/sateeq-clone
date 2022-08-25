import "./testimonialCard.css";

const TestimonialCard = ({ img, profImg, name, des }) => {
	return (
		<div className='flex gap-10'>
			<div className='min-w-[400px] bg-white shadow-lg rounded-lg my-20 relative'>
				<div className='absolute left-1/2 top-10 flex justify-center -mt-16'>
					<div className='border-[4px] rounded-full border-[#1e47ff]'>
						<img
							className='w-10 h-10 object-cover rounded-full border-[.3rem] '
							src={img}
							alt='company'
						/>
					</div>
				</div>
				<div className='flex'>
					<img className='w-20 rotate-[4deg]' src={profImg} alt='person' />
					<div className='mt-6 ml-2'>
						<div className='font-bold text-md'>{name}</div>
						<div className='text-[#1e47ff] font-semibold text-sm'>{des}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
