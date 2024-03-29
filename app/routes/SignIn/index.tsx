import { Form, Link, useLocation, useNavigate } from '@remix-run/react';
import React, { useRef, useState } from 'react';
import { SignIn } from '~/firebase/auth';
import Btn from '~/lib/components/Button/Button';
import { useNotification } from '~/lib/components/Toast/Notification';
import { TxtInput } from '~/lib/components/TxtInput/TxtInput';

export default function Index() {
	//Refs
	const [emailRef, passwordRef] = [
		useRef<HTMLInputElement & HTMLTextAreaElement>(null),
		useRef<HTMLInputElement & HTMLTextAreaElement>(null)
	];
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const notice = useNotification();
	const locate = useLocation();
	const query = new URLSearchParams(locate.search);

	// Func
	async function submitHdler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (emailRef.current && passwordRef.current) {
			setLoading(true);
			await SignIn(emailRef.current.value, passwordRef.current.value)
				.then((res) => {
					if (res[0]) {
						notice.success('Successfully logged in.');
						navigate(`${query.get('next') ? query.get('next') : '/'}`);
					} else {
						if (res[1] == 'auth/user-not-found') {
							alert('The email or password is wrong. try again!');
						}
					}
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}
	return (
		<main
			id="lognin"
			className="grid h-[calc(100vh_-_4rem)] place-items-center bg-indigo-500 [&>*]:text-white"
		>
			<Form
				method="get"
				onSubmit={(e) => submitHdler(e)}
				className="mx-12 -mt-4 flex w-full max-w-3xl rounded-xl bg-slate-700 p-8 shadow-xl lg:grid lg:grid-cols-5"
			>
				<div className="flex flex-col max-lg:w-full lg:col-span-3">
					<h1 className="mb-1 text-4xl font-semibold">Welcome back!</h1>
					<p className="mb-2 opacity-60">Enter your email & password to sign in.</p>
					<TxtInput
						autoFocus
						inputRef={emailRef}
						id="email"
						required
						type="email"
						label={'email'}
						name="email"
					/>
					<TxtInput
						inputRef={passwordRef}
						required
						id="pass"
						type="password"
						label="password"
						name="password"
					/>
					<a href="./" className="my-2">
						Forgot your password?
					</a>
					<div className="mt-2 mb-3 grid">
						<Btn size="md" type="submit">
							{loading ? 'wait...' : 'Sign in'}
						</Btn>
					</div>
					<p>
						If you don't have an account yet, <Link to="/signup">just click here to sign up</Link>
					</p>
				</div>
				<div className="-mr col-span-2 mx-4 -mr-4 flex flex-col items-center justify-center py-2 max-lg:hidden">
					<div className="aspect-square w-4/6 rounded-md bg-white" />
					<div className="[&>*]:text-center">
						<h2 className="mt-6 text-2xl font-medium">Sign in with QR-code</h2>
						<p className="opacity-60">Scan this QR-code with phone, then you can sign in easly</p>
					</div>
				</div>
			</Form>
		</main>
	);
}
