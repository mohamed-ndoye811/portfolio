import React, { useState } from "react";
import Menu from "../containers/Menu";

export default function Header() {
	const [displayMenu, setDisplayMenu] = useState(false);

	function toggleMenu() {
		setDisplayMenu(!displayMenu);
	}

	return (
		<>
			<header>
				<div className='logo' onClick={toggleMenu}>
					<img src='./src/assets/imgs/logo.svg' alt='' />
				</div>
			</header>
			<Menu display={displayMenu} toggle={toggleMenu} />
		</>
	);
}
