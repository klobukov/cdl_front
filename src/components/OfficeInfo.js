import React from 'react';

import '../Styles/officeInfo.css';

export default function OfficeInfo(props){
	return(
		<div className="officeInfo">
			<div className="officeInfo__text">
				<h2>{props.header}</h2>
				{props.text}
			</div>
			<div className="officeInfo__map">
				{props.placeMap}
			</div>
		</div>
	)
}