import React from 'react';

type V2ButtonComponent = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	title?: string;
	id?: string;
	type?: 'button' | 'submit' | 'reset';
	name?: string;
	children?: React.ReactNode;
};

function Btn(props: V2ButtonComponent) {
	return (
		<button
			onClick={props.onClick}
			title={props.title}
			id={props.id}
			type={props.type}
			name={props.name}
			className="mx-2 rounded-md bg-violet-500 py-2.5 px-3 active:scale-95"
		>
			{props.children}
		</button>
	);
}

export default Btn;
