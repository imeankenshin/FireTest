import { updateProfile, updatePassword } from "firebase/auth";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { user } from "../../../firebase/auth";
import { Firebase_auth } from "../../../firebase/firebase.config";

interface Profile {}

function EditorMode(props: any) {
  const usernameRef: any =
    useRef<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >
    >();
  const submitHdler = () => {
    if (
      user !== undefined &&
      usernameRef.current !== undefined &&
      typeof usernameRef.current.value == "string"
    ) {
      updateProfile(user, {
        displayName: usernameRef.current.value,
      })
        .then(function () {
          // プロファイルを更新した後に実行するコード
          console.log("Display name updated");
        })
        .catch(function (error) {
          // プロファイルの更新中にエラーが発生した場合に実行するコード
          console.error(error);
        });
    } else {
      console.error("Error: user is not defined");
    }
  };
  return (
    <div className="flex flex-col">
      <label htmlFor="username flex items-center">
        <span className="mr-3">displayname:</span>
        <input
          type="text"
          ref={usernameRef}
          placeholder={props.userName}
          name="username"
          id="username"
          className="px-2 py-1 border-b-2 outline-none focus:border-sky-400"
        />
      </label>
      <label htmlFor="username flex items-center">
        <span className="mr-3">image:</span>
        <input
          type="file"
          name="avator"
          id="avator"
          className="px-2 py-1 border-b-2 outline-none focus:border-sky-400"
        />
      </label>
      <button type="button" onClick={submitHdler}>
        Submit
      </button>
      <p className="text-gray-500">{props.email}</p>
    </div>
  );
}
function NormalMode(props: any) {
  return (
    <div className="flex flex-col">
      <h2 className="font-semibold text-3xl">{user?.displayName}</h2>
      <p className="text-gray-500">{user?.email}</p>
    </div>
  );
}

export default function Profile(props: Profile): JSX.Element {
  const [pEditor, setPEditor] = useState(false);

  return (
    <div className="sm:col-span-1 shadow-md lg:col-span-2 border-2 border-solid border-neutral-200 transition-all p-6 rounded-md sm:mx-3">
      <div className="rounded bg-gray-400 p-2 overflow-hidden -m-4 mb-0 aspect-rect">
        <span className="absolute grid place-items-center select-none text-white font-['SF_Pro'] w-10 h-10 rounded-full text-lg bg-slate-600">
          􀉪
        </span>
      </div>
      <div className="mt-3 child:mt-3 flex justify-between">
        {pEditor ? <EditorMode /> : <NormalMode />}
        <button
          type="button"
          onClick={() => setPEditor(!pEditor)}
          className="text-xl bg-slate-700 bg-opacity-50 active:opacity-70 px-3 py-1 rounded"
        >
          􀣌
        </button>
      </div>
    </div>
  );
}
