import React from "react";
import IncrementIcon from "../../assets/icons/IncrementIcon";
import DecrementIcon from "../../assets/icons/DecrementIcon";

const ProductQuantity = ({
	quantity,
	onClickIncreement,
	onClickDecreement,
}) => {
	return (
		<div className="product-quantity-box">
			<p>{quantity}</p>
			<IncrementIcon onClick={onClickIncreement} />
			<DecrementIcon onClick={onClickDecreement} />
		</div>
	);
};

export default ProductQuantity;
