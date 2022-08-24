import nikunj from "../images/nikunj.svg";
import nikImg from "../images/nikImg.svg";
import amitesh from "../images/amitesh.svg";
import amiteshSmall from "../images/amiteshSmall.svg";
import dipak from "../images/dipak.svg";
import dipakSmall from "../images/dipakSmall.svg";
import girish from "../images/girish.svg";
import girishSmall from "../images/girishSmall.svg";
import kunwar from "../images/kunwar.svg";
import kunwarSmall from "../images/kunwarSmall.svg";
import kushal from "../images/kushal.svg";
import kushalSmall from "../images/kushalSmall.svg";
import mahesh from "../images/mahesh.svg";
import maheshCoindcx from "../images/maheshCoindcx.svg";
import pareekshit from "../images/pareekshit.svg";
import pareekshitSmall from "../images/pareekshitSmall.svg";
import rajat from "../images/rajat.svg";
import rajatSmall from "../images/rajatSmall.svg";
import rishav from "../images/rishav.svg";
import rishavSmall from "../images/rishavSmall.svg";
import sarthak from "../images/sarthak.svg";
import sarthakSmall from "../images/sarthakSmall.svg";
import swapnil from "../images/swapnil.svg";
import swapnilSmall from "../images/swapnilSmall.svg";
import vaibhav from "../images/vaibhav.svg";
import vaibhavSmall from "../images/vaibhavSmall.svg";
import Marquee from "./Marquee";

const Testimonials = () => {
	const data = [
		{
			img: nikImg,
			profImg: nikunj,
			name: "Nikunj Jain",
			des: "Forbes 30u30",
		},
		{
			img: amiteshSmall,
			profImg: amitesh,
			name: "AMitesh Sinha",
			des: "Partner SIMA Funds",
		},
		{
			img: dipakSmall,
			profImg: dipak,
			name: "Dipak Biswal",
			des: "VP - Aakash Education",
		},
		{
			img: girishSmall,
			profImg: girish,
			name: "Girish Deshpande",
			des: "VP-Invasystem",
		},
		{
			img: kunwarSmall,
			profImg: kunwar,
			name: "Kunwar Raj Singh",
			des: "Creator || Unfinance",
		},
		{
			img: kushalSmall,
			profImg: kushal,
			name: "Kushal Agrawal",
			des: "Founder XOXODay",
		},
		{
			img: maheshCoindcx,
			profImg: mahesh,
			name: "Mahesh Bariya",
			des: "Ex-CFO CoinDCX",
		},
		{
			img: pareekshitSmall,
			profImg: pareekshit,
			name: "Pareekshit S.",
			des: "Customer Experience - CoinDCX",
		},
		{
			img: rajatSmall,
			profImg: rajat,
			name: "Rajat Gupta",
			des: "Tech Lead - CoinDCX",
		},
		{
			img: rishavSmall,
			profImg: rishav,
			name: "Rishav Aggarwal",
			des: "Founder Picxele",
		},
		{
			img: sarthakSmall,
			profImg: sarthak,
			name: "Sarthak Goel",
			des: "Founder InVoid (YC)",
		},
		{
			img: swapnilSmall,
			profImg: swapnil,
			name: "Swapnil Garg",
			des: "Director-Healthify",
		},
		{
			img: vaibhavSmall,
			profImg: vaibhav,
			name: "Vaibhav Jalan",
			des: "Forbes 30u30",
		},
	];

	return (
		<div className='bg-gradient-to-r from-grad-b to-testimonial-lb w-full mx-auto pb-10 w-11/12 mx-auto'>
			<div className='w-5/6 mx-auto pt-16'>
				<h1 className='text-center text-white text-2xl lg:text-3xl font-bold'>
					Trusted & backed by
				</h1>
				<p className='text-center mt-1 lg:text-lg text-testimonial-p'>
					{" "}
					Collaboration with highly reputed Investors in the market{" "}
				</p>
				<Marquee data={data} />
			</div>
		</div>
	);
};

export default Testimonials;
