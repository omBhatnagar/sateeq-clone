import TestimonialCard from "./TestimonialCard";

const Marquee = ({ data }) => {
	return (
		<marquee className='py-4' loop='infinite'>
			<div className='flex gap-16'>
				{data?.map((item, index) => (
					<TestimonialCard
						key={index}
						img={item.img}
						profImg={item.profImg}
						name={item.name}
						des={item.des}
					/>
				))}
			</div>
		</marquee>
	);
};

export default Marquee;
