import React from 'react';

type V2ButtonComponent = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	title?: string;
	id?: string;
	type: 'button' | 'submit' | 'reset';
	size: 'sm' | 'md' | 'lg';
	name?: string;
	children?: React.ReactNode;
	fullWidth?: boolean;
};

function Btn(
	props: V2ButtonComponent = {
		size: 'md',
		type: 'button'
	}
) {
	// Btn sizes
	const sm = 'text-sm  p-2 ';
	const md = 'px-3 py-2';
	const lg = 'px-4 py-3.5';
	const sizeSelector = () => {
		switch (props.size) {
			case 'lg':
				return lg;
			case 'md':
				return md;
			case 'sm':
				return sm;
		}
	};
	return (
		<button
			onClick={props.onClick}
			title={props.title}
			id={props.id}
			type={props.type}
			name={props.name}
			className={`${sizeSelector()} ${
				props.fullWidth && 'w-full'
			} mx-2 rounded-md bg-violet-500 font-medium active:scale-95`}
		>
			{props.children}
		</button>
	);
}

export default Btn;
