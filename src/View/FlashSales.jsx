import React, { useEffect, useState, useRef, useContext } from "react";
import RatingIcon from "../assets/icons/RatingIcon";
import ProductCard from "../components/common/ProductCard";
import TitleCat from "../components/common/TitleCat";
import productImage from "../assets/images/gamepad.png";
import BackArrowProduct from "../assets/icons/BackArrowProduct";
import ForwardArrowProduct from "../assets/icons/ForwardArrowProduct";
import ViewButton from "../components/common/ViewButton";
import RatingIconEmpty from "../assets/icons/RatingIconEmpty";
import RatingIconHalf from "../assets/icons/RatingIconHalf";
import CountDownTimer from "../components/common/CountDownTimer";
import { useNavigate, useNavigation, useOutletContext } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loader from "../components/common/Loader";

const FlashSales = () => {
	const { handleAddToCart } = useContext(AppContext);
	const [cartItem, setCartItem] = useOutletContext();
	const [products, setProducts] = useState([]);
	// SCROLL LEFT RIGHT BUTTONS
	const [scrollX, setScrollX] = useState(0);
	const [scrollEnd, setScrollEnd] = useState(false);
	const newScroll = useRef();

	const navigate = useNavigate();
	// const cartItems = localStorage.getItem("cartItems")
	// 	? JSON.parse(localStorage.getItem("cartItems"))
	// 	: [];

	//Checking if product is already added to Cart and increement if YES

	const scrollCheck = () => {
		setScrollX(newScroll.current.scrollLeft);
		if (
			Math.floor(
				newScroll.current.scrollWidth - newScroll.current.scrollLeft
			) <= newScroll.current.offSetWidth
		) {
			setScrollEnd(false);
		} else {
			setScrollEnd(true);
		}
	};
	const handleSlide = (shift) => {
		newScroll.current.scrollLeft += shift;
		if (
			Math.floor(
				newScroll.current.scrollWidth - newScroll.current.scrollLeft
			) <= newScroll.current.offSetWidth
		) {
			setScrollEnd(false);
		} else {
			setScrollEnd(true);
		}
	};

	//Product description

	useEffect(() => {
		if (
			newScroll.current &&
			newScroll.current.scrollWidth === newScroll.current.offSetWidth
		) {
			setScrollEnd(true);
		} else {
			setScrollEnd(false);
		}
	}, []);

	useEffect(() => {
		// Fetching response from API
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);
	// console.log(products);
	return (
		<section className="flash-sales">
			<TitleCat title="Today's" />
			<div className="flash-sale-section">
				<div className="flash-sale-countdown">
					<h1>Flash Sales</h1>
					<CountDownTimer duration={5 * 24 * 60 * 60 * 1000} />
				</div>
				{/* ARROW NAVIGATION */}
				<div className="flash-sales-navigation">
					<BackArrowProduct onClick={() => handleSlide(-500)} />
					<ForwardArrowProduct onClick={() => handleSlide(+500)} />
				</div>
			</div>
			{/* PRODUCT LISTING SECTION */}
			<div
				className="flashsales-product-section"
				onScroll={scrollCheck}
				ref={newScroll}
			>
				{products.map((product) => (
					<ProductCard
						onClick={() => navigate(`/productdetails/${product.id}`)}
						onAddToCartButtonClick={() => handleAddToCart(product)}
						key={product.title}
						discount="10"
						name={product.title}
						price={product.price}
						discountPrice={(product.price * 0.1).toFixed(2)}
						review={product.rating.count}
						image={product.image}
						Rating={
							<div style={{ display: "flex" }}>
								{[1, 2, 3, 4, 5].map((rating) => (
									<div key={rating + "rating"}>
										{product.rating.rate >= rating &&
										product.rating.rate >= rating + 0.5 ? (
											<RatingIcon />
										) : product.rating.rate >= rating &&
										  product.rating.rate <= rating + 1 ? (
											<RatingIconHalf />
										) : (
											<RatingIconEmpty />
										)}
									</div>
								))}
							</div>
						}
					/>
				))}
			</div>
			<div className="view-btn-section">
				<div className="flash-sale-btn-wrapper">
					<ViewButton name="View All Products" />
				</div>
			</div>
		</section>
	);
};

export default FlashSales;
