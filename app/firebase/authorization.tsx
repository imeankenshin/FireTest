import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import type { DocumentData } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from './firebase.config';

const FirebaseContext = createContext<AuthProvider>({
	profile: null,
	store: undefined
});

export const useAuth = () => {
	const res = useContext(FirebaseContext);
	return res;
};

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
				//TODO: Set the default value of the store state to null, then conditionally call the getDoc function outside the callback if the res is not null.
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
				<main className="grid h-screen place-items-center">
					<h1>Loading...</h1>
				</main>
			)}
			<div className={`${isLoading ? 'hidden' : ''} flex h-screen flex-col`}>{props.children}</div>
		</FirebaseContext.Provider>
	);
}
