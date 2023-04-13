import React from "react";
import Header from "../../components/layout/Header";
import HomeInnerNav from "../../components/common/HomeInnerNav";
import EditInput from "../../components/common/EditInput";
import CheckOutItem from "../../components/common/CheckOutItem";
import LCDMonitor from "/LCDMonitor.png";
import Gamecart from "/gamecart.png";
import CartTotal from "../../components/common/CartTotal";
import bkash from "/bkash.png";
import visa from "/visa.png";
import master from "/master.png";
import lastCard from "/lastcard.png";
import CouponCodeInput from "../../components/common/CouponCodeInput";
import ViewButton from "../../components/common/ViewButton";
import Footer from "../../components/layout/Footer";
import CustomCheckBoxIcon from "../../assets/icons/CustomCheckBoxIcon";

const CheckOut = () => {
	return (
		<div>
			{" "}
			<div className="check-out-dashboard">
				<HomeInnerNav page="CheckOut" />
				<h1>Billing Details</h1>
				<div className="check-out-content">
					<div className="check-out-form">
						<div className="first-name">
							<label>
								First Name <span>*</span>
							</label>
							<EditInput type="text" />
						</div>
						<div className="company-name">
							<label>
								Company Name <span>*</span>
							</label>
							<EditInput type="text" />
						</div>
						<div className="street-address">
							<label>
								Street Address <span>*</span>
							</label>
							<EditInput type="text" />
						</div>
						<div className="apartment">
							<label>Apartment, floor, etc. (optional)</label>
							<EditInput type="text" />
						</div>
						<div className="town">
							<label>
								Town/City<span>*</span>
							</label>
							<EditInput type="text" />
						</div>
						<div className="phone-number">
							<label>
								Phone Number<span>*</span>
							</label>
							<EditInput type="text" />
						</div>
						<div className="email">
							<label>
								Email Address<span>*</span>
							</label>
							<EditInput type="email" />
						</div>
						<div className="save-information">
							<input type="checkbox" />
							<p>Save this information for faster check-out next time</p>
						</div>
					</div>
					<div className="check-out-item-section">
						<div className="check-out-item-details">
							<CheckOutItem
								name="LCD Monitor"
								image={LCDMonitor}
								totalPrice="650"
							/>
							<CheckOutItem
								name="H1 Gamepad"
								image={Gamecart}
								totalPrice="1100"
							/>
							<CartTotal />
							<div className="bank">
								<label>
									<input type="radio" /> Bank
								</label>
								<div className="card-type">
									<img
										src={bkash}
										alt="bkash card"
										width={37.8}
										height={16.8}
									/>
									<img src={visa} alt="visa card" width={37.8} height={11.2} />
									<img
										src={master}
										alt="master card"
										width={39.2}
										height={25.2}
									/>
									<img
										src={lastCard}
										alt="last card"
										width={39.2}
										height={18.2}
									/>
								</div>
							</div>
							<label className="cash-delivery">
								<input type="radio" /> Cash on delivery
							</label>
						</div>
						<div className="coupon-checkout">
							<div className="coupon">
								<CouponCodeInput />
								<ViewButton name="Apply Coupon" />
							</div>
						</div>
						<div className="place-order-cta">
							<div className="place-order-btn">
								<ViewButton name="Place Order" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckOut;
