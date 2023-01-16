export function Tgle(props: any) {
  return (
    <label htmlFor={props.id} className="flex cursor-pointer">
      <input
        type="checkbox"
        name={props.name}
        ref={props.ref}
        checked={props.checked}
        readOnly={props.readOnly}
        disabled={props.disabled}
        id={props.id}
        className="peer absolute h-0 w-0"
      />
      <span className="group flex items-center justify-center rounded-lg bg-gray-400 py-1 px-2 peer-checked:bg-purple-500">
        <span
          className="grid h-5 w-5 -translate-x-1 place-items-center rounded-md bg-white transition-all duration-200
        before:w-2.5 before:rounded-full before:border-[1px] before:border-gray-400 peer-checked:group-[]:translate-x-1 peer-checked:group-[]:before:h-2.5 peer-checked:group-[]:before:border-2 peer-checked:group-[]:before:border-purple-500"
        />
      </span>
      <span>{props.label}</span>
    </label>
  );
}
