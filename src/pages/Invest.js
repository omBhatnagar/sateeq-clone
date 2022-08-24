import Deals from "../components/Deals";
import InvestHero from "../components/InvestHero";
import Layout from "../components/shared/Layout";

const Invest = () => {
	return (
		<Layout>
			<InvestHero />
			<Deals isHeading={false} />
		</Layout>
	);
};

export default Invest;
