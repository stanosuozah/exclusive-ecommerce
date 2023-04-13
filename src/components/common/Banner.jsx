import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div className="banner" id="top">
			<p>
				Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
				{"  "}
				<span className="shop-now">
					{"  "}
					<Link>ShopNow</Link>
				</span>
			</p>
			<select>
				<option value="English">English</option>
			</select>
		</div>
	);
};

export default Banner;
