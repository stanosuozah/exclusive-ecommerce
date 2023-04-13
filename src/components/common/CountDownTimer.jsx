import { React, useState, useEffect } from "react";

const CountDownTimer = ({ duration }) => {
	const [time, setTime] = useState(duration);

	//when component mounts.... we call useEffect
	useEffect(() => {
		setTimeout(() => {
			setTime(time - 1000);
		}, 1000); //setTimeout is called after each second (millisecond)
	}, [time]);

	//Format time function
	const formatTimeSeconds = (sec) => {
		let totalSeconds = parseInt(Math.floor(sec / 1000));
		let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
		let totalHours = parseInt(Math.floor(totalMinutes / 60));
		let days = parseInt(Math.floor(totalHours / 24));

		//changing the totalSeconds to go from 0 60 to 0
		let seconds = parseInt(totalSeconds % 60);
		let minutes = parseInt(totalMinutes % 60);
		let hours = parseInt(totalHours % 24);
		return seconds;
	};
	const formatTimeMinutes = (sec) => {
		let totalSeconds = parseInt(Math.floor(sec / 1000));
		let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
		let totalHours = parseInt(Math.floor(totalMinutes / 60));
		let days = parseInt(Math.floor(totalHours / 24));

		//changing the totalSeconds to go from 0 60 to 0
		let seconds = parseInt(totalSeconds % 60);
		let minutes = parseInt(totalMinutes % 60);
		let hours = parseInt(totalHours % 24);
		return minutes;
	};
	const formatTimeDays = (sec) => {
		let totalSeconds = parseInt(Math.floor(sec / 1000));
		let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
		let totalHours = parseInt(Math.floor(totalMinutes / 60));
		let days = parseInt(Math.floor(totalHours / 24));

		//changing the totalSeconds to go from 0 60 to 0
		let seconds = parseInt(totalSeconds % 60);
		let minutes = parseInt(totalMinutes % 60);
		let hours = parseInt(totalHours % 24);
		return days;
	};
	const formatTimeHours = (time) => {
		let totalSeconds = parseInt(Math.floor(time / 1000));
		let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
		let totalHours = parseInt(Math.floor(totalMinutes / 60));
		let days = parseInt(Math.floor(totalHours / 24));

		//changing the totalSeconds to go from 0 60 to 0
		let seconds = parseInt(totalSeconds % 60);
		let minutes = parseInt(totalMinutes % 60);
		let hours = parseInt(totalHours % 24);
		return hours;
	};
	return (
		<div className="countdown">
			<div className="day-section">
				<p className="day-caption">Days</p>
				<h1 className="day">{formatTimeDays(time)}</h1>
			</div>
			<h1 className="column">:</h1>
			<div className="hour-section">
				<p className="hour-caption">Hours</p>
				<h1 className="hour">{formatTimeHours(time)}</h1>
			</div>
			<h1 className="column">:</h1>
			<div className="minute-section">
				<p className="minute-caption">Minutes</p>
				<h1 className="day">{formatTimeMinutes(time)}</h1>
			</div>
			<h1 className="column">:</h1>
			<div className="second-section">
				<p className="second-caption">Seconds</p>
				<h1 className="second">{formatTimeSeconds(time)}</h1>
			</div>
		</div>
	);
};

export default CountDownTimer;
