import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='about' element={<About />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
