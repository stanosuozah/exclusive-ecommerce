import React from "react";
import Delivery from "../../assets/icons/Delivery";
import CustomerService from "../../assets/icons/CustomerService";
import MoneyBack from "../../assets/icons/MoneyBack";

const WhyLayout = () => {
	return (
		<div className="why-us-wrapper">
			<div className="delivery-section">
				<Delivery />
				<h3>FREE AND FAST DELIVERY</h3>
				<p>Free delivery for all orders over $140</p>
			</div>
			<div className="customer-service-section">
				<CustomerService />
				<h3>24/7 CUSTOMER SERVICE </h3>
				<p>Friendly 24/7 customer support</p>
			</div>
			<div className="money-back-section">
				<MoneyBack />
				<h3>MONEY BACK GUARANTEE</h3>
				<p>We reurn money within 30 days</p>
			</div>
		</div>
	);
};

export default WhyLayout;
