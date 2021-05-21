// import React from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

// import Bubbles from './Bubbles';
// import ColorList from './ColorList';

// let newList = [];

const fetchColors = () => {
	// let newList = [];
	return axiosWithAuth()
		.get('http://localhost:5000/api/colors')
		.then(res => {
			// console.log('res.data: ', res.data);
			// newList = res.data;
			// return newList;
			return res.data;

			// const { data } = res;

			// return {
			// 	name: data.name,
			// 	image: data.image,
			// 	summary: stripTags(data.summary),
			// 	seasons: formatSeasons(data._embedded.episodes)
			// };
		})
		.catch(err => {
			console.log(err);
		});
};

export default fetchColors;
