import React, { useEffect, useState } from "react";
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
				<Route path='/'>
					<Route index element={<Home />} />
					<Route path='works'>
						<Route index element={<Works />}></Route>
						<Route path=':slug' element={<WorksDetails />} />
					</Route>
					<Route path='contacts' element={<Contacts />} />
				</Route>
			</Routes>
			<Footer></Footer>
		</>
	);
}
