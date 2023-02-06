import React, { useState } from 'react';
type V2TxtInputComponent = {
	// strings
	name: string;
	id?: string;
	title?: string;
	property?: string;
	placeholder?: string;
	description?: string;
	label: string | JSX.Element;
	type: 'text' | 'url' | 'password' | 'tel' | 'email' | 'number' | 'multiline';
	autoComplete?: 'on' | 'off';
	autoSave?: 'on' | 'off';
	resizable?: 'both' | 'x' | 'y' | 'none';
	value?: string | number | readonly string[];
	defultValue?: string | number | readonly string[];
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
	inputRef?: React.LegacyRef<HTMLInputElement & HTMLTextAreaElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onLoad?: React.ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onClick?: React.MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onMouseEnter?: React.MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onMouseLeave?: React.MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export function TxtInput(props: V2TxtInputComponent) {
	const [value, setValue] = useState<string | number | readonly string[] | undefined>([]);
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
						defaultValue={props.defultValue}
						value={(props.value, value)}
						id={props.id}
						cols={props.cols}
						rows={props.rows}
						onFocus={props.onFocus}
						onMouseEnter={props.onMouseEnter}
						onMouseLeave={props.onMouseLeave}
						onChange={
							(props.onChange,
							(e) => {
								setValue(e.target.value);
							})
						}
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
						onChange={
							(props.onChange,
							(e) => {
								setValue(e.target.value);
							})
						}
						defaultValue={props.defultValue}
						value={(props.value, value)}
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
							value && value.toString.length > 0 && 'pr-10'
						} ${props.type == 'password' && 'pr-10'} outline-none ring-sky-400 focus:ring-2`}
					/>
					<div className="absolute mr-2 flex h-6 text-base font-medium text-gray-300">
						{props.type == 'password' ? (
							<button
								type="button"
								title={`${show ? 'Hide' : 'Show'} password`}
								onClick={() => setShow(!show)}
								className="w-6 rounded outline-none focus-visible:bg-gray-500/30 active:scale-90"
							>
								{show ? '􀋰' : '􀋮'}
							</button>
						) : (
							value &&
							value.toString().length > 0 && (
								<button
									type="reset"
									onClick={() => {
										setValue('');
									}}
									className="w-6 rounded font-black outline-none focus-visible:bg-gray-600/30 active:scale-90"
								>
									􀁡
								</button>
							)
						)}
					</div>
				</div>
			)}

			<span className="my-1.5 text-lg font-medium">
				{props.label}
				{props.required && <span className="ml-0.5 text-red-500">*</span>}
				{props.maxLength && (
					<span
						className={`${
							value && value.toString().length == props.maxLength ? 'text-amber-200' : 'font-normal'
						} ml-3 text-sm`}
					>
						{value && value.toString().length > 0 ? value.toString().length : 0}/{props.maxLength}
					</span>
				)}
			</span>
		</label>
	);
}
