import React from "react";
import { Icon } from "../components";

export default function WorkDetails() {
	return (
		<main id='work-details'>
			<div className='thumbnail'></div>

			<div className='text-content'>
				<h2>Heading 2</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis
					dictum molestie. Fusce posuere leo suscipit lacus porta finibus. Proin
					eget sodales odio, nec accumsan lacus. Nullam vitae nibh ac magna
					semper dictum vel sit amet odio. Suspendisse rhoncus pellentesque
					interdum. Cras euismod, neque et congue rutrum, nibh metus rutrum est,
					ac efficitur diam diam vitae felis. Nullam suscipit sagittis maximus.
					Vestibulum auctor risus tristique libero vestibulum facilisis quis
					pellentesque neque.
				</p>
			</div>

			<div className='tech-stack'>
				<Icon name='h'></Icon>
				<Icon name='h'></Icon>
				<Icon name='h'></Icon>
				<Icon name='h'></Icon>
			</div>
		</main>
	);
}
