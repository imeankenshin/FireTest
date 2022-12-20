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
    <div className="flex flex-col justify-center p-6">
      <label
        htmlFor="username"
        className="mb-2 flex w-full items-center border-b-2 border-white border-opacity-50 pb-1"
      >
        <span className="mr-3 text-xl font-medium text-white">Name:</span>
        <input
          ref={usernameRef}
          maxLength={13}
          type="text"
          name="username"
          id="username"
          placeholder={user?.displayName}
          className="w-[inherit] bg-transparent text-white outline-none"
        />
      </label>
      <div className="">
        <p className="w-full text-lg font-medium text-white">Introduce</p>
        <p className="text-white text-opacity-60">
          Here is yourselfe's introducing.
        </p>
      </div>
      <button
        onClick={() => submitHdler()}
        className="mx-auto mt-6 rounded-md bg-white py-3 px-5 text-center active:scale-95"
      >
        Change profile
      </button>
    </div>
  );
}

function NormarlMode(props: any) {
  return (
    <div className="p-6">
      <div className="mb-2 flex w-full items-end border-b-2 border-white border-opacity-50">
        {user != undefined && (
          <p className="mr-2 text-2xl font-semibold text-white">
            {user?.displayName}
          </p>
        )}
        <p className="w-fit text-lg font-semibold text-white text-opacity-60">
          #5w1f3b
        </p>
      </div>
      <div className="">
        <p className="w-full text-lg font-medium text-white">Introduce</p>
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
      className={`box-content grid h-10 w-10 translate-y-5 select-none
      place-items-center rounded-xl border-8 border-slate-700 bg-gray-400 text-center
      text-xl text-white`}
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
        className="box-content h-10 w-10 translate-y-5 rounded-xl border-8 border-slate-700"
      />
    </span>
  );

  return (
    <div className="grid min-w-[24rem] rounded-lg bg-slate-700 shadow-gray-500">
      <div className="m-2 mb-0 flex h-44 justify-between rounded bg-green-500">
        <div className="flex w-fit items-end pl-4">
          {user?.photoURL != undefined ? (
            <UserIcon src={user.photoURL} />
          ) : (
            <UndefinedIcon />
          )}
        </div>
        <div className="flex w-full flex-row-reverse items-start pt-3 pr-3">
          {user != undefined && (
            <div className="group">
              <button
                title="edit profile"
                onClick={() => setPEditor(!pEditor)}
                type="button"
                id="edit"
                className="grid h-9 w-9 place-items-center rounded-md
                bg-black bg-opacity-30 p-1.5 text-center text-xl text-white
                active:scale-95 active:bg-opacity-40"
              >
                <span
                  className="-translate-y-[1.5px] select-none font-medium"
                  translate="no"
                >
                  {pEditor ? "􀆄" : "􀈎"}
                </span>
              </button>
              <span
                className="absolute -translate-x-2 scale-75
              rounded bg-black py-1 px-2
              text-white opacity-0 transition-all before:absolute before:-z-10 before:h-3
              before:w-3 before:-translate-y-2 before:rotate-45 before:rounded-sm
              before:bg-black group-hover:translate-x-0
              group-hover:translate-y-2 group-hover:scale-100 group-hover:opacity-100"
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
