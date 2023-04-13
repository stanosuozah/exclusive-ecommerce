import React from "react";
import ArrowUp from "../assets/icons/ArrowUp";
import CustomerService from "../assets/icons/CustomerService";
import Delivery from "../assets/icons/Delivery";
import MoneyBack from "../assets/icons/MoneyBack";
import WhyLayout from "../components/common/WhyLayout";

const WhyUs = () => {
	return (
		<div className="why-us-section">
			<WhyLayout />
			<div className="why-arrow-nav">
				<a href="#top">
					<ArrowUp />
				</a>
			</div>
		</div>
	);
};

export default WhyUs;
