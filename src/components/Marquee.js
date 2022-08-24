import TestimonialCard from "./TestimonialCard";

const Marquee = ({ data }) => {
	return (
		<marquee class='py-4' loop='infinite'>
			<div class='flex gap-16'>
				{data?.map((item, index) => (
					<TestimonialCard
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
