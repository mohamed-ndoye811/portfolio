import gsap from "gsap";

// Component imports
import { usePageAnimations } from "react-fpca";

function About() {
	// Animations functions
	function enterAnimation() {
		gsap.fromTo(
			".text",
			{
				skewY: 10,
				y: 75,
			},
			{
				skewY: 0,
				y: 0,
			}
		);
	}

	function leaveAnimation() {
		return gsap.to(".text", {
			skewY: 10,
			y: -75,
		});
	}

	usePageAnimations(enterAnimation, leaveAnimation);

	return (
		<div className='lineMask' style={{ overflow: "hidden" }}>
			<div className='text'>About</div>
		</div>
	);
}

export default About;
