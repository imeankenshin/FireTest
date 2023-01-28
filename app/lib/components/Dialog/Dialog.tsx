export function Dialog(props: any) {
	return (
		<div
			role="dialog"
			className="fixed top-0 left-0 z-50 grid h-screen w-screen place-items-center bg-black/30 backdrop-blur-md"
			aria-label="j"
		>
			<div className="bg-slate-800">{props.children}</div>
		</div>
	);
}
