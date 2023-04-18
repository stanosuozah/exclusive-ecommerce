import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SideNav from "../components/common/SideNav";
import CTABanner from "../components/CTABanner";
import "swiper/css";
import iphone14 from "../assets/images/iphone14pro.png";
const HomeCTAandNav = () => {
	return (
		<div className="home-cta">
			<SideNav />
			<Swiper
				spaceBetween={1}
				slidesPerView={1}
				// onSlideChange={() => console.log("slide change")}
				// onSwiper={(swiper) => console.log(swiper)}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
			>
				<SwiperSlide>
					<CTABanner
						cta="Shop Now"
						image={iphone14}
						subtitle="iPhone 14 Series"
						title="Up to 10% off Voucher"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<CTABanner
						cta="Shop Now"
						image={iphone14}
						subtitle="iPhone 14"
						title="Get 10% of Sales"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<CTABanner
						cta="Shop Now"
						image={iphone14}
						subtitle="iPhone X Pro"
						title="Up to 50% off Voucher"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<CTABanner
						cta="Shop Now"
						image={iphone14}
						subtitle="iPhone 8"
						title="Up to 40% off Accessories"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default HomeCTAandNav;
