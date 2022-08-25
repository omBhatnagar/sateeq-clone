import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Invest from "./pages/Invest";
import { ChakraProvider } from "@chakra-ui/react";
import Raise from "./pages/Raise";
import { MantineProvider } from "@mantine/core";
import StartupSignup from "./pages/StartupSignup";
import Signup from "./pages/Signup";

function App() {
	return (
		<ChakraProvider>
			<MantineProvider withGlobalStyles withNormalizeCSS>
				<Router>
					<Routes>
						<Route path='/' element={<HomePage />}></Route>
						<Route path='/invest' element={<Invest />}></Route>
						<Route path='/raise' element={<Raise />}></Route>
						<Route path='/signup' element={<Signup />}></Route>
						<Route path='/startupsignup' element={<StartupSignup />}></Route>
					</Routes>
				</Router>
			</MantineProvider>
		</ChakraProvider>
	);
}

export default App;
