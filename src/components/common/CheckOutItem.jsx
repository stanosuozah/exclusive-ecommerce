import React from "react";

const CheckOutItem = ({ image, name, totalPrice }) => {
	return (
		<div className="checkout-item">
			<div className="checkout-product-name">
				<img src={image} alt={name} />
				<p>{name}</p>
			</div>
			<p>${totalPrice}</p>
		</div>
	);
};

export default CheckOutItem;
