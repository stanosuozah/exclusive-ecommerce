import React from "react";
import Header from "../../components/layout/Header";
import HomeInnerNav from "../../components/common/HomeInnerNav";
import ViewButton from "../../components/common/ViewButton";
import Footer from "../../components/layout/Footer";

const Error404 = () => {
	return (
		<div className="error-404-page">
			<div className="error-404-content">
				<HomeInnerNav page="Error 404" />
				<div className="error-404-content-text">
					<h1>404 Not Found</h1>
					<p>Your visited page not found. You may go home page.</p>
					<ViewButton name="Back to Home Page" to="/" />
				</div>
			</div>
		</div>
	);
};

export default Error404;
