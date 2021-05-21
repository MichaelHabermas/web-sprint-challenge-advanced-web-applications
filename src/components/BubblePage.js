import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

// import fetchColors from '../api/FetchColors';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

// let newList = [];

const fetchColors = () => {
	// let newList = [];
	return axiosWithAuth()
		.get('http://localhost:5000/api/colors')
		.then(res => {
			// console.log('res.data: ', res.data);
			// newList = res.data;
			return res.data;
		})
		.catch(err => {
			console.log(err);
		});
};

// console.log('new List outside: ', newList);

const BubblePage = props => {
	const [colorList, setColorList] = useState([]);
	// const { fetchColors } = props;

	// const fetchColors = () => {
	// 	axiosWithAuth()
	// 		.get('http://localhost:5000/api/colors')
	// 		.then(res => {
	// 			setColorList(res.data);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// };

	useEffect(() => {
		// fetchColors();
		// setTimeout(function () {
		// 	// console.log('newList (in Use Effect): ', newList);
		// 	setColorList(newList);
		// 	// setColorList(fetchColors());
		// }, 50);
		fetchColors().then(data => {
			setColorList(data);
		});
		// eslint-disable-next-line
	}, []);

	return (
		<div className="container">
			{/* {console.log('colorList: ', colorList)} */}
			<ColorList colors={colorList} updateColors={setColorList} />
			<Bubbles colors={colorList} />
		</div>
	);
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
