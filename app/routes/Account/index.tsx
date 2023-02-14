import { Link, Outlet, useLocation, useNavigate } from '@remix-run/react';
import { updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useRef } from 'react';
import { useAuth } from '~/firebase/authorization';
import { db } from '~/firebase/firebase.config';
import Btn from '~/lib/components/Button/Button';
import { useNotification } from '~/lib/components/Toast/Notification';
import { TxtInput } from '~/lib/components/TxtInput/TxtInput';
import { SideNav } from './SideNav';

export default function Index() {
	const notice = useNotification();
	const navigate = useNavigate();
	const usr = useAuth();
	const nowLocate = useLocation().pathname;
	const usrStore = usr.store;
	const usrProfile = usr.profile;
	//Refs
	const nameRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
	const introduceRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
	const photoRef = useRef<HTMLInputElement>(null);
	async function updateUserProfile(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (usrProfile && nameRef.current && introduceRef.current) {
			const name = nameRef.current.value;
			const intro = introduceRef.current.value;
			const data = {
				name: name == '' ? name : usrProfile.displayName,
				introduce: intro == '' ? intro : usrStore ? usrStore.introduce : 'Hello wolrd!'
			};
			const usrStoreRef = doc(db, 'users', usrProfile.uid);
			await updateDoc(usrStoreRef, data)
				.then(
					async () =>
						await updateProfile(usrProfile, {
							displayName: nameRef.current?.value
						}).then(() => {
							notice.success('Succesfully changed your profile.');
							navigate('');
						})
				)
				.catch((err) => {
					console.error(err);
					notice.error('Something went wrong.');
				});
		} else {
			alert('et');
		}
	}
	console.log(photoRef.current?.files)
	return (
		<main className="flex h-full justify-center">
			<SideNav />
			{usr.profile ? (
				<div className="h-full w-full overflow-y-scroll p-12 scroll:bg-transparent scroll-tb:bg-slate-300/60">
					<Outlet />
					<h1>User account</h1>
					<h2 className="my- border-b-2 border-gray-400/60 ">Profile</h2>
					<form
						onSubmit={async (e) => {
							await updateUserProfile(e);
						}}
					>
						<ul className="max-w-lg [&>li]:my-2">
							<li>
								<input
									type="file" //TODO: Change user's photo via this node.
									onChange={(e) => {
										console.log(typeof e.currentTarget);
									}}
									ref={photoRef}
									name="profile image"
									id="avatar"
								/>
							</li>
							<li>
								<TxtInput
									inputRef={nameRef}
									onChange={(e) => {
										console.log(e);
									}}
									minLength={3}
									maxLength={15}
									id="name"
									name="name"
									type="text"
									label="name"
									placeholder={usr.profile.displayName ? usr.profile.displayName : 'null'}
								/>
							</li>
							<li>
								<TxtInput
									id="introduce"
									inputRef={introduceRef}
									minLength={1}
									maxLength={150}
									name="introduce"
									resizable="y"
									rows={4}
									placeholder={usrStore ? usrStore.introduce : 'null'}
									type="multiline"
									label="introduce"
								/>
							</li>
						</ul>
						<Btn size="md" type="submit">
							Update
						</Btn>
					</form>
					<h2 className="my- border-b-2 border-gray-400/60">Account</h2>
					<ul className="[&>li]:my-4">
						<li>
							<Btn type="button" size="lg">
								Delete account
							</Btn>
						</li>
					</ul>
				</div>
			) : (
				<div className="h-full w-full overflow-y-scroll p-12 scroll:bg-transparent scroll-tb:bg-slate-300/60">
					<h1>You're not Signing in.</h1>
					<p>You need to sign in with you account first.</p>
					<Link to={'/signin?next=' + nowLocate}>click here to sing in!</Link>
					<Btn
						onClick={() => {
							notice.log('hello wolrd');
						}}
						type={'button'}
						size={'sm'}
					>
						Log
					</Btn>
					<Btn
						onClick={() => {
							notice.info('information');
						}}
						type={'button'}
						size={'sm'}
					>
						info
					</Btn>
					<Btn
						onClick={() => {
							notice.warn('日本語で遊ぼう');
						}}
						type={'button'}
						size={'sm'}
					>
						warn
					</Btn>
					<Btn
						onClick={() => {
							notice.error('something went wrong.');
						}}
						type={'button'}
						size={'sm'}
					>
						error
					</Btn>
					<Btn
						onClick={() => {
							notice.success('success login');
						}}
						type={'button'}
						size={'sm'}
					>
						success
					</Btn>
				</div>
			)}
		</main>
	);
}
