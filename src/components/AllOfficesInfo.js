import React, {Fragment} from 'react';
import allOffices from '../Offices/allOffices.js';
import OfficeInfo from './OfficeInfo.js';
import '../Styles/allOfficesInfo.css';

export default function AllOfficesInfo(){
	
	function getInfo(arr){
		return arr.map((item, index) => {
			return <OfficeInfo
				key={index}
				header={item.header}
				text={
					<Fragment>
						<p>{item.address}</p>
						<p>Время работы:</p>
						<p>{item.workDays}</p>
						<p>Забор биоматериала: {item.samplingBioMaterialTime}</p>
						<p>Выдача результатов: {item.resultsTime}</p>
						<p>Телефон: {item.phone}</p>
						<a href={item.locationForLink} target='_blank' rel="noopener noreferrer"><p>Показать на карте</p></a>
					</Fragment>
				}
				placeMap={
					<iframe src={item.locationForFrame} width="600" height="450" frameBorder="0" style={{'border': '0'}} allowFullScreen title={item.header}></iframe>
				}
			/>			
		});
	}

	return(
		<div className="allOfficesInfo">
			{getInfo(allOffices)}
		</div>
	)
}
