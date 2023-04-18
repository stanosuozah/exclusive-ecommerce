import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const MenuDropdown = () => {
	const { getUser } = useContext(AppContext);
	const user = getUser?.name;

	return (
		<>
			<div className="mobile-menu-dropdown">
				<ul>
					<Link to={"/contact"} className="mobile-menu-link">
						<li>Contact</li>
					</Link>
					<Link to={"/aboutus"} className="mobile-menu-link">
						<li>About</li>
					</Link>
					{!user && (
						<Link to={"/signup"}>
							<li>Sign Up</li>
						</Link>
					)}
					{!user && (
						<Link to={"/login"} className="mobile-menu-link">
							<li>Login</li>
						</Link>
					)}
					{user && (
						<Link className="mobile-menu-link">
							<li>Logout</li>
						</Link>
					)}
				</ul>
			</div>
		</>
	);
};

export default MenuDropdown;
