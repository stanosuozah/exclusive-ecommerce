import React from "react";
import TitleCat from "../components/common/TitleCat";
import ps5 from "../assets/images/ps5.png";
import woman from "../assets/images/attractive-woman.png";
import speaker from "../assets/images/speaker.png";
import perfume from "../assets/images/perfume.png";

const NewArrival = () => {
	return (
		<div className="new-arrival-section">
			<TitleCat title="Featured" />
			<h1>New Arrival</h1>
			<div className="new-arrival-image-section">
				<div className="new-arrival-first">
					<img src={ps5} alt="ps5" className="ps5-image" />
					<div className="new-arrival-text">
						<h3 className="new-arrival-title">PlayStation 5</h3>
						<p className="new-arrival-description">
							Black and White version of the PS5 coming out on sale.
						</p>
						<button className="shopnow">
							<span className="shopnow-text">Shop Now</span>
						</button>
					</div>
				</div>
				<div className="new-arrival-second">
					<div className="new-arrival-women">
						<img src={woman} alt="attractive woman" className="woman-image" />
						<div className="new-arrival-women-text">
							<h3 className="new-arrival-title">Women’s Collections</h3>
							<p className="new-arrival-description">
								Featured woman collections that give you another vibe.
							</p>
							<button className="shopnow">
								<span className="shopnow-text">Shop Now</span>
							</button>
						</div>
					</div>
					<div className="new-arrival-speaker-perfume">
						<div className="new-arrival-speaker">
							<img
								src={speaker}
								alt="amazon speaker"
								className="speaker-image"
							/>
							<div className="new-arrival-text">
								<h3 className="new-arrival-title">Speakers</h3>
								<p className="new-arrival-description">
									Amazon wireless speakers
								</p>
								<button className="shopnow">
									<span className="shopnow-text">Shop Now</span>
								</button>
							</div>
						</div>
						<div className="new-arrival-perfume">
							<img
								src={perfume}
								className="perfume-image"
								alt="perfume image"
							/>
							<div className="new-arrival-text">
								<h3 className="new-arrival-title">Perfume</h3>
								<p className="new-arrival-description">GUCCI INTENSE OUD EDP</p>
								<button className="shopnow">
									<span className="shopnow-text">Shop Now</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewArrival;
