import React from "react";
import { Link } from "react-router-dom";
import CaretRight from "../../assets/icons/CaretRight";

const SideNav = () => {
	return (
		<div className="side-nav">
			<ul>
				<li className="woman-fashion-link">
					<Link>Woman’s Fashion</Link>
					<CaretRight />
				</li>
				<li className="men-fashion-link">
					<Link>Men’s Fashion</Link>
					<CaretRight />
				</li>
				<li>
					<Link>Electronics</Link>
				</li>
				<li>
					<Link>Home & Lifestyle</Link>
				</li>
				<li>
					<Link>Medicine</Link>
				</li>
				<li>
					<Link>Sports & Outdoor</Link>
				</li>
				<li>
					<Link>Baby’s & Toys</Link>
				</li>
				<li>
					<Link>Groceries & Pets</Link>
				</li>
				<li>
					<Link>Health & Beauty</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideNav;
