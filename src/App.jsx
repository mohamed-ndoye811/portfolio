import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Contacts, Home, Works, WorksDetails } from "./pages";
// import "./App.scss";

export function App() {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/works' element={<Works />} />
				<Route path='/contacts' element={<Contacts />} />
			</Routes>
			<Footer></Footer>
		</>
	);
}
