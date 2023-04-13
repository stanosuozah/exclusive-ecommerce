import React, { useContext } from "react";
import AccountIcon from "../../assets/icons/AccountIcon";
import OrderIcon from "../../assets/icons/OrderIcon";
import CancellationIcon from "../../assets/icons/CancellationIcon";
import ProfileReviewIcon from "../../assets/icons/ProfileReviewIcon";
import LogOutIcon from "../../assets/icons/LogOutIcon";
import { AppContext } from "../../context/AppContext";

const ProfileDropDown = ({ setDisplay }) => {
	const { handleLogOut } = useContext(AppContext);
	return (
		<>
			<div
				style={{
					width: "100%",
					height: "100%",
					position: "fixed",
					top: 0,
					zIndex: 2,
				}}
				onClick={() => setDisplay(false)}
			/>
			<div
				className="profile-dopdown"
				style={{ zIndex: 3 }}
				// className={`profile-dopdown ${display && " display"} ${
				// 	notDisplay && "none-display"
				// }`}
			>
				<div className="profile-account" style={{ color: "white" }}>
					<AccountIcon />
					<h1>Manage My Account</h1>
				</div>
				<div className="profile-order">
					<OrderIcon />
					<h1>My Order</h1>
				</div>
				<div className="cancellation">
					<CancellationIcon />
					<h1>My Cancellations</h1>
				</div>
				<div className="review">
					<ProfileReviewIcon />
					<h1>My Reviews</h1>
				</div>
				<div className="logout" onClick={() => handleLogOut()}>
					<LogOutIcon />
					<h1>Logout</h1>
				</div>
			</div>
		</>
	);
};

export default ProfileDropDown;
