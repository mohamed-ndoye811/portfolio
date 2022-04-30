import { NavigationLink, usePageAnimations } from "@mohamed_ndoye/react-fpca";
import request from "graphql-request";
import gsap, { Power4 } from "gsap";
import React, { useEffect, useState } from "react";
import Client from "../components/Client";

export default function Works() {
	gsap.defaults({
		stagger: 0.1,
		duration: 1.2,
	});

	function enterAnimation() {
		return gsap.timeline().to(
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

	const [clients, setClients] = useState([]);
	const [loaded, setLoaded] = useState(false);

	usePageAnimations(enterAnimation, leaveAnimation, loaded, {
		asyncLoad: true,
	});

	useEffect(() => {
		request(
			"https://api-eu-central-1.graphcms.com/v2/cl12fv9xo7ow001z1htwdgtf2/master",
			`
				{ 
					projects {
						id
						client
						slug
						thumbnail {
							url
						}
					}
				}
			  `
		).then(({ projects }) => {
			setClients(projects);
			setLoaded(true);
		});
	});

	return (
		<main id='works'>
			<div className='clients-list'>
				{clients.map((client, index) => {
					return <Client client={client} key={index} />;
				})}
			</div>
			<div className='thumbnail'></div>
		</main>
	);
}
