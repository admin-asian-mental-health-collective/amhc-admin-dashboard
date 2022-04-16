import firebase from 'firebase/compat/app';
import { AuthError } from 'firebase/auth';
import 'firebase/compat/auth';

const logout = async (): Promise<boolean | AuthError> =>
	await firebase
		.auth()
		.signOut()
		.then(() => {
			return false;
		})
		.catch((error: AuthError) => {
			return error;
		});

export default logout;
