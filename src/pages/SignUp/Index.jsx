import React, { useEffect, useState } from "react";
import Banner from "../../components/common/Banner";
import MainNav from "../../components/common/MainNav";
import phoneCart from "../../assets/images/phone-cart.png";
import ViewButton from "../../components/common/ViewButton";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import FormInput from "../../components/common/FormInput";
import useForm from "../../hooks/useForm";

const SignUp = () => {
	const navigate = useNavigate();
	const [, , getUser] = useOutletContext();

	const initialState = {};
	const [value, setValue] = useForm(initialState);
	const db = localStorage.getItem("users")
		? JSON.parse(localStorage.getItem("users"))
		: [];

	const onSubmit = (e) => {
		e.preventDefault(); //Prevent default behaviour of fourm submission
		db.push(value); //push the formData object into the db array
		localStorage.setItem("users", JSON.stringify(db)); //add the stringified db array to local storage
	};

	useEffect(() => {
		if (getUser?.name) {
			navigate("/");
		}
	}, [getUser]);
	return (
		<div className="signup-page">
			<div className="signup-content">
				<div className="signup-image">
					<img src={phoneCart} alt="cart-image" />
				</div>
				<div className="signup-form">
					<form onSubmit={(e) => onSubmit(e)}>
						<legend>Create an account</legend>
						<p>Enter your details below</p>
						<FormInput
							type="text"
							placeholder="Name"
							onChange={setValue}
							name="name"
						/>
						<FormInput
							type="text"
							placeholder="Email or Phone Number"
							onChange={setValue}
							name="email"
						/>
						<FormInput
							type="password"
							placeholder="Password"
							onChange={setValue}
							name="password"
						/>
						<ViewButton name="Create Account" />
						<label className="signup-google-wrapper">
							<GoogleIcon />
							<button>Sign up with Google</button>
						</label>
						<h3>
							Already have an account?
							<span className="login-link-wrapper">
								<Link className="login-link" to="/login">
									Log In
								</Link>
							</span>
						</h3>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
