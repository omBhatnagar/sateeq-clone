const TestimonialCard = ({ img, profImg, name, des }) => {
	return (
		<div className='bg-white p-1 w-5/6 mx-auto mb-6'>
			{/* <img src={img} alt='' /> */}
			<div className='flex'>
				<img src={profImg} alt='profile' className='' />
				<div>
					<p>{name}</p>
					<p>{des}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
