import login from '@api/login';

describe('Login API', () => {
	test('should send request to firebase', () => {
        jest.mock('firebase/app');
        jest.mock('firebase/auth');
	});
});
