import firebase from 'firebase/compat/app';
import { UserCredential, AuthError } from 'firebase/auth';
import 'firebase/compat/auth';

const login = async (
	email: string,
	password: string
): Promise<UserCredential | AuthError> =>
	await firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((value: any) => {
			const { user }: { user: UserCredential } = value;
			return user;
		})
		.catch((error: AuthError) => {
			return error;
		});

export default login;
