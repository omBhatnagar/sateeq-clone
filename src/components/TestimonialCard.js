import "./testimonialCard.css";

const TestimonialCard = ({ img, profImg, name, des }) => {
	return (
		<div className='flex gap-10'>
			<div class='min-w-[400px] max-h-[150px] py-2 px-8 bg-white shadow-lg rounded-lg my-20'>
				<div class='flex justify-center -mt-16'>
					<div class='border-[4px] rounded-full border-indigo-700'>
						<img
							class='w-20 h-20 object-cover rounded-full border-[.3rem] '
							src={img}
						/>
					</div>
				</div>
				<div className=' relative flex gap-6'>
					<img className='relative w-20' src={profImg} alt='' />
					<div className='mt-2'>
						<div>{name}</div>
						<div className='text-blue-600 font-bold'>{des}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
