import Accordion from "./shared/Accordion";

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
	];
	return (
		<div className=''>
			{data?.map((item) => (
				<Accordion heading={item.heading} children={item.content} />
			))}
		</div>
	);
};

export default Faqs;
