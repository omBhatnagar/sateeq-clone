import Accordion from "./shared/Accordion";
import envelope from "../images/Envelope.svg";

const Faqs = () => {
	const data = [
		{
			heading: "How can investor sign up for Sateeq?",
			content: `Investors can fill up the Sign up form by entering basic details. In order make any Investment, You need to first complete basic eKYC by verifying PAN Card and Payment details. Don't worry, You data is secure.`,
		},
		{
			heading: "How quality of deals is ensure?",
			content: `All the startups getting listed on Sateeq undergo 3 step verification process under which, They are analysed by experienced Investment Professionals and Angels Investors. In addition to this, Due diligence is also conducted by an Independant Firm. Also, All Startups listed are backed VC's and Marquee Individuals.`,
		},
		{
			heading: "Are there any guaranteed returns?",
			content: `No, We don't guarantee any kind of returns to the Investors. Startups are Highly-illiquid and risky asset class. Portfolio diversification is the best way to hedge risk.`,
		},
		{
			heading: "Is there any membership fees for Investors?",
			content: `No, We don't charge any membership fees from Investors. It's free of cost. You just need to pay 2% as Convenience fees while investing and 2% on Exit.`,
		},
	];
	return (
		<div className='my-20 w-11/12 md:w-[77%] mx-auto flex flex-col md:flex-row md:gap-10 justify-between'>
			<div className='md:w-1/4'>
				<h1 className='text-3xl text-center md:text-left font-bold text-black'>
					Any questions?
				</h1>
				<p className='text-center md:text-left text-hero-p text-lg mt-2 leading-[34px] mb-6'>
					We have already curated some of the common asked questions for you
				</p>
				<div className='mt-4 w-2/3 md:w-5/6 font-semibold text-lg mx-auto bg-nav-blue rounded-lg px-3 py-4 md:px-8 md:py-3 lg:w-5/6 xl:w-full md:mx-0 text-white text-center mb-6'>
					<a href='https://api.whatsapp.com/send/?phone=%2B918882725419&text=Hi%20Sateeq%20👋🏻,%20%20I%20Want%20to%20know%20more&type=phone_number'>
						<div className='flex justify-center items-center gap-4'>
							<span className='whitespace-nowrap'>Contact Us </span>
							<img src={envelope} alt='envelope' />
						</div>
					</a>
				</div>
			</div>
			<div className='w-11/12 mx-auto md:w-7/12'>
				{data?.map((item) => (
					<Accordion heading={item.heading} children={item.content} />
				))}
			</div>
		</div>
	);
};

export default Faqs;
