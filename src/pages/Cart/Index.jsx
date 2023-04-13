import React, { useContext } from "react";
import Header from "../../components/layout/Header";
import HomeInnerNav from "../../components/common/HomeInnerNav";
import CartItem from "../../components/common/CartItem";
import LCDMonitor from "../../assets/images/LCDMonitor.png";
import Gamecart from "../../assets/images/gamecart.png";
import CartButton from "../../components/common/CartButton";
import Footer from "../../components/layout/Footer";
import CouponCodeInput from "../../components/common/CouponCodeInput";
import ViewButton from "../../components/common/ViewButton";
import CartTotal from "../../components/common/CartTotal";
import { useOutletContext } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const CartPage = () => {
	const {
		cartItem,
		handleRemoveFromCart,
		handleCartIncreement,
		handleCartDecreement,
	} = useContext(AppContext);
	console.log(cartItem);
	return (
		<div className="cart-page">
			{cartItem ? (
				<div className="cart-dashboard">
					<HomeInnerNav page="Cart" />
					<div className="cart-details">
						<div className="cart-product-details">
							<p>Product</p>
							<p>Price</p>
							<p>Quantity</p>
							<p>Subtotal</p>
						</div>
						{cartItem?.map((item) => (
							<CartItem
								key={item.id}
								onClickRemoveIcon={() => handleRemoveFromCart(item.id)}
								onClickIncreement={() => handleCartIncreement(item.id)}
								onClickDecreement={() => handleCartDecreement(item.id)}
								image={item.image}
								name={item.title}
								price={item.price}
								quantity={item?.quantity}
								totalPrice={item.price * item.quantity}
							/>
						))}
					</div>
					<div className="return-shop-cart">
						<div className="coupon">
							<CouponCodeInput />
							<ViewButton name="Apply Coupon" />
						</div>{" "}
						<CartButton name="Return To Shop" />
						<CartButton name="Update Cart" />
					</div>
					<div className="coupon-cart-total">
						<div className="cart-total">
							<h1>Cart Total</h1>
							<CartTotal />
							<div className="check-out">
								<div className="check-out-button-wrapper">
									<ViewButton name="Process to Checkout" />
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<p>Your Cart is Empty</p>
			)}
		</div>
	);
};

export default CartPage;
