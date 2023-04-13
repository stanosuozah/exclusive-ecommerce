import React, { useContext, useEffect, useState } from "react";
import BuyNowBanner from "../../components/layout/BuyNowBanner";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Category from "../../View/Category";
import FlashSales from "../../View/FlashSales";
import HomeCTAandNav from "../../View/HomeCTAandNav";
import NewArrival from "../../View/NewArrival";
import OurProducts from "../../View/OurProducts";
import ThisMonth from "../../View/ThisMonth";
import WhyUs from "../../View/WhyUs";
import { useNavigate, useOutletContext } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const HomePage = () => {
	//ADD TO CART
	const [cartItem, setCartItem] = useOutletContext();
	const navigate = useNavigate();

	const { getUser } = useContext(AppContext);
	useEffect(() => {
		if (getUser?.name) {
			navigate("/");
		}
	}, [getUser]);
	return (
		<>
			<HomeCTAandNav />
			<FlashSales cartItem={cartItem} setCartItem={setCartItem} />
			<Category />
			<ThisMonth />
			<BuyNowBanner />
			<OurProducts />
			<NewArrival />
			<WhyUs />
		</>
	);
};

export default HomePage;
