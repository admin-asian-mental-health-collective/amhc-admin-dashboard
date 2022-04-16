import createAccount from '@api/create-account';

describe('Create Account API', () => {
	test('should send request to firebase', () => {
        jest.mock('firebase/app');
        jest.mock('firebase/auth');
	});
});
