import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
	createBrowserRouter,
	Outlet,
	RouterProvider,
	useOutletContext,
} from "react-router-dom";
import Header from "./components/layout/Header";

import AboutUs from "./pages/AboutUs/Index";
import SignUp from "./pages/SignUp/Index";
import Login from "./pages/Login/Index";
import Account from "./pages/Account/Index";
import Error404 from "./pages/404/Index";
import Contact from "./pages/Contact/Index";
import CartPage from "./pages/Cart/Index";
import CheckOut from "./pages/Checkout/Index";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import { AppContext } from "./context/AppContext";
import Wishlist from "./pages/Wishlist";

function App() {
	const { cartItem, setCartItem, getUser } = useContext(AppContext);

	const saveCartToLocalStorage = (cartItem) => {
		return localStorage.setItem(cartItem);
	};

	// setCartItem(JSON.parse(localStorage.getItem("cartItems")));
	//geting user from localstorage

	console.log(getUser);
	const Layout = () => {
		return (
			<div>
				<Header cartItem={cartItem} user={getUser} />
				<Outlet context={[cartItem, setCartItem, getUser]} />
				<Footer />
			</div>
		);
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,

			children: [
				{
					path: "/",

					element: <HomePage />,
				},
				{
					path: "*",
					element: <Error404 />,
				},
				{
					path: "/aboutus",
					element: <AboutUs />,
				},
				{
					path: "/signup",
					element: <SignUp />,
				},
				{
					path: "/login",
					element: <Login />,
				},
				{
					path: "/account",
					element: <Account />,
				},

				{
					path: "/contact",
					element: <Contact />,
				},
				{
					path: "/cart",
					element: <CartPage />,
				},
				{
					path: "/checkout",
					element: <CheckOut />,
				},
				{
					path: "/productdetails/:id",
					element: <ProductDetails />,
				},
				{
					path: "/wishlist",
					element: <Wishlist />,
				},
			],
		},
		// {
		// 	path: "/",
		// 	element: <HomePage />,
		// 	errorElement: <Error404 />,
		// },
		// // {
		// // 	path: "*",
		// // 	element: <Error404 />,
		// // },
		// {
		// 	path: "/aboutus",
		// 	element: <AboutUs />,
		// },
		// {
		// 	path: "/signup",
		// 	element: <SignUp />,
		// },
		// {
		// 	path: "/login",
		// 	element: <Login />,
		// },
		// {
		// 	path: "/account",
		// 	element: <Account />,
		// },

		// {
		// 	path: "/contact",
		// 	element: <Contact />,
		// },
		// {
		// 	path: "/cart",
		// 	element: <CartPage />,
		// },
		// {
		// 	path: "/checkout",
		// 	element: <CheckOut />,
		// },
		// {
		// 	path: "/productdetails",
		// 	element: <ProductDetails />,
		// },
	]);
	return <RouterProvider router={router} />;
}

export default App;
