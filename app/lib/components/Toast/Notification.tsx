import React, { createContext, useContext, useState } from 'react';
import { createRoot } from 'react-dom/client';
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

export function NotificationCenter(props: any): JSX.Element {
	// states
	const [notes, setNotes] = useState<V2ToastComponent[]>([]);
	// functions
	// base
	function logBase(
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
		logBase(message, title, 'log');
	}
	// info
	function info(message: React.ReactNode, title?: string) {
		logBase(message, title, 'info');
	}
	// error
	function error(message: React.ReactNode, title?: string) {
		logBase(message, title, 'error');
	}
	// warn
	function warn(message: React.ReactNode, title?: string) {
		logBase(message, title, 'warn');
	}
	// success
	function success(message: React.ReactNode, title?: string) {
		logBase(message, title, 'success');
	}
	return (
		<NotificationContext.Provider
			value={{ log: log, info: info, error: error, warn: warn, success: success }}
		>
    <div className="pointer-events-none fixed bottom-0 right-0 z-50 flex h-screen w-full max-w-md flex-col items-end justify-end p-8">
				{notes.map((value, idx) => (
					<Toast status={value.status} onClose={()=>setNotes(notes.filter((fruit, index) => (fruit !== notes[idx])))} transition="right" title={value.title} key={idx} s={5}>
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
