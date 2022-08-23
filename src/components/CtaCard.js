const CtaCard = ({ img, desc, bgBlue }) => {
	return (
		<div
			className={`${
				bgBlue ? "bg-grad-b" : "bg-white"
			} flex flex-col gap-12 justify-between items-center p-10 rounded-3xl shadow-cta-shadow`}
		>
			<div
				className={`${
					bgBlue ? "bg-cta-card-image-bg" : "bg-cta-card-b"
				} rounded-full w-[80px] h-[80px] flex justify-center items-center`}
			>
				<img src={img} alt='' className='' />
			</div>
			<div>
				<p className={`${bgBlue ? "text-white" : "text-black"} text-center`}>
					{desc}
				</p>
			</div>
		</div>
	);
};

export default CtaCard;
