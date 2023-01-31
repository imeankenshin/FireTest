import React, { useState } from 'react';

type V2TxtInputComponent = {
	// strings
	name: string;
	id?: string;
	title?: string;
	property?: string;
	placeholder?: string;
	description?: string;
	label?: string | JSX.Element;
	type: React.HTMLInputTypeAttribute;
	autoComplete?: 'on' | 'off';
	autoSave?: 'on' | 'off';
	// booleans
	readOnly?: boolean;
	disabled?: boolean;
	required?: boolean;
	autoFocus?: boolean;
	// numbers
	tabIndex?: number;
	maxLength?: number;
	minLength?: number;
	// functions
	refs?: React.LegacyRef<HTMLInputElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onLoad?: React.ReactEventHandler<HTMLInputElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onClick?: React.MouseEventHandler<HTMLInputElement>;
	onMouseEnter?: React.MouseEventHandler<HTMLInputElement>;
	onMouseLeave?: React.MouseEventHandler<HTMLInputElement>;
};

export function TxtInput(props: V2TxtInputComponent) {
	const [show, setShow] = useState(false);
	return (
		<label className={`${props.disabled && 'cursor-not-allowed opacity-80'} flex flex-col-reverse`}>
			<div className="flex items-center justify-end">
				<input
					onChange={(e) => {
						if (props.onChange) {
							props.onChange(e);
						}
					}}
					onFocus={props.onFocus}
					onMouseEnter={props.onMouseEnter}
					onMouseLeave={props.onMouseLeave}
					onClick={props.onClick}
					onLoad={props.onLoad}
					property={props.property}
					autoComplete={props.autoComplete}
					autoSave={props.autoSave}
					autoFocus={props.autoFocus}
					ref={props.refs}
					id={props.id}
					title={props.title}
					tabIndex={props.tabIndex}
					disabled={props.disabled}
					required={props.required}
					readOnly={props.readOnly}
					placeholder={props.placeholder}
					type={show ? 'text' : props.type}
					maxLength={props.maxLength}
					minLength={props.minLength}
					className={`w-full rounded-md bg-gray-400/30 py-2 px-2.5 ${
						props.type == 'password' && 'pr-10'
					} outline-none ring-blue-400 focus-within:ring-2`}
				/>
				{props.type == 'password' && (
					<button
						type="button"
						title={`${show ? 'Hide' : 'Show'} password`}
						onClick={() => setShow(!show)}
						className="absolute mr-2.5 h-6 w-6 rounded text-xs outline-none hover:bg-gray-400/60 focus:bg-gray-400/30 active:scale-90"
					>
						{show ? '􀋰' : '􀋮'}
					</button>
				)}
			</div>
			<span className="my-1.5 text-lg font-medium">
				{props.label}
				{props.required && <span className="ml-0.5 text-red-500">*</span>}
			</span>
		</label>
	);
}
