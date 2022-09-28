import { usePageAnimations } from "@mohamed_ndoye/react-fpca";
import gsap, { Power4 } from "gsap";
import React from "react";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
	gsap.defaults({
		stagger: 0.05,
		duration: 1.2,
	});

	const enterAnimationTimeline = gsap.timeline();
	const leaveAnimationTimeline = gsap.timeline();

	function enterAnimation() {
		return enterAnimationTimeline.fromTo(
			".text-content section > *",
			{
				y: 75,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				ease: Power4.easeOut,
			}
		).to(".logo-model > img", {
			y: 0,
			ease: Power4.easeOut,
			scale: 1,
			delay: .8,
			duration: 2.4,
			stagger: {
				each: .1,
				from: "end"
			}
		}, "<");
	}

	function leaveAnimation() {
		return leaveAnimationTimeline.to(".text-content section > *", {
			y: -75,
			opacity: 0,
			ease: Power4.easeInOut,
		}).to(".logo-model > img", {
			scale: 0,
			delay: .8,
			duration: 1.8,
			stagger: {
				each: .1
			},
			ease: Power4.easeInOut,
		}, "<");
	}

	usePageAnimations(enterAnimation, leaveAnimation);

	return (
		<main id='home'>
			<div className='logo-model'>
				<img src='src/assets/imgs/logo/m-three-d.png' alt='' />
				<img src='src/assets/imgs/logo/n-three-d.png' alt='' />
			</div>
			<div className='text-content'>
				<section>
					<h2>WHO AM I?</h2>
					<p>
						I am currently a 21 years old passionate junior front-end web
						developer. The second is music, I’m a super big fan of music ( still
						very picky to be honest ) so when I’m not designing or coding i take
						a few hours making beats (instrumentals) on FL Studio
					</p>
				</section>

				<section>
					<h2>MY STUDIES</h2>
					<div className='studies-list'>
						<div className='study'>
							<div className='year'>2021</div>
							<p className='title'>
								Professional designation in web & mobile development
							</p>
						</div>
					</div>
				</section>
				<section>
					<h2>TECH STACK</h2>
					<div className='stack-list'>
						<div className='tech'>
							<ProgressBar title='html' value={75} />
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
