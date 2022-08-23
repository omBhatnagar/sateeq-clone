import Deals from "../components/Deals";
import HomeHero from "../components/HomeHero";
import Layout from "../components/shared/Layout";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
	return (
		<Layout>
			<HomeHero />
			<Testimonials />
			<Deals />
		</Layout>
	);
};

export default HomePage;
