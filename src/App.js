import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Invest from "./pages/Invest";
import Raise from "./pages/Raise";
import { MantineProvider } from "@mantine/core";
import StartupSignup from "./pages/StartupSignup";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage />}></Route>
					<Route path='/invest' element={<Invest />}></Route>
					<Route path='/raise' element={<Raise />}></Route>
					<Route path='/signup' element={<Signup />}></Route>
					<Route path='/startupsignup' element={<StartupSignup />}></Route>
					<Route path='/*' element={<NotFound />}></Route>
				</Routes>
			</Router>
		</MantineProvider>
	);
}

export default App;
