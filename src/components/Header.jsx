import { NavigationLink } from "react-fpca";

function Header() {
	return (
		<header>
			<ul>
				<li>
					<NavigationLink to='/'>Home</NavigationLink>
				</li>
				<li>
					<NavigationLink to='/about'>About</NavigationLink>
				</li>
			</ul>
		</header>
	);
}

export default Header;
