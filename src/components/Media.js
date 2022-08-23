import cnbc from "../images/cnbc.svg";
import business from "../images/business.svg";
import yourStory from "../images/yourStory.svg";
import et from "../images/et.svg";

const Media = () => {
	return (
		<div className='my-32 w-11/12 mx-auto'>
			<div>
				<h1 className='text-3xl text-center font-bold text-media-grey'>
					In the Media
				</h1>
				<p className='text-center text-hero-p text-lg mt-2 leading-[34px] mb-6'>
					We have been covered by top media groups around India
				</p>
			</div>
			<div className='flex flex-col md:flex-row justify-between items-center lg:w-5/6 lg:mx-auto'>
				{[cnbc, business, yourStory, et].map((item) => (
					<div className='w-1/2 md:w-1/6 my-6'>
						<img src={item} alt='media' className='w-full' />
					</div>
				))}
			</div>
		</div>
	);
};

export default Media;
