import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import BubblePage from './BubblePage';
import { within } from '@testing-library/dom';
import { act } from 'react-dom/test-utils';

test('Renders BubblePage without errors', async () => {
	render(<BubblePage />);
});

test('Fetches data and renders the bubbles on mounting', async () => {
	// Finish this test
	// await act(async () => {
	act(() => {
		render(<BubblePage />);
	});

	const bubbleTitle = screen.queryByText(/bubbles/i);
	expect(bubbleTitle).toBeInTheDocument();
	const svg = screen.getByTestId('svgID');
	// console.log(svg);
	expect(svg).toBeInTheDocument();

	// act(() => {
	// 	jest.advanceTimersByTime(3000);
	// });

	// await act(async () => {
	// await waitFor(() => {
	// 	// 	// const circs = await screen.findAllByTestId('circle');
	// 	// 	// console.log('MICHAEL: ', circs.length);
	// 	// 	// 	// 	const bubbleTitle = screen.queryByText(/bubbles/i);
	// 	// 	// 	// 	expect(bubbleTitle).toBeInTheDocument();
	// 	// 	// 	// 	const svg = screen.getByTestId('svgID');
	// 	// 	// 	// const circle = screen.queryByTestId('circle');
	// 	// 	// 	// expect(circle).toBeInTheDocument();
	// 	// 	// 	// const svg = screen.getByTestId('svgID');
	// 	// 	// let circles = screen.queryAllByTestId('circle');
	// 	// 	// let lis = screen.queryAllBy('listItem');
	// 	let circles = screen.findAllByTestId('circle');
	// 	// console.log('HEYYYY: ', circles.length);
	// });

	// let qwerty = await waitFor(() => screen.findAllByTestId('circle'));
	// console.log('HEYYYY: ', qwerty.length);

	await waitFor(() => expect(screen.findAllByTestId('circle')).toHaveLength(1));
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
