import { useNavigate } from '@remix-run/react';
import { useState } from 'react';
import { signOut } from '~/firebase/auth';

export default function Index() {
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	signOut()
		.then(() => {
			navigate('/');
		})
		.catch((err) => {
			setLoading(false);
		});
	return (
		<main>
			<h1>{loading ? 'Loading...' : 'Oops, something went wrong.'}</h1>
		</main>
	);
}
