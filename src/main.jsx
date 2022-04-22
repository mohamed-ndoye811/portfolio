import { PageAnimationFrame } from "@mohamed_ndoye/react-fpca";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<PageAnimationFrame>
				<App />
			</PageAnimationFrame>
		</BrowserRouter>
	</React.StrictMode>
);
