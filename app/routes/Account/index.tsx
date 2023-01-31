import { Link } from '@remix-run/react';
import { useAuth } from '~/firebase/authorization';
import { TxtInput } from '~/lib/components/TxtInput/TxtInput';

export default function Index() {
	const usr = useAuth();
	return (
		<main className="flex h-full justify-center">
			<div className="w-80 p-6">
				<ul>
					<li className="rounded-lg bg-sky-400/40 px-3 py-2">
						<Link to="/account">
							<div className="flex items-center text-lg">
								<svg
									className="mr-2 h-8 w-8 [&>*]:fill-white"
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									id="e"
									x="0px"
									y="0px"
									viewBox="0 0 48 48"
								>
									<path d="M38,37c0,5-3,5-14,5s-14,0-14-5s1-8,14-8S38,32,38,37z" />
									<ellipse cx="24" cy="16" rx="9" ry="10" />
								</svg>
								<span>account</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/account/theme">
							<div className="flex items-center py-2 px-3">
								<span className="mr-2 h-8 w-8 text-center text-2xl">􀎑</span>
								Theme
							</div>
						</Link>
					</li>
					<li>
						<Link to="/account/theme">
							<div className="flex items-center py-2 px-3">
								<span className="mr-2 h-8 w-8 text-center text-2xl">􁗅</span>
								Accessibility
							</div>
						</Link>
					</li>
				</ul>
			</div>
			{usr.profile ? (
				<div className="h-full w-full overflow-y-scroll p-12 scroll:bg-transparent scroll-tb:bg-slate-300/60">
					<h1>User account</h1>
					<ul className="max-w-lg [&>li]:my-3">
						<li>
							<TxtInput
								name="name"
								type="text"
								label="name"
								placeholder={usr.profile.displayName ? usr.profile.displayName : 'null'}
							/>
						</li>
						<li>
							<TxtInput name="introduce" type="text" label="introduce" />
						</li>
						<li>
							<TxtInput name="some" type="time" label="time" />
						</li>
					</ul>
				</div>
			) : (
				<h1>first login</h1>
			)}
		</main>
	);
}
