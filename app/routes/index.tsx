import { Link } from '@remix-run/react';
import { useContext } from 'react';
import { FirebaseContext } from '~/firebase/authorization';
import Btn from '~/lib/components/Button/Button';

export default function Index() {
	const user = useContext(FirebaseContext);
	return (
		<main className="grid h-full md:grid-cols-2">
			<div className="p-12">
				<h1>Hello, {user.profile ? `${user.profile.displayName}` : 'new one!'}!</h1>
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
			<div className="grid place-items-center content-center px-12 text-white max-md:hidden">
				<div className="w-full max-w-sm rounded-lg bg-slate-800 p-4">
					<div className="flex aspect-[2/1] items-end justify-between rounded bg-lime-500 p-6 pb-0 pl-4">
						<div className="absolute -mb-5 grid h-16 w-16 place-items-center rounded-2xl border-[6px] border-slate-800 bg-slate-400">
							{user.profile?.photoURL ? (
								<img
									className="h-fitw-fit rounded-lg"
									src={user.profile?.photoURL && user.profile.photoURL}
									alt="user's icon"
								/>
							) : (
								'🙃'
							)}
						</div>
					</div>
					<div className="flex flex-col px-1 pt-6">
						<p className="text-3xl font-semibold">
							{user.profile?.displayName ? user.profile.displayName : 'null'}
						</p>
						<p className="mb-1 border-b-2 border-white/60 pb-1 opacity-60">
							{user.profile?.email ? user.profile.email : 'user@ab.com'}
						</p>
						<p className="text-xl font-semibold">Introduce</p>
						<p>{user.store ? user.store.introduce : 'no introduce'}</p>
					</div>
				</div>
				<Btn>Edit my profile</Btn>
			</div>
		</main>
	);
}
