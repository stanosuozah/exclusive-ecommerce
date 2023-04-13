import React from "react";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import LikeIcon from "../../assets/icons/LikeIcon";
import { Link } from "react-router-dom";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";

const AboutPeople = ({ image, name, position }) => {
	return (
		<div className="about-people">
			<div className="about-people-section-image">
				<img src={image} alt={name} height={291} width={226} />
			</div>
			<div className="about-details">
				<h1>{name}</h1>
				<p>{position}</p>
				<div className="about-people-socials">
					<a href="https://twitter.com/">
						<TwitterIcon />
					</a>
					<a href="https://www.instagram.com/">
						<InstagramIcon />
					</a>
					<a href="https://www.linkedin.com/feed/">
						<LinkedInIcon />
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutPeople;
