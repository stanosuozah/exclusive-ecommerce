import React, { useContext } from "react";
import Header from "../../components/layout/Header";
import HomeInnerNav from "../../components/common/HomeInnerNav";
import Footer from "../../components/layout/Footer";
import TelephoneIcon from "../../assets/icons/TelephoneIcon";
import MessageIcon from "../../assets/icons/MessageIcon";
import EditInput from "../../components/common/EditInput";
import ViewButton from "../../components/common/ViewButton";
import useForm from "../../hooks/useForm";
import { AppContext } from "../../context/AppContext";

const Contact = () => {
	const { setRefreshPage } = useContext(AppContext);

	const initialState = {};
	const [value, setValue] = useForm(initialState);
	const db = localStorage.getItem("enquiries")
		? JSON.parse(localStorage.getItem("enquiries"))
		: [];

	const onSubmit = (e) => {
		e.preventDefault(); //Prevent default behaviour of fourm submission
		if (value) {
			db.push(value); //push the formData object into the db array
			localStorage.setItem("enquiries", JSON.stringify(db)); //add the stringified db array to local storage
		}
		setRefreshPage(window.location.reload(true));
	};
	return (
		<div className="contact-page">
			<div className="contact-dashboard">
				<HomeInnerNav page="Contact" />
				<div className="contact-page-content">
					<div className="call-write">
						<div className="call-us">
							<div className="call-us-icon-title">
								<TelephoneIcon />
								<h3>Call To Us</h3>
							</div>
							<p>We are available 24/7, 7 days a week.</p>
							<p>Phone: +8801611112222</p>
						</div>
						<hr />
						<div className="write-us">
							<div className="write-us-icon-title">
								<MessageIcon />
								<h3>Write To Us</h3>
							</div>
							<p>Fill out our form and we will contact you within 24 hours.</p>
							<p>Emails: customer@exclusive.com</p>
							<p>Emails: support@exclusive.com</p>
						</div>
					</div>
					<div className="contact-form">
						<form onSubmit={(e) => onSubmit(e)}>
							<div className="contact-details">
								<EditInput
									placeHolder="Your Name"
									required
									onChange={setValue}
									name="name"
								/>
								<EditInput
									placeHolder="Your Email"
									required
									onChange={setValue}
									name="email"
								/>
								<EditInput
									placeHolder="Your Phone"
									required
									onChange={setValue}
									name="phone"
								/>
							</div>
							<textarea
								placeholder="Your message"
								onChange={setValue}
								name="message"
							/>
							<div className="contact-action">
								<div className="send-message-wrapper">
									<ViewButton name="Send Message" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
