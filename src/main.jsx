import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PageAnimationFrame } from "@mohamed_ndoye/react-fpca";

import "./assets/scss/index.scss";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("app")).render(
	<React.StrictMode>
		<BrowserRouter>
			<PageAnimationFrame>
				<App />
			</PageAnimationFrame>
		</BrowserRouter>
	</React.StrictMode>
);
