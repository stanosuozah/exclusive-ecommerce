import React from "react";
import ForwardArrow from "../assets/icons/ForwardArrow";
import appleIcon from "../assets/images/apple-icon.png";

const CTABanner = ({ title, subtitle, cta, image }) => {
	return (
		<div className="cta-banner-container">
			<div className="cta-description">
				<div className="cta-icon-container">
					<img className="apple-icon" src={appleIcon} />
					<p>{subtitle}</p>
				</div>
				<h1 className="cta-title">{title}</h1>
				<button className="shopnow">
					<span className="shopnow-text">{cta}</span>
					<ForwardArrow />
				</button>
			</div>
			<div className="cta-image">
				<img className="iphone14" src={image} width={496} height={352} />
			</div>
		</div>
	);
};

export default CTABanner;
