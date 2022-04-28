import React from "react";

export default function ProgressBar({ title, value }) {
	return (
		<div className='progress-bar'>
			<div className='title'>{title}</div>
			<div className='bar'>
				<span style={{ width: value + "%" }}></span>
			</div>
			<div className='value'>{value.toString().padStart(3, "0")}%</div>
		</div>
	);
}
