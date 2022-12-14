import group432 from "../images/Group432.png";
import group430 from "../images/Group430.png";
import group428 from "../images/Group428.png";
import group424 from "../images/Group424.png";
import tm from "../images/1-TM.jpg";
import tms from "../images/1-tms.jpg";
import hive from "../images/hive.png";
import hives from "../images/hives.png";
import notwp from "../images/notwp.jpeg";
import notwps from "../images/notwps.jpeg";
import zapp from "../images/zapp.png";
import zapps from "../images/zapps.png";
import Group419 from "../images/Group419.png";
import Group419s from "../images/Group419s.png";
import publicNext from "../images/publicNext.png";
import publicNexts from "../images/publicNexts.jpg";

import DealsCard from "./DealsCard";
import { NavLink } from "react-router-dom";

const Deals = ({ limited, isHeading }) => {
	const data = [
		{
			img: group432,
			smallImg: group430,
			heading: "Lets Dress Up",
			desc: " LDU offers custom-made designer clothes delivered straight to your doorstep. It provides a platform where individua... ",
			tags: ["Others"],
			raised: "818.0%",
			close: "5 days",
			invest: "₹5000",
			finished: false,
		},
		{
			img: group428,
			smallImg: group424,
			heading: "Gold Setu",
			desc: " Gold Setu is a mobile-first SaaS platform for jewellery retailers that helps them to automate their workflows and d... ",
			tags: ["SaaS"],
			raised: "818.0%",
			close: "5 days",
			invest: "₹5000",
			finished: true,
		},
		{
			img: tm,
			smallImg: tms,
			heading: "Truly Madly",
			desc: " TrulyMadly is a new, modern way to find true, mad love. A platform that brings singles together based on common int... ",
			tags: ["Others", "Artificial"],
			raised: "377.0%",
			close: "5 days",
			invest: "₹10000",
			finished: false,
		},
		{
			img: hive,
			smallImg: hives,
			heading: "BHIVE Alts",
			desc: " BHIVE is a fintech platform which provides retail investors access to institutional quality Real Estate investment ...  ",
			tags: ["Fintech"],
			raised: "1506.7%",
			close: "5 days",
			invest: "₹10000",
			finished: true,
		},
		{
			img: notwp,
			smallImg: notwps,
			heading: "Incluzon",
			desc: " Incluzon is a two-part AI product designed to consolidate the scattered pool of high potential graduates (across re... ",
			tags: ["Artificial", "Others"],
			raised: "140.5%",
			close: "5 days",
			invest: "₹10000",
			finished: true,
		},
		{
			img: zapp,
			smallImg: zapps,
			heading: "Zappfresh",
			desc: " Zappfresh is a fresh meat brand and we ensure healthy meaty goodness to you, without any hassles whatsoever. ",
			tags: ["D2C"],
			raised: "341.8%",
			close: "5 days",
			invest: "₹10000",
			finished: true,
		},
		{
			img: Group419,
			smallImg: Group419s,
			heading: "Saarthi",
			desc: " Saarthi.ai is a multilingual Contact Center AI company focused on Collections. It's the first of its kind collectio... ",
			tags: ["Artificial"],
			raised: "223.4%",
			close: "5 days",
			invest: "₹10000",
			finished: true,
			flex: "flex-1",
		},
		{
			img: publicNext,
			smallImg: publicNexts,
			heading: "PublicNext",
			desc: " PublicNext aims to connect 100 Cr Indians to their neighborhood via local language news, networking, and commerce ",
			tags: ["Entertainment", "Others"],
			raised: "168.5%",
			close: "5 days",
			invest: "₹10000",
			finished: true,
			flex: "flex-1",
		},
	];

	return (
		<div className='my-10 w-11/12 sm:w-5/6 mx-auto'>
			{isHeading && (
				<div>
					<h1 className='text-4xl text-center font-bold'>Latest Deals</h1>
					<p className='text-center text-hero-p text-lg mt-2'>
						{" "}
						Access highly-vetted investment opportunities in startups across the
						various sectors.{" "}
					</p>
				</div>
			)}
			<div className='flex flex-col gap-5 lg:gap-16 sm:flex-row flex-wrap mt-12'>
				{data?.slice(0, limited).map((item, index) => (
					<DealsCard
						key={index}
						img={item.img}
						smallImg={item.smallImg}
						heading={item.heading}
						tags={item.tags}
						raised={item.raised}
						close={item.close}
						invest={item.invest}
						desc={item.desc}
						finished={item.finished}
						flex={item.flex}
					/>
				))}
			</div>
			{limited === 6 ? (
				<NavLink to='/invest'>
					<div className='mt-4 w-3/4 md:w-1/2 font-semibold text-lg mx-auto bg-nav-blue rounded-lg px-4 py-3 md:px-8 md:py-3 lg:w-1/3 xl:w-1/5 text-white text-center'>
						View All
					</div>
				</NavLink>
			) : (
				""
			)}
		</div>
	);
};

export default Deals;
