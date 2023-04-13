import React from "react";
import Header from "../../components/layout/Header";
import HomeInnerNav from "../../components/common/HomeInnerNav";
import Footer from "../../components/layout/Footer";
import WhyLayout from "../../components/common/WhyLayout";
import image from "../../assets/images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png";
import AboutUsStatCard from "../../components/common/AboutUsStatCard";
import SellerIcon from "../../assets/icons/SellerIcon";
import SalesIcon from "../../assets/icons/SalesIcon";
import CustomerIcon from "../../assets/icons/CustomerIcon";
import GrossSalesIcon from "../../assets/icons/GrossSalesIcon";
import AboutPeople from "../../components/common/AboutPeople";
import Tom from "../../assets/images/Tom.png";
import Emma from "../../assets/images/Emma.png";
import Will from "../../assets/images/Will.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Autoplay } from "swiper";

const AboutUs = () => {
	return (
		<div className="about-us-page">
			<div className="about-us-content">
				<HomeInnerNav page="About" />
				<div className="our-story-section">
					<div className="our-story-text">
						<h1>Our Story</h1>
						<p>
							Launced in 2015, Exclusive is South Asia’s premier online shopping
							makterplace with an active presense in Bangladesh. Supported by
							wide range of tailored marketing, data and service solutions,
							Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
							customers across the region.
						</p>
						<p>
							Exclusive has more than 1 Million products to offer, growing at a
							very fast. Exclusive offers a diverse assotment in categories
							ranging from consumer.
						</p>
					</div>
					<div className="our-story-image">
						<img src={image} alt="" />
					</div>
				</div>
			</div>
			<div className="about-stat">
				<AboutUsStatCard
					icon={<SellerIcon />}
					stat="10.5k"
					title="Sallers active our site"
				/>
				<AboutUsStatCard
					icon={<SalesIcon />}
					stat="33k"
					title="Mopnthly Produduct Sale"
				/>
				<AboutUsStatCard
					icon={<CustomerIcon />}
					stat="45.5k"
					title="Customer active in our site"
				/>
				<AboutUsStatCard
					icon={<GrossSalesIcon />}
					stat="25k"
					title="Anual gross sale in our site"
				/>
			</div>
			<div className="about-us-profile-section">
				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						<AboutPeople
							image={Tom}
							name="Tom Cruise"
							position="Founder & Chairman"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<AboutPeople
							image={Emma}
							name="Emma Watson"
							position="Managing Director"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<AboutPeople
							image={Will}
							name="Will Smith"
							position="Product Designer"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<AboutPeople
							image={Will}
							name="Stanley Osuozah"
							position="Frontend Engineer"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<AboutPeople
							image={Will}
							name="James James"
							position="Project Manager"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<AboutPeople
							image={Will}
							name="Arthur Philips"
							position="Director"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
			<WhyLayout />
		</div>
	);
};

export default AboutUs;
