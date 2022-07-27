import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Box from '@components/Box';
import Button from '@components/Button';

describe('Box Component', () => {
	test('renders primary button', () => {
		render(
			<Box data-testid="test-box">
				<Button onClick={() => null}>Test 1</Button>
			</Box>
		);
		const text1 = screen.getByText(/Test 1/i);
		expect(text1).toBeInTheDocument();
	});
});
