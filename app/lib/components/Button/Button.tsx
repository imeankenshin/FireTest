import React from 'react';

function Btn(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			onClick={props.onClick}
			title={props.title}
			id={props.id}
			type={props.type}
			name={props.name}
			className="mx-2 rounded bg-violet-500 py-2.5 px-5 active:scale-95"
		>
			{props.children}
		</button>
	);
}

export default Btn;
