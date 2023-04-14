import React from "react";
import BackArrowProduct from "../assets/icons/BackArrowProduct";
import CameraIcon from "../assets/icons/CameraIcon";
import ComputerIcon from "../assets/icons/ComputerIcon";
import ForwardArrowProduct from "../assets/icons/ForwardArrowProduct";
import GamingIcon from "../assets/icons/GamingIcon";
import HeadPhonesIcon from "../assets/icons/HeadPhonesIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import SmartWatchIcon from "../assets/icons/SmartWatchIcon";
import CategoryCard from "../components/common/CategoryCard";
import TitleCat from "../components/common/TitleCat";

const Category = () => {
	return (
		<div className="category-section">
			<TitleCat title="Categories" />
			<div className="cat-title-nav">
				<h1>Browse By Category </h1>
				<div className="cat-nav">
					<BackArrowProduct />
					<ForwardArrowProduct />
				</div>
			</div>
			<div className="categories">
				<div>
					<CategoryCard
						name="Phones"
						image={<PhoneIcon className="cat-icon" />}
					/>
				</div>

				<div>
					<CategoryCard
						name="Computers"
						image={<ComputerIcon className="cat-icon" />}
					/>
				</div>

				<div>
					{" "}
					<CategoryCard
						name="SmartWatch"
						image={<SmartWatchIcon className="cat-icon" />}
					/>
				</div>

				<div>
					<CategoryCard
						name="Camera"
						image={<CameraIcon className="cat-icon" />}
					/>
				</div>

				<div>
					<CategoryCard
						name="HeadPhones"
						image={<HeadPhonesIcon className="cat-icon" />}
					/>
				</div>

				<div>
					<CategoryCard
						name="Gaming"
						image={<GamingIcon className="cat-icon" />}
					/>
				</div>
			</div>
		</div>
	);
};

export default Category;
