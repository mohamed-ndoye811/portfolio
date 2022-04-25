import gsap, { Power4 } from "gsap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components";

export default function Menu({ display, toggle }) {
	useEffect(() => {
		console.log(display);
		if (display) {
			gsap.to(".menu", {
				"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				ease: Power4.easeInOut,
				duration: 0.8,
			});

			gsap.fromTo(
				"li",
				{ y: 75, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					stagger: 0.1,
					ease: Power4.easeOut,
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
						<Link to='/' className='navLink' onClick={toggle}>
							Home
						</Link>
					</li>
					<li>
						<Link to='/works' className='navLink' onClick={toggle}>
							Works
						</Link>
					</li>
					<li>
						<Link to='/contacts' className='navLink' onClick={toggle}>
							Contacts
						</Link>
					</li>
					<li className='socials'>
						<Icon name='h' />
						<Icon name='h' />
						<Icon name='h' />
						<Icon name='h' />
					</li>
				</ul>
			</nav>
		</div>
	);
}
