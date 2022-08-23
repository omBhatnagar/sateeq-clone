import Deals from "../components/Deals";
import HomeHero from "../components/HomeHero";
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
		</Layout>
	);
};

export default HomePage;
