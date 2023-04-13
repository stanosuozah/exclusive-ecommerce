import React from "react";

const ProductDetailsQuantity = ({ quantity }) => {
	return (
		<div className="product-details-quantity-box">
			<p>-</p>
			<input
				type="text"
				className="product-quantity-input"
				placeholder={quantity}
			/>
			<p>+</p>
		</div>
	);
};

export default ProductDetailsQuantity;
