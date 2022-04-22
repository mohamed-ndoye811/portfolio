import gsap from "gsap";

import { usePageAnimations } from "react-fpca";

function Home() {
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
			<div className='text'>Home</div>
		</div>
	);
}

export default Home;
