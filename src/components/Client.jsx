import { NavigationLink } from "@mohamed_ndoye/react-fpca";
import gsap, { Power4 } from "gsap";
import React, { useEffect } from "react";

export default function Client({ client }) {
	useEffect(() => {
		gsap.timeline().fromTo(
			".client-link",
			{
				y: 75,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				stagger: 0.1,
				duration: 1.2,
				ease: Power4.easeOut,
			}
		);
	}, []);

	return (
		<NavigationLink linkClass='client-link' to={`/works/${client.slug}`}>
			{client.client}
		</NavigationLink>
	);
}
