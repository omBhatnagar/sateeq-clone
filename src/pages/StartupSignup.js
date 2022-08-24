import StartupForm from "../components/StartupForm";
import StartupHero from "../components/StartupHero";

const { default: Layout } = require("../components/shared/Layout");

const StartupSignup = () => {
	return (
		<Layout>
			<StartupHero />
			<StartupForm />
		</Layout>
	);
};

export default StartupSignup;
