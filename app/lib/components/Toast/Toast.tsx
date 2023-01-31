import React, { useEffect, useRef, useState } from 'react';

type V2ToastComponent = {
	children: React.ReactNode;
	status: 'log' | 'info' | 'error' | 'alert';
	title?: string;
	ms?: number;
	color?: 'black' | 'light';
};

export function Toast(props: V2ToastComponent) {
	const colorPicker = () => {
		switch (props.status) {
			case 'alert':
				return ['bg-yellow-100 text-yellow-900', 'text-yellow-600', 'hover:bg-yellow-500/50'];
			case 'error':
				return ['bg-red-100 text-red-900', 'text-red-600', 'hover:bg-red-500/50'];
			case 'info':
				return ['bg-sky-100 text-sky-900', 'text-sky-600', 'hover:bg-sky-500/50'];
			case 'log':
				return ['bg-lime-100 text-lime-900', 'text-lime-600', 'hover:bg-lime-500/50'];
			default:
				return ['bg-lime-100 text-lime-900', 'text-lime-600', 'hover:bg-lime-500/50'];
		}
	};
	// states
	const [exist, setExist] = useState(false);
	const [defined, setDefined] = useState(false);
	const toastRef = useRef<HTMLDivElement>(null);

	// functions
	const deleteThis = () => {
		setDefined(false);
		setTimeout(() => {
			setExist(false);
		}, 500);
	};
	useEffect(() => {
		setExist(true);
		setTimeout(() => {
			setDefined(true);
		}, 0);
		if (props.ms) {
			setTimeout(() => {
				deleteThis();
			}, props.ms);
		}
	}, [props.ms]);
	return (
		<>
			{exist ? (
				<div
					ref={toastRef}
					className={`pointer-events-auto mb-4 flex w-full max-w-md justify-between ${
						defined ? 'ease-out' : 'translate-y-10 opacity-0 ease-in'
					} duration-400  rounded-lg ${colorPicker()[0]} p-3 transition-all`}
				>
					<div className="flex">
						<span className={`h-7 w-7 select-none text-center text-xl ${colorPicker()[1]} `}>
							􀿌
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

export class Notificate {
	// variables
	position: 'tr' | 'tl' | 'br' | 'bl' = 'tr';

	content: JSX.Element[] = [];

	constructor(position: 'tr' | 'tl' | 'br' | 'bl') {
		this.position = position;
	}
	// functions
	log(message: React.ReactNode, title?: string) {
		this.content.push(
			<Toast status="log" title={title}>
				{message}
			</Toast>
		);
	}

	alert(message: React.ReactNode, title?: string) {
		this.content.push(
			<Toast status="alert" title={title}>
				{message}
			</Toast>
		);
	}

	error(message: React.ReactNode, title?: string) {
		this.content.push(
			<Toast status="error" title={title}>
				{message}
			</Toast>
		);
	}

	info(message: React.ReactNode, title?: string) {
		this.content.push(
			<Toast status="info" title={title}>
				{message}
			</Toast>
		);
	}
	// return a notification center
	element(): JSX.Element {
		const pos: string = 'tr';
		const getToastPosition = () => {
			switch (pos) {
				case 'bl':
					return ['justify-end items-start', 'bottom-0 left-0'];
				case 'br':
					return ['justify-end items-end', 'bottom-0 right-0'];
				case 'tl':
					return ['justify-start items-start', 'top-0 left-0'];
				case 'tr':
					return ['justify-start items-end', 'top-0 right-0'];
				default:
					return ['justify-start items-end', 'top-0 left-0'];
			}
		};
		return (
			<div
				className={`${getToastPosition()[0]} pointer-events-none fixed ${
					getToastPosition()[1]
				} z-40 flex h-full w-full flex-col p-6`}
			>
				{this.content ? this.content : null}
			</div>
		);
	}
}
