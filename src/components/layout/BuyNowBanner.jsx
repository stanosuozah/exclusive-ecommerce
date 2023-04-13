import React from "react";
import JBLImage from "/JBL.png";

const BuyNowBanner = () => {
	return (
		<div className="buy-now-banner">
			<div className="detail-section">
				<p>Categories</p>
				<h1>Enhance Your Music Experience</h1>
				<div className="buy-now-countdown">
					<div className="buy-now-hour">
						<h3 className="buynow-data">23</h3>
						<p className="buynow-text">Hours</p>
					</div>
					<div className="buy-now-day">
						<h3 buynow-data>05</h3>
						<p className="buynow-text">Days</p>
					</div>
					<div className="buy-now-minute">
						<h3 buynow-data>59</h3>
						<p className="buynow-text">Minutes</p>
					</div>
					<div className="buy-now-second">
						<h3 buynow-data>35</h3>
						<p className="buynow-text">Seconds</p>
					</div>
				</div>
				<button>Buy Now</button>
			</div>
			<div className="image-section">
				<img src={JBLImage} alt="JBL Speaker" width="568px" height="330px" />
			</div>
		</div>
	);
};

export default BuyNowBanner;
