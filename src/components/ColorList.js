import React, { useState } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

import Color from './Color';
import EditMenu from './EditMenu';

const initialColor = {
	color: '',
	code: { hex: '' }
};

const ColorList = ({ colors, updateColors }) => {
	const [editing, setEditing] = useState(false);
	const [colorToEdit, setColorToEdit] = useState(initialColor);

	const editColor = color => {
		setEditing(true);
		setColorToEdit(color);
	};

	console.log('color to edit: ', colorToEdit);

	const saveEdit = e => {
		e.preventDefault();
		axiosWithAuth()
			.put(`http://localhost:5000/api/colors/:${colorToEdit.id}`, colorToEdit)
			.then(res => {
				console.log('save edit', res);
				updateColors(colors.map(item => (item.id === colorToEdit.id ? colorToEdit : item)));
				setColorToEdit(initialColor);
				setEditing(false);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const deleteColor = color => {
		axiosWithAuth()
			.delete(`http://localhost:5000/api/colors/${color.id}`)
			.then(res => {
				updateColors(colors.filter(item => item.id !== color.id));
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className="colors-wrap">
			<p>colors</p>
			<ul>
				{colors.map(color => (
					<Color
						key={color.id}
						editing={editing}
						color={color}
						editColor={editColor}
						deleteColor={deleteColor}
					/>
				))}
			</ul>

			{editing && (
				<EditMenu
					colorToEdit={colorToEdit}
					saveEdit={saveEdit}
					setColorToEdit={setColorToEdit}
					setEditing={setEditing}
				/>
			)}
		</div>
	);
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.
