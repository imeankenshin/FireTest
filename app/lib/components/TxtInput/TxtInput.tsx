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
	type: 'text' | 'url' | 'password' | 'tel' | 'email' | 'number' | 'multiline';
	autoComplete?: 'on' | 'off';
	autoSave?: 'on' | 'off';
	resizable?: 'both' | 'x' | 'y' | 'none';
	value?: string | number | readonly string[] | undefined;
	// booleans
	readOnly?: boolean;
	disabled?: boolean;
	required?: boolean;
	autoFocus?: boolean;
	// numbers
	tabIndex?: number;
	maxLength?: number;
	minLength?: number;
	cols?: number;
	rows?: number;
	// functions
	inputRef?: React.LegacyRef<any>;
	onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onLoad?: React.ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onClick?: React.MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onMouseEnter?: React.MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onMouseLeave?: React.MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export function TxtInput(props: V2TxtInputComponent) {
	const [show, setShow] = useState(false);
	const resize = () => {
		switch (props.resizable) {
			case 'none':
				return 'resize-none';
			case 'both':
				return 'resize';
			case 'x':
				return 'resize-x';
			case 'y':
				return 'resize-y';
			default:
				return 'resize';
		}
	};
	return (
		<label className={`${props.disabled && 'cursor-not-allowed opacity-80'} flex flex-col-reverse`}>
			{props.type == 'multiline' ? (
				<div>
					<textarea
						name={props.name}
						value={props.value}
						id={props.id}
						cols={props.cols}
						rows={props.rows}
						onFocus={props.onFocus}
						onMouseEnter={props.onMouseEnter}
						onMouseLeave={props.onMouseLeave}
						onClick={props.onClick}
						onLoad={props.onLoad}
						property={props.property}
						autoComplete={props.autoComplete}
						autoSave={props.autoSave}
						autoFocus={props.autoFocus}
						ref={props.inputRef}
						title={props.title}
						tabIndex={props.tabIndex}
						disabled={props.disabled}
						required={props.required}
						readOnly={props.readOnly}
						placeholder={props.placeholder}
						maxLength={props.maxLength}
						minLength={props.minLength}
						className={`min-h-[2.5rem] w-full rounded-md bg-gray-400/30 py-2 px-2.5 outline-none scroll:w-0 scroll:bg-transparent hover:scroll:w-2 scroll-tb:rounded-full scroll-tb:bg-gray-400/60 ${resize()} ring-sky-400 focus:ring-2`}
					/>
				</div>
			) : (
				<div className="flex items-center justify-end">
					<input
						onChange={(e) => {
							if (props.onChange) {
								props.onChange(e);
							}
						}}
						value={props.value}
						onFocus={props.onFocus}
						onMouseEnter={props.onMouseEnter}
						onMouseLeave={props.onMouseLeave}
						onClick={props.onClick}
						onLoad={props.onLoad}
						property={props.property}
						autoComplete={props.autoComplete}
						autoSave={props.autoSave}
						autoFocus={props.autoFocus}
						ref={props.inputRef}
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
						} outline-none ring-sky-400 focus:ring-2`}
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
			)}

			<span className="my-1.5 text-lg font-medium">
				{props.label}
				{props.required && <span className="ml-0.5 text-red-500">*</span>}
			</span>
		</label>
	);
}
