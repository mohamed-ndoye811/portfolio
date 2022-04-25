import gsap, { Power4 } from "gsap";
import React from "react";

import { usePageAnimations } from "@mohamed_ndoye/react-fpca";

export default function Contacts() {
	gsap.defaults({
		stagger: 0.05,
		duration: 1.2,
	});

	function enterAnimation() {
		return gsap.fromTo(
			"#contacts > *",
			{
				y: 75,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				ease: Power4.easeOut,
			}
		);
	}

	function leaveAnimation() {
		return gsap.to("#contacts > *", {
			y: -75,
			opacity: 0,
			ease: Power4.easeInOut,
		});
	}

	usePageAnimations(enterAnimation, leaveAnimation);

	return (
		<main id='contacts'>
			<h2 className='wide'>chat with me!</h2>
			<p>
				You either made it to the end of the website, or just want to contact.
				Hopefully you enjoyed (or will enjoy) the webite, if you want to see
				more of my works have a look on my gihub. And if you want to work
				contact me on one of my socials. See ya!
			</p>
			<div className='socials'></div>
		</main>
	);
}
