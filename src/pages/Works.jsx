import { NavigationLink } from "@mohamed_ndoye/react-fpca";
import React from "react";

export default function Works() {
	return (
		<main id='works'>
			<div className='clients-list'>
				<NavigationLink linkClass='client-link' to='#'>
					client
				</NavigationLink>
				<NavigationLink linkClass='client-link' to='#'>
					client
				</NavigationLink>
				<NavigationLink linkClass='client-link' to='#'>
					client
				</NavigationLink>
			</div>
		</main>
	);
}
