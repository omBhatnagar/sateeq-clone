import Cta from "../components/Cta";
import Deals from "../components/Deals";
import Faqs from "../components/Faqs";
import HomeHero from "../components/HomeHero";
import Invested from "../components/Invested";
import Media from "../components/Media";
import Layout from "../components/shared/Layout";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
	return (
		<Layout>
			<HomeHero />
			<Testimonials />
			<Deals />
			<Media />
			<Invested />
			<Faqs />
			<Cta />
		</Layout>
	);
};

export default HomePage;
