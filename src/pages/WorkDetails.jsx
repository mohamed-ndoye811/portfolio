import { usePageAnimations } from "@mohamed_ndoye/react-fpca";
import request from "graphql-request";
import gsap, { Power4 } from "gsap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "../components";

export default function WorkDetails() {
	function enterAnimation() {
		return gsap
			.timeline()
			.to(".thumbnail", {
				"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				duration: 1.2,
				ease: Power4.easeOut,
			})
			.to(
				[".text-content > *", ".tech-stack > *"],
				{
					y: 0,
					opacity: 1,
					stagger: 0.1,
					duration: 1.2,
					ease: Power4.easeOut,
				},
				"<"
			);
	}

	function leaveAnimation() {
		let animation = gsap.timeline();

		return animation
			.to([".text-content > *", ".tech-stack > *"], {
				y: -75,
				opacity: 0,
				stagger: 0.1,
				duration: 1.2,
				ease: Power4.easeInOut,
			})
			.to(
				".thumbnail",
				{
					"clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
					duration: 1.2,
					ease: Power4.easeInOut,
				},
				"<"
			);
	}

	const [selectedProject, setSelectedProject] = useState([]);
	const [loaded, setLoaded] = useState(false);

	let { slug } = useParams();

	usePageAnimations(enterAnimation, leaveAnimation, loaded, {
		asyncLoad: true,
	});

	useEffect(() => {
		request(
			"https://api-eu-central-1.graphcms.com/v2/cl12fv9xo7ow001z1htwdgtf2/master",
			`
				{ 
					project(where: {slug: "${slug}"}) {
						client
						id
						slug
						shortDesc
						website
						techs
						thumbnail {
							url
						  }
					  }
				}
			  `
		).then(({ project }) => {
			setSelectedProject(project);
			setLoaded(true);
		});
	}, []);

	console.log(selectedProject);

	return (
		<main id='work-details'>
			<div className='thumbnail'>
				<img src={selectedProject?.thumbnail?.url} alt='' />
			</div>

			<div className='text-content'>
				<h2>{selectedProject.client}</h2>
				<p>{selectedProject.shortDesc}</p>
			</div>

			<div className='tech-stack'>
				<Icon name='github' />
				<Icon name='github' />
				<Icon name='github' />
				<Icon name='github' />
			</div>
		</main>
	);
}
