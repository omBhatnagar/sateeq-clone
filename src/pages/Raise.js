import FeatureCard from "../components/FeatureCard";
import HomeHero from "../components/HomeHero";
import raiseImg from "../images/raise_image.svg";

const { default: Layout } = require("../components/shared/Layout");

const Raise = () => {
	const featureData = [
		{
			img: "https://sateeq-test1.s3.ap-south-1.amazonaws.com/raise_image_2.svg",
			heading: 'New "growth money"',
			desc: "We take charge of raising a part of your current round, with a ticket size of ~ ₹20L - ₹50L, while providing a firm foundation for you to build a brand through our various services.",
			isReverse: true,
		},
		{
			img: "https://sateeq-test1.s3.ap-south-1.amazonaws.com/raise_image_3.svg",
			heading: "VC Friendly",
			desc: "Our campaigns are VC-approved. It won’t impact your current or future rounds. You can raise capital on Sateeq before, during, or after your venture round. A Sateeq round is an important complement to traditional VC, not its replacement. You can even use our Sateeq Pro network to raise funds directly from Marquee Investors and VCs.",
			isReverse: false,
		},
		{
			img: "https://sateeq-test1.s3.ap-south-1.amazonaws.com/raise_image_4.svg",
			heading: "15 Day Process",
			desc: "Our selection and due diligence process is quick. It takes a maximum of 2 working weeks for your startup campaign to be listed from the date of application.",
			isReverse: true,
		},
		{
			img: "https://sateeq-test1.s3.ap-south-1.amazonaws.com/raise_image_5.svg",
			heading: "Simple Cap Table",
			desc: "All investors represent a single line on your cap table and act as a single investor without voting rights. Our tools make it easy to manage the group as if you’re dealing with one person.",
			isReverse: false,
		},
		{
			img: "https://sateeq-test1.s3.ap-south-1.amazonaws.com/raise_image_6.svg",
			heading: "Anyalytics Made Easy",
			desc: "Sateeq analytics section helps you track every KPI you might need. It doesn’t end there, your monthly investor updates can be sent from the same dashboard! No need of a Company Secretary for you anymore, Sateeq manages that for you",
			isReverse: true,
		},
	];
	return (
		<Layout>
			<HomeHero
				line1='Raise'
				line2='Founder-Friendly'
				line3='Capital'
				desc='Raise funds while increasing product sales, growing your brand, and engaging your community.'
				btnColor='bg-black'
				btnDesc='Raise'
				isLogin={false}
				img={raiseImg}
				url='startupsignup'
			/>
			{featureData?.map((feature) => (
				<FeatureCard
					img={feature.img}
					heading={feature.heading}
					desc={feature.desc}
					isReverse={feature.isReverse}
				/>
			))}
		</Layout>
	);
};

export default Raise;
