import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const LandingPage = () => {
	return (
		<header className="sm:flex-col sm:gap-2  md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
			<nav className="sm:flex-col sm:bg-green-400  md:flex-row md:justify-between  lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between sm:p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0">
				<p>stanleyosuozah</p>

				<div className="flex gap-2">
					<a href="https://github.com/stanosuozah" target="_blank">
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/stanley-osuozah-260292142/"
						target="_blank"
					>
						<FaLinkedin />
					</a>
					<a href="">
						<FaTwitter />
					</a>
				</div>
			</nav>
			<div className="sm:flex sm:bg-red-400 md:flex-row md:gap-2 lg:flex-row lg:gap-2">
				<div className="sm:flex  md:flex-col md:justify-start lg:flex-col lg:justify-start xl:flex-col xl:justify-start">
					<div>
						<h1>Nice to meet you!</h1>
						<h1>
							I'm <span>Stanley Osuozah</span>
						</h1>
					</div>

					<p>
						Based in Birmingham, UK. I'm a frontend developer passionate about
						building responsive and accessible web applications that users love
					</p>
					<h3>CONTACT ME</h3>
				</div>
				<div className="lg:absolute lg:bg-red-400">
					<img src="/stanleyosuozah.jpeg" className="w-40 h-72" />
				</div>
			</div>
		</header>
	);
};

export default LandingPage;
