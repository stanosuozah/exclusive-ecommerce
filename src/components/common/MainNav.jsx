import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../assets/icons/Cart";
import Heart from "../../assets/icons/Heart";
import MagnifyingGlass from "../../assets/icons/MagnifyingGlass";
import AccountIcon from "../../assets/icons/AccountIcon";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const MainNav = ({ display, setDisplay }) => {
	const { cartItem, getUser } = useContext(AppContext);

	//SEARCH
	const [query, setQuery] = useState("");
	const navigate = useNavigate();
	const handleProfileDropdown = () => {};

	//Search function
	const handleSearch = () => {
		navigate(`/search?q=${query}`);
	};
	return (
		<div className="main-nav">
			<Link style={{ textDecoration: "none" }} to="/" className="main-logo">
				Exclusive
			</Link>
			<div className="top-menu-link">
				<Link to="/">Home</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/aboutus">About</Link>
				{!getUser && <Link to="/signup">Sign Up</Link>}
			</div>
			<div className="search-heart-cart">
				<label className="search-box">
					<input
						type="search"
						placeholder="what are you looking for?"
						onChange={(e) => {
							e.preventDefault();

							setQuery(e.target.value);
						}}
						value={query}
					/>
					<MagnifyingGlass
						className="mangnifying-glass"
						onClick={() => handleSearch()}
					/>
				</label>
				<Heart />
				<div className="cart-div">
					<span className="cart-item-quantity">{cartItem?.length || 0}</span>
					<Cart onClick={() => navigate("/cart")} />
				</div>
				{/* usesetDisplay to toggle display */}
				{getUser && <AccountIcon onClick={() => setDisplay(!display)} />}
			</div>
		</div>
	);
};

export default MainNav;
