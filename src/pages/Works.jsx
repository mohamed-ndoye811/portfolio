import { NavigationLink, usePageAnimations } from "@mohamed_ndoye/react-fpca";
import gsap, { Power4 } from "gsap";
import React from "react";

export default function Works() {
	gsap.defaults({
		stagger: 0.1,
		duration: 1.2,
	});
	function enterAnimation() {
		return gsap.fromTo(
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
	}

	function leaveAnimation() {
		return gsap.to(".client-link", {
			y: -75,
			opacity: 0,
			stagger: 0.1,
			duration: 1.2,
			ease: Power4.easeInOut,
		});
	}

	usePageAnimations(enterAnimation, leaveAnimation);

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
