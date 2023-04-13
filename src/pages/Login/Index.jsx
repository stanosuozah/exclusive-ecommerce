import React, { useContext, useEffect, useState } from "react";
import Banner from "../../components/common/Banner";
import MainNav from "../../components/common/MainNav";
import ViewButton from "../../components/common/ViewButton";
import FormInput from "../../components/common/FormInput";
import Footer from "../../components/layout/Footer";
import phoneCart from "/phone-cart.png";
import useForm from "../../hooks/useForm";
import { useNavigate, useOutletContext } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Login = () => {
	const { getUser, setUser, refreshPage, setRefreshPage } =
		useContext(AppContext);

	const navigate = useNavigate();

	const db = localStorage.getItem("users")
		? JSON.parse(localStorage.getItem("users"))
		: [];

	const [value, setValue] = useForm({});
	const handleLogin = async (e) => {
		e.preventDefault(); //Prevent default behaviour of fourm submission
		for (let i = 0; i < db.length; i++) {
			if (db[i].email === value.email && db[i].password === value.password) {
				localStorage.setItem(
					"user",
					JSON.stringify({ email: db[i].email, name: db[i].name })
				);
				setUser({ email: db[i].email, name: db[i].name });

				navigate("/");
				setRefreshPage(window.location.reload(true));
			}

			// throw new Error("User not found");
		}
	};

	useEffect(() => {
		if (getUser?.name) {
			navigate("/");
		}
	}, [getUser]);
	return (
		<div className="login-page">
			<div className="login-content">
				<div className="login-image">
					<img className="login-img" src={phoneCart} alt="cart-image" />
				</div>
				<div className="login-form">
					<form onSubmit={(e) => handleLogin(e)}>
						<legend>Login to Exclusive</legend>
						<p>Enter your details below</p>
						<FormInput
							type="text"
							placeholder="Email or Phone Number"
							name="email"
							onChange={setValue}
						/>
						<FormInput
							type="password"
							placeholder="Password"
							name="password"
							onChange={setValue}
						/>
						<div className="login-forgot-password">
							<ViewButton name="Login" to="/account" />
							<p>Forgot Password?</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
