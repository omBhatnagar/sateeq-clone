import funded from "../images/funded.svg";

const DealsCard = ({
	img,
	smallImg,
	heading,
	tags,
	raised,
	close,
	invest,
	desc,
	finished,
}) => {
	return (
		<div className='my-8 md:my-5 bg-white w-11/12 mx-auto shadow-deal-card rounded-lg'>
			<div className=''>
				<img src={img} alt='' className='rounded-t-lg' />
			</div>
			<div>
				<div className='flex justify-between p-4 items-center'>
					<div className='w-1/4'>
						<img src={smallImg} alt='' className='w-full my-auto' />
					</div>
					<div className='w-2/3 py-4'>
						<h2 className='text-2xl font-bold'>{heading}</h2>
						<div className='flex justify-about gap-1'>
							{tags?.map((tag, index) => (
								<button className='rounded-lg text-xs font-bold text-white text-center px-3 py-2 mt-2 bg-grad-b'>
									{tag}
								</button>
							))}
						</div>
					</div>
				</div>
				<p className='text-center text-hero-p w-11/12 mx-auto text-sm leading-4'>
					{desc}
				</p>
				<div className='mb-4'>
					<div className='bg-gradient-to-r from-grad-lb via-grad-b to-grad-db w-11/12 h-2 mx-auto mt-6 mb-2 rounded-xl'></div>

					{finished ? (
						<div className='flex justify-around items-center'>
							<div className='flex flex-col bg-funded px-5 rounded-md'>
								<p className='font-bold text-md text-funded-dark-green'>
									{raised}
								</p>
								<p className='text-hero-p text-sm'>Raised</p>
							</div>
							<div className='flex justify-around border py-3 px-6 rounded-md text-xs font-bold items-center border-funded-dark-green text-funded-dark-green'>
								<img src={funded} alt='funded' />
								<p className='ml-2'>Succesfully Funded</p>
							</div>
						</div>
					) : (
						<div className='flex justify-center'>
							<div className='flex flex-col border-r border-slate-200 px-5'>
								<p className='font-bold text-md'>{raised}</p>
								<p className='text-hero-p text-sm'>Raised</p>
							</div>
							<div className='flex flex-col border-r border-slate-200 px-5'>
								<p className='font-bold text-md'>{close}</p>
								<p className='text-hero-p font-sm'>Closes in</p>
							</div>
							<div className='flex flex-col px-5'>
								<p className='font-bold text-md'>{invest}</p>
								<p className='text-hero-p font-sm'>Min Invest</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DealsCard;
