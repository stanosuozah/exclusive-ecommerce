import { React, useEffect, useState, useRef } from "react";
import ProductCard from "../components/common/ProductCard";
import carImage from "../assets/images/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png";
import RatingIcon from "../assets/icons/RatingIcon";
import TitleCat from "../components/common/TitleCat";
import BackArrowProduct from "../assets/icons/BackArrowProduct";
import ForwardArrowProduct from "../assets/icons/ForwardArrowProduct";
import RadioButton from "../components/common/RadioButton";
import ViewButton from "../components/common/ViewButton";
import RatingIconEmpty from "../assets/icons/RatingIconEmpty";
import RatingIconHalf from "../assets/icons/RatingIconHalf";
const OurProducts = () => {
	useEffect(() => {
		// Fetching response from API
		fetch("https://fakestoreapi.com/products?limit=8")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	const [products, setProducts] = useState([]);

	// // SCROLL LEFT RIGHT BUTTONS
	// const [scrollX, setScrollX] = useState(0);
	// const [scrollEnd, setScrollEnd] = useState(false);
	// const newScroll = useRef();

	// const scrollCheck = () => {
	// 	setScrollX(newScroll.current.scrollLeft);
	// 	if (
	// 		Math.floor(
	// 			newScroll.current.scrollWidth - newScroll.current.scrollLeft
	// 		) <= newScroll.current.offSetWidth
	// 	) {
	// 		setScrollEnd(false);
	// 	} else {
	// 		setScrollEnd(true);
	// 	}
	// };
	// const handleSlide = (shift) => {
	// 	newScroll.current.scrollLeft += shift;
	// 	if (
	// 		Math.floor(
	// 			newScroll.current.scrollWidth - newScroll.current.scrollLeft
	// 		) <= newScroll.current.offSetWidth
	// 	) {
	// 		setScrollEnd(false);
	// 	} else {
	// 		setScrollEnd(true);
	// 	}
	// };
	// useEffect(() => {
	// 	if (
	// 		newScroll.current &&
	// 		newScroll.current.scrollWidth === newScroll.current.offSetWidth
	// 	) {
	// 		setScrollEnd(true);
	// 	} else {
	// 		setScrollEnd(false);
	// 	}
	// }, []);

	return (
		<div className="our-product-section">
			<TitleCat title="Our Products" />
			<div className="cat-title-nav">
				<h1>Explore Our Products </h1>
				<div className="cat-nav">
					<BackArrowProduct />
					<ForwardArrowProduct />
				</div>
			</div>
			<div className="our-products-listing">
				{products.map((product) => (
					<ProductCard
						key={product.title}
						name={product.title}
						discount="NEW"
						price={product.price}
						review={product.rating.count}
						image={product.image}
						discountPrice={(product.price * 0.1).toFixed(2)}
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
		</div>
	);
};

export default OurProducts;
