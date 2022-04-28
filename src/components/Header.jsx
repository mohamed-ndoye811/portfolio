import { NavigationLink } from "@mohamed_ndoye/react-fpca";
import React, { useState } from "react";
import Menu from "../containers/Menu";
import useGetDevice from "../hooks/useGetDevice";

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

				<nav>
					<ul>
						<li>
							<NavigationLink to='/' className='navLink'>
								Home
							</NavigationLink>
						</li>
						<li>
							<NavigationLink to='/works' className='navLink'>
								Works
							</NavigationLink>
						</li>
						<li>
							<NavigationLink to='/contacts' className='navLink'>
								Contacts
							</NavigationLink>
						</li>
					</ul>
				</nav>
			</header>

			{useGetDevice() != "desktop" && (
				<Menu display={displayMenu} toggle={toggleMenu} />
			)}
		</>
	);
}
