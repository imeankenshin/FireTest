import { auth, db } from './firebase.config';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	signOut as signout
} from 'firebase/auth';

import { doc, setDoc } from 'firebase/firestore';

// ログイン機能を実装する関数

export async function SignIn(email: string, pword: string) {
	const result = await signInWithEmailAndPassword(auth, email, pword)
		.then((res) => {
			console.log('success to signin.');
			return res;
		})
		.catch((err) => {
			console.error(err);
			return undefined;
		});
	return result;
}
// アカウントを作成する関数
export async function SignUp(name: string, email: string, password: string) {
	await createUserWithEmailAndPassword(auth, email, password)
		.then(async (res) => {
			// ユーザーの情報を、Firestoreに保存
			await setDoc(doc(db, 'users', res.user.uid), {
				name: name,
				email: email,
				introduce: 'Hello wolrd!',
				photoURL:
					'https://firebasestorage.googleapis.com/v0/b/firetest-a3e5a.appspot.com/o/LinoRino.PNG?alt=media&token=46b0828b-5981-4b07-8ba8-878cca632900'
			});
			// ユーザーのプロフィールを更新
			updateProfile(res.user, {
				displayName: name,
				photoURL:
					'firebasestorage.googleapis.com/v0/b/firetest-a3e5a.appspot.com/o/LinoRino.PNG?alt=media&token=46b0828b-5981-4b07-8ba8-878cca632900'
			});
		})
		.catch((err) => {
			console.error(err);
		});
}

// ログアウト機能を実装する関数
export async function signOut() {
	await signout(auth)
		.then(() => {
			console.log('success to signout');
		})
		.catch((err) => {
			console.error(err);
		});
}
