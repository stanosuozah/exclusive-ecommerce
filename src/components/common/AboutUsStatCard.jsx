import React from "react";

const AboutUsStatCard = ({ icon, stat, title }) => {
	return (
		<div className="about-us-stat-card">
			{icon}
			<h1>{stat}</h1>
			<p>{title}</p>
		</div>
	);
};

export default AboutUsStatCard;
