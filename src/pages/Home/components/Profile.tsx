interface Profile {
  userName: string | null | undefined;
  email: string | null | undefined;
}

export default function Profile(props: Profile): JSX.Element {
  return (
    <div className="sm:col-span-1 shadow-md lg:col-span-2 border-2 border-solid border-neutral-200 p-6 rounded-md sm:mx-3">
      <div className="rounded bg-gray-400 p-2 overflow-hidden -m-4 mb-0 aspect-rect">
        <span className="absolute grid place-items-center select-none text-white font-['SF_Pro'] w-10 h-10 rounded-full text-lg bg-slate-600">
          􀉪
        </span>
      </div>
      <div className="mt-3 child:mt-3">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-3xl">
              {props.userName != null ? (
                props.userName
              ) : (
                <span className="text-gray-400">undefined</span>
              )}
            </h2>
            <button
              type="button"
              className="text-xl bg-slate-700 bg-opacity-50 active:opacity-70 px-3 py-1 rounded"
            >
              􀣌
            </button>
          </div>
          <p className="text-gray-500">{props.email}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1 text-xl">Detail</h3>
          <ul className="ml-4 child:text-sm child:mb-1">
            <li>場所: place</li>
            <li>趣味: hobby</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
