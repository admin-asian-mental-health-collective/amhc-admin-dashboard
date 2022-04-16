import logout from '@api/logout';

describe('Logout API', () => {
	test('should send request to firebase', () => {
		jest.mock('firebase/app');
		jest.mock('firebase/auth');
	});
});
