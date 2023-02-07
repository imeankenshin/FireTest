import React, { useCallback, useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';

type V2ToastComponent = {
	children: React.ReactNode;
	status: 'log' | 'info' | 'error' | 'warn' | 'success';
	transition?: 'left' | 'right' | 'top' | 'bottom';
	title?: string;
	s?: number;
	color?: 'black' | 'light';
	icon?: React.ReactNode;
	// functions
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	onClose?: (() => void) | void;
};
/** This is a Voyager2's component for notice.
 *@param children the content of this component
 */
export function Toast(props: V2ToastComponent) {
	const colorPicker = () => {
		switch (props.status) {
			case 'warn':
				return ['bg-yellow-100 text-yellow-900', 'text-yellow-600', 'hover:bg-yellow-500/50'];
			case 'error':
				return ['bg-red-100 text-red-900', 'text-red-600', 'hover:bg-red-500/50'];
			case 'info':
				return ['bg-sky-100 text-sky-900', 'text-sky-600', 'hover:bg-sky-500/50'];
			case 'success':
				return ['bg-lime-100 text-lime-900', 'text-lime-600', 'hover:bg-lime-500/50'];
			case 'log':
				return ['bg-gray-100 text-gray-900', 'text-gray-600', 'hover:bg-gray-500/50'];
			default:
				return ['bg-gray-100 text-gray-900', 'text-gray-600', 'hover:bg-gray-500/50'];
		}
	};
	const transitionPicker = () => {
		switch (props.transition) {
			case 'bottom':
				return 'translate-y-7';
			case 'top':
				return '-translate-y-7';
			case 'left':
				return '-translate-x-12';
			case 'right':
				return 'translate-x-12';
			default:
				return 'translate-y-7';
		}
	};
	// states
	const [exist, setExist] = useState(false);
	const [defined, setDefined] = useState(false);
	const toastRef = useRef<HTMLDivElement>(null);

	// functions
	const deleteThis = useCallback(() => {
		setDefined(false);
		setTimeout(() => {
			setExist(false);
			if (props.onClose) {
				props.onClose();
			}
		}, 200);
	}, [props]);
	// useEffect
	useEffect(() => {
		setExist(true);
		setTimeout(() => {
			setDefined(true);
		}, 10);
		if (props.s) {
			setTimeout(() => {
				deleteThis();
			}, props.s * 1000);
		}
	}, [deleteThis, props.s]);
	return (
		<>
			{exist ? (
				<div
					role="alert"
					onClick={props.onClick}
					ref={toastRef}
					className={`pointer-events-auto mb-4 flex w-full max-w-md ${
						props.onClick && 'cursor-pointer'
					} justify-between ${
						defined
							? 'ease-out'
							: transitionPicker() + ' pointer-events-none -mt-[4.25rem] opacity-0 ease-in'
					} rounded-lg duration-200 ${colorPicker()[0]} p-3 transition-all`}
				>
					<div className="flex">
						<span className={`h-7 w-7 select-none text-center text-xl ${colorPicker()[1]} `}>
							{props.icon ? props.icon : '􀿌'}
						</span>
						<div className="mx-2.5">
							<span className={`flex items-center text-lg font-medium`}>{props.title}</span>
							<span>{props.children}</span>
						</div>
					</div>
					<button
						onClick={deleteThis}
						className={`h-7 w-7 rounded text-base ${colorPicker()[2]} active:scale-90`}
					>
						􀆄
					</button>
				</div>
			) : null}
		</>
	);
}

export function NotificationCenter(props: any): JSX.Element {
	render(
		<div className="pointer-events-none fixed bottom-0 right-0 z-50 flex h-screen w-full max-w-sm flex-col items-end justify-end p-8"></div>,
		document.getElementById('root')
	);
	return <React.Fragment />;
}
