import createAccount from '@api/create-account';

describe('Create Account API', () => {
	test('should send request to firebase', async () => {
		await createAccount('', '');
	});
});
