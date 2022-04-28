import gsap, { Power4 } from "gsap";
import React from "react";

import { usePageAnimations } from "@mohamed_ndoye/react-fpca";
import { Icon } from "../components";
import { socials } from "../data/socials";

export default function Contacts() {
	gsap.defaults({
		stagger: 0.05,
		duration: 1.2,
	});

	function enterAnimation() {
		return gsap
			.timeline()
			.to("#contacts .text-content > *:not(.socials)", {
				y: 0,
				opacity: 1,
				ease: Power4.easeOut,
			})
			.to(
				"#contacts .text-content .socials .social",
				{
					y: 0,
					opacity: 1,
					ease: Power4.easeOut,
				},
				"<"
			);
	}

	function leaveAnimation() {
		return gsap
			.timeline()
			.to("#contacts .text-content > *:not(.socials)", {
				y: -75,
				opacity: 0,
				ease: Power4.easeInOut,
			})
			.to(
				"#contacts .text-content .socials .social",
				{
					y: -75,
					opacity: 0,
					ease: Power4.easeInOut,
				},
				"<"
			);
	}

	usePageAnimations(enterAnimation, leaveAnimation);

	return (
		<main id='contacts'>
			<div className='text-content'>
				<h2 className='wide'>chat with me!</h2>
				<p>
					You either made it to the end of the website, or just want to contact.
					Hopefully you enjoyed (or will enjoy) the webite, if you want to see
					more of my works have a look on my gihub. And if you want to work
					contact me on one of my socials. See ya!
				</p>
				<div className='socials'>
					{socials.map((social, index) => {
						return (
							<a
								href={social.link}
								target='_blank'
								rel='noopener noreferrer'
								className='social'
								key={index}>
								<Icon name={social.name} />
							</a>
						);
					})}
				</div>
			</div>
		</main>
	);
}
