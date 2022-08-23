import nikunj from "../images/nikunj.svg";
import nikImg from "../images/nikImg.svg";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
	const data = [
		{
			img: nikImg,
			profImg: nikunj,
			name: "Nikunj Jain",
			des: "Forbes 30u30",
		},
	];

	return (
		<div className='bg-gradient-to-r from-grad-b to-testimonial-lb w-full mx-auto pb-10'>
			<div className='w-5/6 mx-auto pt-6'>
				<h1 className='text-center text-white text-2xl font-bold'>
					Trusted & backed by
				</h1>
				<p className='text-center mt-1 text-testimonial-p'>
					{" "}
					Collaboration with highly reputed Investors in the market{" "}
				</p>
				{data?.map((item, index) => (
					<TestimonialCard
						img={item.img}
						profImg={item.profImg}
						name={item.name}
						des={item.des}
					/>
				))}
			</div>
		</div>
	);
};

export default Testimonials;