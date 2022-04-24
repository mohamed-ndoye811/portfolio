import React from "react";
import Header from "./components/Header";

import { Contacts, Home, Works, WorksDetails } from "./pages";
// import "./App.scss";

export function App() {
	return (
		<>
			<Header></Header>
			<WorksDetails></WorksDetails>
		</>
	);
}
