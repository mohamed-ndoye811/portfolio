import { NavigationLink } from "@mohamed_ndoye/react-fpca";
import gsap, { Power4 } from "gsap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components";
import { socials } from "../data/socials";

export default function Menu({ display, toggle }) {
	useEffect(() => {
		if (display) {
			gsap.to(".menu", {
				"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				ease: Power4.easeInOut,
				duration: 0.8,
			});

			gsap.fromTo(
				"li",
				{ y: 75, opacity: 0, skewY: 10 },
				{
					y: 0,
					opacity: 1,
					stagger: 0.1,
					ease: Power4.easeOut,
					skewY: 0,
					duration: 1.2,
					delay: 0.5,
				}
			);
		} else {
			gsap.to(".menu", {
				"clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
				ease: Power4.easeInOut,
				duration: 0.8,
			});
		}
	}, [display]);

	return (
		<div className='menu'>
			<div className='background'></div>
			<nav>
				<ul>
					<li>
						<NavigationLink to='/' className='navLink' click={toggle}>
							Home
						</NavigationLink>
					</li>
					<li>
						<NavigationLink to='/works' className='navLink' click={toggle}>
							Works
						</NavigationLink>
					</li>
					<li>
						<NavigationLink to='/contacts' className='navLink' click={toggle}>
							Contacts
						</NavigationLink>
					</li>
					<li className='socials'>
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
					</li>
				</ul>
			</nav>
		</div>
	);
}
