import { useNavigate } from '@remix-run/react';
import { useAuth } from '~/firebase/authorization';
import Btn from '~/lib/components/Button/Button';

export function Profile() {
	const context = useAuth();
	const [user, store] = [context.profile, context.store];
	const navigate = useNavigate();
	return (
		<div className="grid place-items-center content-center px-12 text-white max-md:hidden">
			<div className="w-full max-w-sm rounded-lg bg-slate-800 p-4">
				<div className="flex aspect-[2/1] items-end justify-between rounded bg-lime-500 p-6 pb-0 pl-4">
					<div className="absolute -mb-5 grid h-16 w-16 place-items-center rounded-2xl border-[6px] border-slate-800 bg-slate-400">
						{user?.photoURL ? (
							<img
								className="h-fitw-fit rounded-lg"
								src={user?.photoURL && user.photoURL}
								alt="user's icon"
							/>
						) : (
							'🙃'
						)}
					</div>
				</div>
				<div className="flex flex-col px-1 pt-6">
					<p className="text-3xl font-semibold">{user?.displayName ? user.displayName : 'null'}</p>
					<p className="mb-1 border-b-2 border-white/60 pb-1 opacity-60">
						{user?.email ? user.email : 'user@ab.com'}
					</p>
					<p className="text-xl font-semibold">Introduce</p>
					<p>{store ? store.introduce : 'no introduce'}</p>
				</div>
				<div className="mt-3">
					<Btn
						type="button"
						fullWidth
						onClick={() => {
							navigate('/account');
						}}
						title="Edit my profile"
						size="sm"
					>
						Edit my profile
					</Btn>
				</div>
			</div>
		</div>
	);
}
