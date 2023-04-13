import React from "react";
import { Link } from "react-router-dom";
import SendIcon from "../../assets/icons/SendIcon";
import qrcode from "../../assets/images/Qrcode.png";
import appStore from "../../assets/images/app-store.png";
import playStore from "../../assets/images/play-store.png";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-links">
				<div className="exclusive">
					<h1>Exclusive</h1>
					<h3 className="subscribe-title">Subscribe</h3>
					<p>Get 10% off your first order</p>
					<label className="footer-email">
						<input
							type="email"
							placeholder="Enter your email"
							className="footer-email-input"
						/>
						<SendIcon className="send-icon" />
					</label>
				</div>
				<div className="support">
					<h3>Support</h3>
					<p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
					<p>exclusive@gmail.com</p>
					<p>+88015-88888-9999</p>
				</div>
				<div className="account">
					<h3>Account</h3>
					<Link className="account-link">My Account</Link>
					<Link className="account-link">Login / Register</Link>
					<Link className="account-link">Cart</Link>
					<Link className="account-link">Wishlist</Link>
					<Link className="account-link">Shop</Link>
				</div>
				<div className="quick-link">
					<h3>Quick Link</h3>
					<Link className="quicklink-link">Privacy Policy</Link>
					<Link className="quicklink-link">Terms Of Use</Link>
					<Link className="quicklink-link">FAQ</Link>
					<Link className="quicklink-link">Contact</Link>
				</div>
				<div className="download-app">
					<h3>Download App</h3>
					<p>Save $3 with App New User Only</p>
					<div className="doownload-link">
						<div className="qrcode">
							<img
								src="https://chart.apis.google.com/chart?cht=qr&chl=google.com&chs=200"
								alt="QR CODE"
								width="76px"
								height="76px"
							/>
						</div>
						<div className="app-play-store">
							<img
								src={playStore}
								alt="Google Play Store"
								width="104px"
								height="30px"
							/>
							<img
								src={appStore}
								alt="Apple Store"
								width="104px"
								height="34px"
							/>
						</div>
					</div>
					<div className="social-links">
						<FacebookIcon />
						<TwitterIcon />
						<InstagramIcon />
						<LinkedInIcon />
					</div>
				</div>
			</div>
			<div className="copyright-section">
				<p>© Copyright Rimel 2022. All right reserved</p>
			</div>
		</div>
	);
};

export default Footer;
