import React, { createContext, useContext, useState } from 'react';
import { Toast } from './Toast';

const defaultValue: {
	log: (message: React.ReactNode, title?: string | undefined) => void;
	info: (message: React.ReactNode, title?: string | undefined) => void;
	error: (message: React.ReactNode, title?: string | undefined) => void;
	warn: (message: React.ReactNode, title?: string | undefined) => void;
	success: (message: React.ReactNode, title?: string | undefined) => void;
} = {
	log: () => {},
	info: () => {},
	error: () => {},
	warn: () => {},
	success: () => {}
};

const NotificationContext = createContext(defaultValue);

type V2ToastComponent = {
	message: React.ReactNode;
	status: 'log' | 'info' | 'error' | 'warn' | 'success';
	transition?: 'left' | 'right' | 'top' | 'bottom';
	title?: string;
};

type V2NotificationCenterComponent = {
	children: React.ReactNode;
	position?: 'tl' | 'tr' | 'bl' | 'br';
};

export function NCenter(props: V2NotificationCenterComponent): JSX.Element {
	// states
	const [notes, setNotes] = useState<V2ToastComponent[]>([]);
	const pickPosition = () => {
		switch (props.position) {
			case 'bl':
				return 'left-0 bottom-0';
			case 'br':
				return 'right-0 bottom-0';
			case 'tl':
				return 'left-0 top-0';
			case 'tr':
				return 'right-0 top-0';
			default:
				return 'bottom-0 right-0';
		}
	};
	// functions
	// base
	function sendNotification(
		message: React.ReactNode,
		title?: string,
		status?: 'log' | 'info' | 'error' | 'warn' | 'success'
	) {
		const result: V2ToastComponent = {
			message: message,
			status: status ? status : 'log',
			title: title
		};
		setNotes([...notes, result]);
	}
	// log
	function log(message: React.ReactNode, title?: string) {
		sendNotification(message, title, 'log');
	}
	// info
	function info(message: React.ReactNode, title?: string) {
		sendNotification(message, title, 'info');
	}
	// error
	function error(message: React.ReactNode, title?: string) {
		sendNotification(message, title, 'error');
	}
	// warn
	function warn(message: React.ReactNode, title?: string) {
		sendNotification(message, title, 'warn');
	}
	// success
	function success(message: React.ReactNode, title?: string) {
		sendNotification(message, title, 'success');
	}
	return (
		<NotificationContext.Provider
			value={{ log: log, info: info, error: error, warn: warn, success: success }}
		>
			<div
				className={`pointer-events-none fixed ${pickPosition()} z-50 flex h-screen w-full max-w-md flex-col items-end
				justify-end overflow-hidden p-8 scroll:bg-transparent scroll-tb:bg-gray-300/60`}
			>
				{notes.map((value, idx) => (
					<Toast
						status={value.status}
						onClose={() => setNotes(notes.filter((fruit, index) => fruit !== notes[idx]))}
						transition="right"
						title={value.title}
						key={idx}
					>
						{value.message}
					</Toast>
				))}
			</div>
			{props.children}
		</NotificationContext.Provider>
	);
}

export function useNotification() {
	return useContext(NotificationContext);
}
