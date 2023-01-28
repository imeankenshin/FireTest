import { Link } from '@remix-run/react';
import { useContext } from 'react';
import { FirebaseContext } from '~/firebase/authorization';

export function HeaderNav() {
	const user = useContext(FirebaseContext);
	return (
		<nav className="sticky top-0 left-0 flex h-16 w-full items-center justify-between border-b-2 border-slate-600 bg-slate-800 py-4 px-6 shadow-md">
			<Link to="/">hello {user.store && user.store.name}!</Link>
			<Link to={user.profile ? '/signout' : '/signin'} className="mx-2 text-lg font-medium">
				<span className="mr-1 font-['SF_Pro']">􁏜</span> {user.profile ? 'Sing out' : 'Sign in'}
			</Link>
		</nav>
	);
}
