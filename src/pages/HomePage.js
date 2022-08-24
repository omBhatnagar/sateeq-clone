import Cta from "../components/Cta";
import Deals from "../components/Deals";
import Faqs from "../components/Faqs";
import HomeHero from "../components/HomeHero";
import Invested from "../components/Invested";
import Media from "../components/Media";
import Layout from "../components/shared/Layout";
import Testimonials from "../components/Testimonials";
import home2 from "../images/home2.svg";

const HomePage = () => {
	return (
		<Layout isHome={true}>
			<HomeHero
				line1='Invest in'
				line2='Highly-Vetted'
				line3='Startups'
				desc='Access Startups opportunities & start Investment journey with amount
					as small as ₹5000.'
				btnColor='bg-nav-blue'
				btnDesc='Invest Now'
				isLogin={true}
				img={home2}
				url='signup'
			/>
			<Testimonials />
			<Deals limited={6} isHeading={true} />
			<Media />
			<Invested />
			<Faqs />
			<Cta />
		</Layout>
	);
};

export default HomePage;
