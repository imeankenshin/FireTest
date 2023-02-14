import { useNavigate } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { signOut } from '~/firebase/auth';
import { useNotification } from '~/lib/components/Toast/Notification';

export default function Index() {
	const [loading, setLoading] = useState(true);
	const [done, setDone] = useState(false);
	const navigate = useNavigate();
	const notice = useNotification();
	useEffect(() => {
		signOut().then((res) => {
			if (res && !done) {
				navigate('/');
				notice.success('Successfully logged out.');
				setDone(true);
			} else {
				setLoading(false);
			}
		});
	}, [done, navigate, notice]);
	return (
		<main>
			<h1>{loading ? 'Loading...' : 'Oops, something went wrong.'}</h1>
		</main>
	);
}
