import { auth, db } from './firebase.config';
import type { AuthError } from 'firebase/auth';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	signOut as signout
} from 'firebase/auth';

import { doc, setDoc } from 'firebase/firestore';

// ログイン機能を実装する関数

export async function SignIn(email: string, pword: string) {
	return await signInWithEmailAndPassword(auth, email, pword)
		.then((res) => {
			return [true, ''];
		})
		.catch((err: AuthError) => {
			return [false, err.code];
		});
}
// アカウントを作成する関数
export async function SignUp(name: string, email: string, password: string) {
	return await createUserWithEmailAndPassword(auth, email, password)
		.then((res) => {
			// ユーザーの情報を、Firestoreに保存
			setDoc(doc(db, 'users', res.user.uid), {
				name: name,
				email: email,
				introduce: 'Hello wolrd!'
			});
			// ユーザーのプロフィールを更新
			updateProfile(res.user, {
				displayName: name,
				photoURL:
					'firebasestorage.googleapis.com/v0/b/firetest-a3e5a.appspot.com/o/LinoRino.PNG?alt=media&token=46b0828b-5981-4b07-8ba8-878cca632900'
			});
			return res;
		})
		.catch((err) => {
			console.error(err);
			return undefined;
		});
}

// ログアウト機能を実装する関数
export async function signOut() {
	return await signout(auth)
		.then(() => {
			console.log('success to signout');
			return true;
		})
		.catch((err) => {
			console.error(err);
			return false
		});
}
