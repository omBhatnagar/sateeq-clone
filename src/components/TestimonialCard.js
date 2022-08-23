import "./testimonialCard.css";

const TestimonialCard = ({ img, profImg, name, des }) => {
	return (
		<section class='flex gap-4 bg-white p-1 pr-8 rounded-lg w-fit'>
			<aside>
				<img src={profImg} alt='profile' />
			</aside>
			<article class='relative'>
				<div class='flex justify-center w-full absolute'>
					<img class='topimage' src={img} alt='top' />
				</div>
				<div class='relative top-[40%]'>
					<h3 class='font-bold text-xl'>{name}</h3>
					<p class='text-blue-500 font-semibold text-lg'>{des}</p>
				</div>
			</article>
		</section>
	);
};

export default TestimonialCard;
