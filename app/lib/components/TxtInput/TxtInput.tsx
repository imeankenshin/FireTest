import { useState } from 'react';

type TxtInputComponent = {
	// strings
	name: string;
	id?: string;
	title?: string;
	property?: string;
	label?: string | JSX.Element;
	type: 'text' | 'email' | 'password' | 'tel';
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
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onClick?: React.MouseEventHandler<HTMLInputElement>;
};

export function TxtInput(props: TxtInputComponent) {
	const [show, setShow] = useState(false);
	return (
		<label className={`${props.disabled && 'cursor-not-allowed opacity-80'} flex flex-col-reverse`}>
			<div className="flex w-full items-center justify-end">
				<input
					onChange={(e) => {
						if (props.onChange) {
							props.onChange(e);
						}
					}}
					onFocus={(e) => {
						if (props.onFocus) {
							props.onFocus(e);
						}
					}}
					onClick={(e) => {
						if (props.onClick) {
							props.onClick(e);
						}
					}}
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
					type={show ? 'text' : props.type}
					maxLength={props.maxLength}
					minLength={props.minLength}
					className={`w-full rounded-md bg-gray-400/30 p-2 ${
						props.type == 'password' && 'pr-10'
					} outline-none`}
				/>
				{props.type == 'password' && (
					<button
						type="button"
						title={`${show ? 'Hide' : 'Show'} password`}
						onClick={() => setShow(!show)}
						className="absolute mr-2 h-6 w-6 rounded text-xs outline-none hover:bg-gray-400/60 focus:bg-gray-400/30 active:scale-90"
					>
						{show ? '􀋰' : '􀋮'}
					</button>
				)}
			</div>
			<span className="text-lg">
				{props.label}
				{props.required && <span className="ml-0.5 text-red-500">*</span>}
			</span>
		</label>
	);
}
