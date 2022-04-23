import logout from '@api/logout';

describe('Logout API', () => {
	test('should send request to firebase', async () => {
		await logout();
	});
});
