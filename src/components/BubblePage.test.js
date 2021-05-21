import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import BubblePage from './BubblePage';
// import userEvent from '@testing-library/user-event';

// import mockFetchShow from '../../api/fetchShow';
// jest.mock('../../api/fetchShow');

test('Renders BubblePage without errors', () => {
	// Finish this test
	render(<BubblePage />);
});

test('Fetches data and renders the bubbles on mounting', async () => {
	// Finish this test
	render(<BubblePage />);

	///fill in fields

	//push login Btn
	// const loginBtn = screen.getByTestId('loginBtn');
	// userEvent.click(loginBtn);
	await waitFor(() => {
		const colors = screen.queryAllByTestId('color');
		expect(colors).toHaveLength(11);
	});
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
