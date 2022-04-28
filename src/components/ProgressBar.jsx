import gsap, { Power4 } from "gsap";
import React, { useEffect } from "react";

export default function ProgressBar({ title, value }) {
	useEffect(() => {
		gsap.timeline().to(".bar span", {
			width: `${value}%`,
			delay: 0.4,
			duration: 1.2,
			ease: Power4.easeOut,
		});
	}, []);

	return (
		<div className='progress-bar'>
			<div className='title'>{title}</div>
			<div className='bar'>
				<span></span>
			</div>
			<div className='value'>{value.toString().padStart(3, "0")}%</div>
		</div>
	);
}
