import React from "react";
import LikeIcon from "../../assets/icons/LikeIcon";
import SeenIcon from "../../assets/icons/SeenIcon";

const ProductCard = ({
	onClick,
	discount,
	image,
	name,
	price,
	discountPrice,
	review,
	Rating,
	Colors,
	onAddToCartButtonClick,
}) => {
	return (
		<div className="product-card">
			<div className="product-image-container">
				<div className="product-visual">
					{discount && (
						<p
							className={`discount ${
								discount === "NEW" ? " bg-green " : " bg-red"
							}`}
						>
							{discount === "NEW" ? " " : "-"}
							{discount}
							{discount === "NEW" ? " " : "%"}
						</p>
					)}
					<img
						onClick={onClick}
						className="product-image"
						height={152}
						width={172}
						src={image}
						alt={name}
					/>
					<div className="like-seen">
						<span className="like-icon">
							<LikeIcon />
						</span>
						<span className="seen-icon" onClick={onClick}>
							<SeenIcon />
						</span>
					</div>
				</div>
				<button className="add-to-cart-btn" onClick={onAddToCartButtonClick}>
					Add To Cart
				</button>
			</div>
			<div className="product-details-container">
				<h1>{name}</h1>
				<div className="price-section">
					<h1>${price}</h1>
					{discountPrice && <h1>${discountPrice}</h1>}
				</div>
				<div className="rating-section">
					{Rating}
					<p>({review})</p>
				</div>
				<div className="product-color">{Colors}</div>
			</div>
		</div>
	);
};

export default ProductCard;
