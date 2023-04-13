import React from "react";
import { Link } from "react-router-dom";

const HomeInnerNav = ({ page }) => {
	return (
		<label className="home-inner-nav">
			<span>Home /</span>

			<Link style={{ textDecoration: "none", color: "black" }}>{page}</Link>
		</label>
	);
};

export default HomeInnerNav;
