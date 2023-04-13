import React from "react";
import ProductCard from "../components/common/ProductCard";
import TitleCat from "../components/common/TitleCat";
import ViewButton from "../components/common/ViewButton";
import Gucci from "../assets/images/Gucci.png";
import RGB from "../assets/images/RGB.png";
import SmallBookShelf from "../assets/images/SmallBookShelf.png";
import TheNorthCoat from "../assets/images/Thenorthcoat.png";
import RatingIcon from "../assets/icons/RatingIcon";
const ThisMonth = () => {
	return (
		<div className="this-month-section">
			<TitleCat title="This Month" />
			<div className="title-view-all">
				<h1>Best Selling Products</h1>
				<div className="this-month-view-all-btn">
					<ViewButton name="View All" />
				</div>
			</div>
			<div className="this-month-products">
				<ProductCard
					name="The north coat"
					image={TheNorthCoat}
					price="260"
					discountPrice="360"
					review="65"
					Rating={
						<div>
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
						</div>
					}
				/>
				<ProductCard
					image={Gucci}
					name="Gucci duffle bag"
					price="960"
					discountPrice="1160"
					review="65"
					Rating={
						<div>
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
						</div>
					}
				/>
				<ProductCard
					image={RGB}
					name="RGB liquid CPU Cooler"
					price="160"
					discountPrice="170"
					review="65"
					Rating={
						<div>
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
						</div>
					}
				/>
				<ProductCard
					image={SmallBookShelf}
					name="Small BookSelf "
					price="360"
					review="65"
					Rating={
						<div>
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
							<RatingIcon />
						</div>
					}
				/>
			</div>
		</div>
	);
};

export default ThisMonth;
