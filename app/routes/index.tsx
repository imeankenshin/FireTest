import { Link } from '@remix-run/react';
import { useAuth } from '~/firebase/authorization';
import { Profile } from './Profile';

export default function Index() {
	const user = useAuth();
	return (
		<main className="grid h-full md:grid-cols-2">
			<div className="flex flex-col justify-center p-12">
				<h1>Hello world, {user.profile ? `${user.profile.displayName}` : 'new one!'}!</h1>
				<p className="m-4">
					Welcome back to Net-Odyssey! Let's find awesome communities, or talk with your friends
					instantly.
				</p>
				<div className="flex justify-around">
					<Link to="/signin">Sign in</Link>
					<p>or</p>
					<Link to="/signup">Sign up</Link>
				</div>
			</div>
			<Profile />
		</main>
	);
}
