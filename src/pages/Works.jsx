import { NavigationLink, usePageAnimations } from "@mohamed_ndoye/react-fpca";
import gsap, { Power4 } from "gsap";
import React from "react";

export default function Works() {
	gsap.defaults({
		stagger: 0.1,
		duration: 1.2,
	});
	function enterAnimation() {
		let animation = gsap.timeline();

		return animation
			.fromTo(
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
			)
			.to(
				".thumbnail",
				{
					"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					duration: 1.2,
					ease: Power4.easeOut,
				},
				"<"
			);
	}

	function leaveAnimation() {
		let animation = gsap.timeline();

		return animation
			.to(".client-link", {
				y: -75,
				opacity: 0,
				stagger: 0.1,
				duration: 1.2,
				ease: Power4.easeInOut,
			})
			.to(
				".thumbnail",
				{
					"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
					duration: 1.2,
					ease: Power4.easeInOut,
				},
				"<"
			);
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
			<div className='thumbnail'></div>
		</main>
	);
}
