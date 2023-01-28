type TxtInputComponent = {
	type: 'text' | 'email' | 'password' | 'tel';
	label?: string | JSX.Element;
	name: string;
	readOnly?: boolean;
	disabled?: boolean;
	required?: boolean;
	id?: string;
	autoFocus?: boolean;
	refs?: React.LegacyRef<HTMLInputElement>;
	autoComplete?: 'on' | 'off';
	autoSave?: 'on' | 'off';
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onClick?: React.MouseEventHandler<HTMLInputElement>;
};

export function TxtInput(props: TxtInputComponent) {
	return (
		<label className="my-1 flex flex-col-reverse">
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
				autoComplete={props.autoComplete}
				autoSave={props.autoSave}
				autoFocus={props.autoFocus}
				ref={props.refs}
				id={props.id}
				disabled={props.disabled}
				required={props.required}
				readOnly={props.readOnly}
				type={props.type}
				className={`rounded-md bg-gray-400 bg-opacity-30 p-2 outline-none`}
			/>
			<span className="mb-1 text-lg">
				{props.label}
				{props.required && <span className="ml-0.5 text-red-500">*</span>}
			</span>
		</label>
	);
}
