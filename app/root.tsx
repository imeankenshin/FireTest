import type { MetaFunction, LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { AuthContextProvider } from './firebase/authorization';
import { HeaderNav } from './layout/HeaderNav';
import { Notificate } from './lib/components/Toast/Toast';
import styles from './tailwind.css';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'New Remix App',
	viewport: 'width=device-width,initial-scale=1'
});

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
	const reminder = new Notificate('tr');
	reminder.log('hello wolrd');
	return (
		<html lang="en" className="html">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="min-h-screen overflow-hidden bg-slate-700">
				<AuthContextProvider>
					<reminder.element />
					<HeaderNav />
					<Outlet />
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</AuthContextProvider>
			</body>
		</html>
	);
}
