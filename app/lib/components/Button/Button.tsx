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
	const sm = 'text-sm ';
	const md = 'px-3';
	const lg = '';
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
			} mx-2 rounded-md bg-violet-500 p-2 font-medium active:scale-95`}
		>
			{props.children}
		</button>
	);
}

export default Btn;
