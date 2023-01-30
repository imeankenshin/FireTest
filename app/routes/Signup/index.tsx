import { Form, Link, useNavigate } from '@remix-run/react';
import React, { useRef, useState } from 'react';
import { SignUp } from '~/firebase/auth';
import Btn from '~/lib/components/Button/Button';
import { TxtInput } from '~/lib/components/TxtInput/TxtInput';

export default function Index() {
	//Refs
	const [emailRef, passwordRef, nameRef] = [
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null),
		useRef<HTMLInputElement>(null)
	];
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	async function submitHdler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (emailRef.current && passwordRef.current && nameRef.current) {
			setLoading(true);
			await SignUp(nameRef.current.value, emailRef.current.value, passwordRef.current.value).then(
				(res) => {
					if (res) {
						navigate('/');
					}
					setLoading(false);
				}
			);
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
				className="mx-12 -mt-4 flex w-fit max-w-3xl rounded-xl bg-slate-700 p-8 shadow-xl"
			>
				<div className="flex w-full flex-col">
					<h1 className="mb-1 text-4xl font-semibold">Sign up</h1>
					<p className="mb-2 opacity-60">Enter your email & password to sign in.</p>
					<TxtInput
						autoFocus
						refs={nameRef}
						id="name"
						required
						type="text"
						label={'name'}
						name="name"
					/>
					<TxtInput
						autoFocus
						refs={emailRef}
						id="email"
						required
						type="email"
						label={'email'}
						name="email"
					/>
					<TxtInput
						refs={passwordRef}
						required
						id="pass"
						type="password"
						label="password"
						name="password"
					/>
					<div className="mt-2 mb-3 grid">
						<Btn type="submit">{loading ? 'wait...' : 'Sign up'}</Btn>
					</div>
					<p>
						If you already have an account, <Link to="/signin">just click here to sign in</Link>
					</p>
				</div>
			</Form>
		</main>
	);
}
