import React from "react";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
	return (
		<main id='home'>
			<div className='text-content'>
				<section>
					<h2>WHO AM I?</h2>
					<p>
						Hi again, as you already know my name is Mohamed Ndoye ( usually
						called Momo ). I am currently a 21 years old passionate junior
						front-end web developer. Outside of my working hours, I have two
						main hobbies. Well, the first one which is learning new stuff and
						browsing awwward winning websites shouldn’t count as a hobby... but
						since I like to do it, I count it as one. The second is music, I’m a
						super big fan of music ( still very picky to be honest ) so when I’m
						not designing or coding i take a few hours making beats
						(instrumentals) on FL Studio
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
