import { updateProfile, updatePassword } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { user } from "../../../firebase/auth";

interface Profile {}

function EditorMode(props: any) {
  const usernameRef: any = useRef();
  const submitHdler = () => {
    if (
      user !== undefined &&
      usernameRef.current !== undefined &&
      typeof usernameRef.current.value == "string" &&
      String(usernameRef.current.value).indexOf(" ") <= 0
    ) {
      updateProfile(user, {
        displayName: usernameRef.current.value,
        photoURL: "/image/IMG_0946.PNG",
      })
        .then(function () {
          // プロファイルを更新した後に実行するコード
          alert("Display name updated");
        })
        .catch(function (error) {
          // プロファイルの更新中にエラーが発生した場合に実行するコード
          alert(error);
        });
    } else {
      console.error("Error: user is not defined");
    }
  };
  return (
    <div className="p-6 flex flex-col justify-center">
      <label
        htmlFor="username"
        className="flex w-full items-center border-b-2 pb-1 border-white border-opacity-50 mb-2"
      >
        <span className="text-white mr-3 text-xl font-medium">Name:</span>
        <input
          ref={usernameRef}
          maxLength={13}
          type="text"
          name="username"
          id="username"
          placeholder={user?.displayName}
          className="text-white bg-transparent outline-none w-[inherit]"
        />
      </label>
      <div className="">
        <p className="font-medium text-lg w-full text-white">Introduce</p>
        <p className="text-white text-opacity-60">
          Here is yourselfe's introducing.
        </p>
      </div>
      <button
        onClick={() => submitHdler()}
        className="bg-white mt-6 rounded-md mx-auto py-3 px-5 text-center active:scale-95"
      >
        Change profile
      </button>
    </div>
  );
}

function NormarlMode(props: any) {
  return (
    <div className="p-6">
      <div className="flex w-full items-end border-b-2 border-white border-opacity-50 mb-2">
        {user != undefined && (
          <p className="text-2xl mr-2 font-semibold text-white">
            {user?.displayName}
          </p>
        )}
        <p className="text-white text-opacity-60 font-semibold text-lg w-fit">
          #5w1f3b
        </p>
      </div>
      <div className="">
        <p className="font-medium text-lg w-full text-white">Introduce</p>
        <p className="text-white text-opacity-60">
          Here is yourselfe's introducing.
        </p>
      </div>
    </div>
  );
}

export default function Profile(props: Profile): JSX.Element {
  const [pEditor, setPEditor] = useState(false);

  const UndefinedIcon = () => (
    <span
      translate="no"
      className={`grid select-none text-xl text-white box-content place-items-center
      text-center translate-y-5 bg-gray-400 rounded-xl border-8 border-slate-700
      w-10 h-10`}
    >
      􀉪
    </span>
  );

  const UserIcon = (props: any) => (
    <span className="w-10">
      <img
        src={props.src}
        alt="user's icon"
        loading="lazy"
        className="translate-y-5 rounded-xl border-8 box-content border-slate-700 w-10 h-10"
      />
    </span>
  );

  return (
    <div className="bg-slate-700 min-w-[24rem] grid rounded-lg shadow-gray-500">
      <div className="bg-green-500 m-2 mb-0 h-44 rounded flex justify-between">
        <div className="flex items-end pl-4 w-fit">
          {user?.photoURL != undefined ? (
            <UserIcon src={user.photoURL} />
          ) : (
            <UndefinedIcon />
          )}
        </div>
        <div className="flex w-full pt-3 pr-3 items-start flex-row-reverse">
          {user != undefined && (
            <div className="group">
              <button
                title="edit profile"
                onClick={() => setPEditor(!pEditor)}
                type="button"
                id="edit"
                className="text-xl text-center grid place-items-center text-white
                rounded-md w-9 h-9 bg-black bg-opacity-30 active:bg-opacity-40
                active:scale-95 p-1.5"
              >
                <span
                  className="-translate-y-[1.5px] font-medium select-none"
                  translate="no"
                >
                  {pEditor ? "􀆄" : "􀈎"}
                </span>
              </button>
              <span
                className="absolute before:-z-10 before:-translate-y-2
              before:bg-black before:rounded-sm before:absolute before:w-3
              before:h-3 before:rotate-45 bg-black py-1 px-2 transition-all
              opacity-0 scale-75 -translate-x-2 group-hover:translate-x-0
              group-hover:translate-y-2 group-hover:opacity-100
              group-hover:scale-100 rounded text-white"
              >
                {pEditor ? "Exit profile mode" : "Edit profile"}
              </span>
            </div>
          )}
        </div>
      </div>
      {pEditor ? <EditorMode /> : <NormarlMode />}
    </div>
  );
}
