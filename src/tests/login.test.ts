import login from '@api/login';

describe('Login API', () => {
	test('should send request to firebase', async () => {
		await login('', '');
	});
});
