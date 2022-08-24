import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Invest from "./pages/Invest";
import { ChakraProvider } from "@chakra-ui/react";
import Raise from "./pages/Raise";

function App() {
	return (
		<ChakraProvider>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage />}></Route>
					<Route path='/invest' element={<Invest />}></Route>
					<Route path='/raise' element={<Raise />}></Route>
				</Routes>
			</Router>
		</ChakraProvider>
	);
}

export default App;
