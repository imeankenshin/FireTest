import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import type { DocumentData } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';
import { auth, db } from './firebase.config';

export const FirebaseContext = createContext<AuthProvider>({
	profile: null,
	store: undefined
});

type AuthProvider = {
	profile: User | null;
	store: DocumentData | undefined;
};

export function AuthContextProvider(props: any) {
	const [isLoading, setLoading] = useState(true);
	const [user, setUser] = useState<User | null>(null);
	const [store, setStore] = useState<DocumentData | undefined>(undefined);

	useEffect(() => {
		onAuthStateChanged(auth, (res) => {
			setLoading(true);
			setUser(res);
			if (res) {
				getDoc(doc(db, 'users', res.uid)).then((res) => {
					setStore(res.data());
				});
			} else {
				setStore(undefined);
			}
			setLoading(false);
		});
	}, []);
	return (
		<FirebaseContext.Provider value={{ profile: user, store: store }}>
			{isLoading && (
				<main className="grid min-h-screen place-items-center">
					<h1>Loading...</h1>
				</main>
			)}
			<div className={isLoading ? 'hidden' : ''}>{props.children}</div>
		</FirebaseContext.Provider>
	);
}
