import React from "react";

const CartTotal = () => {
	return (
		<div className="c-total">
			{" "}
			<div className="subtotal">
				<p>Subtotal:</p>
				<p>$1750</p>
			</div>
			<div className="shipping">
				<p>Shipping:</p>
				<p>Free</p>
			</div>
			<div className="total">
				<p>Total:</p>
				<p>$1750</p>
			</div>
		</div>
	);
};

export default CartTotal;
