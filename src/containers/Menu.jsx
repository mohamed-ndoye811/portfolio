import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components";

export default function Menu({ display, toggle }) {
	return (
		display && (
			<div className='menu'>
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
		)
	);
}
