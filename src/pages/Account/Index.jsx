import React from "react";
import Header from "../../components/layout/Header";
import { Link } from "react-router-dom";
import EditInput from "../../components/common/EditInput";
import ViewButton from "../../components/common/ViewButton";
import Footer from "../../components/layout/Footer";
import HomeInnerNav from "../../components/common/HomeInnerNav";

const Account = () => {
	return (
		<div className="account-page">
			<div className="account-dashboard">
				<div className="home-username">
					<HomeInnerNav page="My Account" />
					<label>
						<p>
							Welcome <span className="username">Md Rimel</span>
						</p>
					</label>
				</div>
				<div className="account-main-content">
					<div className="account-menu">
						<div className="manage-account">
							<Link
								className="main-account-nav"
								style={{ textDecoration: "none" }}
							>
								Manage My Account
							</Link>
							<Link
								className="account-menu-links"
								style={{ textDecoration: "none" }}
							>
								Profile
							</Link>
							<Link
								className="account-menu-links"
								style={{ textDecoration: "none" }}
							>
								Address Book
							</Link>
							<Link
								className="account-menu-links"
								style={{ textDecoration: "none" }}
							>
								My Payment Options
							</Link>
						</div>
						<div className="my-orders">
							<Link
								className="main-account-nav"
								style={{ textDecoration: "none" }}
							>
								My Orders
							</Link>
							<Link
								className="account-menu-links"
								style={{ textDecoration: "none" }}
							>
								My Returns
							</Link>
							<Link
								className="account-menu-links"
								style={{ textDecoration: "none" }}
							>
								My Cancellations
							</Link>
						</div>
						<div className="wishlist">
							<Link
								className="main-account-nav"
								style={{ textDecoration: "none" }}
							>
								My WishList
							</Link>
						</div>
					</div>
					<div className="account-content-display">
						<form>
							<legend>Edit Your Profile</legend>
							<div className="name">
								<div className="firstname">
									<label className="edit-label">First Name</label>
									<EditInput type="text" />
								</div>
								<div className="lastname">
									<label className="edit-label">Last Name</label>
									<EditInput type="text" />
								</div>
							</div>
							<div className="email-address">
								<div className="email">
									<label className="edit-label">Email</label>
									<EditInput type="email" />
								</div>
								<div className="address">
									<label className="edit-label">Address</label>
									<EditInput type="text" />
								</div>
							</div>
							<div className="password">
								<label className="edit-label">Password Change</label>
								<EditInput placeHolder="Current Password" type="password" />
								<EditInput placeHolder="New Password" type="password" />
								<EditInput placeHolder="Confirm New Password" type="password" />
							</div>
							<div className="edit-actions">
								<Link
									className="edit-cancel"
									style={{ textDecoration: "none" }}
								>
									Cancel
								</Link>
								<ViewButton name="Save Changes" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
