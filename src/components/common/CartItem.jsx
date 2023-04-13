import React from "react";
import ProductQuantity from "./ProductQuantity";
import RemoveItemIcon from "../../assets/icons/RemoveItemIcon";

const CartItem = ({
	image,
	name,
	price,
	quantity,
	totalPrice,
	onClickRemoveIcon,
	onClickIncreement,
	onClickDecreement,
}) => {
	return (
		<div className="cart-item">
			<div className="cart-product-name">
				<RemoveItemIcon onClick={onClickRemoveIcon} />
				<img src={image} alt={name} />
				<p>{name}</p>
			</div>
			<p>${price}</p>
			<div>
				<ProductQuantity
					quantity={quantity}
					onClickIncreement={onClickIncreement}
					onClickDecreement={onClickDecreement}
				/>
			</div>
			<p>${totalPrice}</p>
		</div>
	);
};

export default CartItem;
