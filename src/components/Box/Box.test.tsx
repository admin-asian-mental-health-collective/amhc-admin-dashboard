import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Box from '@components/Box';
import Text from '@components/Text';

describe('Box Component', () => {
	test('renders a single child', () => {
		render(
			<Box data-testid="test-box">
				<Text>Test 1</Text>
			</Box>
		);
		const text1 = screen.getByText(/Test 1/i);
		expect(text1).toBeInTheDocument();
	});
	test('renders a muliple children', () => {
		render(
			<Box data-testid="test-box">
				<Text>Test 1</Text>
				<Text>Test 2</Text>
			</Box>
		);
		const text1 = screen.getByText(/Test 1/i);
		const text2 = screen.getByText(/Test 2/i);
		expect(text1).toBeInTheDocument();
		expect(text2).toBeInTheDocument();
	});
});
