import React, { useEffect, useState } from "react";
import HomeInnerNav from "../../components/common/HomeInnerNav";
import TitleCat from "../../components/common/TitleCat";
import ProductCard from "../../components/common/ProductCard";
import Gucci from "/Gucci.png";
import RGB from "/RGB.png";
import SmallBookShelf from "/SmallBookShelf.png";
import TheNorthCoat from "/TheNorthCoat.png";
import RatingIcon from "../../assets/icons/RatingIcon";

import SizeBox from "../../components/common/SizeBox";
import ProductDetailsQuantity from "../../components/common/ProductDetailsQuantity";

import ViewButton from "../../components/common/ViewButton";
import FreeDeliveryIcon from "../../assets/icons/FreeDeliveryIcon";
import ReturnDeliveryIcon from "../../assets/icons/ReturnDeliveryIcon";
import Heart from "../../assets/icons/Heart";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
	const [product, setProduct] = useState({});
	const [loader, setLoader] = useState(false);
	const { id } = useParams(); //
	// useEffect(() => {
	// 	setProduct(JSON.parse(localStorage.getItem("product")));
	// }, []);
	const handleProductPage = (id) => {
		setLoader(true);
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((response) => response.json())
			.then((data) => setProduct(data))
			.catch((error) => console.log(error));
		setLoader(false);
	};

	useEffect(() => {
		handleProductPage(id);
	});
	return (
		<div>
			<div className="product-details-section">
				<HomeInnerNav page="Havic HV" />
				<div className="product-details-content">
					<div className="product-details-images">
						<div className="product-details-image">
							<img src={product.image} alt="game pad" />
						</div>
						<div className="product-details-image">
							{" "}
							<img src={product.image} alt="game pad" />
						</div>
						<div className="product-details-image">
							{" "}
							<img src={product.image} alt="game pad" />
						</div>
						<div className="product-details-image">
							{" "}
							<img src={product.image} alt="game pad" />
						</div>
					</div>
					<div className="main-product-image">
						<img src={product.image} alt="game pad" />
					</div>
					<div className="product-details-description">
						<h1>{product.title}</h1>
						<div className="review-stock">
							<div className="rating">
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
							</div>
							<p className="reviews">({product.review})</p>
							<span>|</span>
							<p className="stock">{product.stock}</p>
						</div>
						<h1>${product.price}</h1>
						<p>{product.description}</p>
						<hr />
						<div className="colour">
							<p>Colours:</p>
							<input type="radio" />
							<input type="radio" />
						</div>
						<div className="size">
							<p>Size:</p>
							<SizeBox size="XS" />
							<SizeBox size="S" />
							<SizeBox size="M" />
							<SizeBox size="L" />
							<SizeBox size="XL" />
						</div>
						<div className="quantity-buy">
							<ProductDetailsQuantity quantity="1" />
							<ViewButton name="Buy Now" />
							<div className="product-details-like">
								<Heart />
							</div>
						</div>
						<div className="delivery-section">
							<div className="free-delivery">
								<div className="free-icon">
									<FreeDeliveryIcon />
								</div>

								<div className="free-delivery-description">
									<h1>Free Delivery</h1>
									<p>Enter your postal code for Delivery Availability</p>
								</div>
							</div>
							<div className="return-delivery">
								<div className="return-icon">
									<ReturnDeliveryIcon />
								</div>

								<div className="return-delivery-description">
									<h1>Return Delivery</h1>
									<p>
										Free 30 Days Delivery Returns.<span>Details</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="related-items">
				<TitleCat title="Related Item" />
				<div className="related-items-products">
					<ProductCard
						name="The north coat"
						image={Gucci}
						price="260"
						discountPrice="360"
						review="65"
						Rating={
							<div>
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
							</div>
						}
					/>
					<ProductCard
						image={Gucci}
						name="Gucci duffle bag"
						price="960"
						discountPrice="1160"
						review="65"
						Rating={
							<div>
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
							</div>
						}
					/>
					<ProductCard
						image={RGB}
						name="RGB liquid CPU Cooler"
						price="160"
						discountPrice="170"
						review="65"
						Rating={
							<div>
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
							</div>
						}
					/>
					<ProductCard
						image={SmallBookShelf}
						name="Small BookSelf "
						price="360"
						review="65"
						Rating={
							<div>
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
								<RatingIcon />
							</div>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
