import { Link } from '@remix-run/react';
import { useAuth } from '~/firebase/authorization';

export function HeaderNav() {
	const user = useAuth().profile;
	return (
		<nav className="sticky top-0 left-0 flex h-16 w-full items-center justify-between border-b-2 border-slate-600 bg-slate-800 py-4 px-6 shadow-md">
			<Link to="/">hello {user && user?.displayName}!</Link>
			<Link to={user ? '/signout' : '/signin'} className="mx-2 text-lg font-medium">
				<span className="mr-1 font-['SF_Pro']">􁏜</span> {user ? 'Sing out' : 'Sign in'}
			</Link>
		</nav>
	);
}
