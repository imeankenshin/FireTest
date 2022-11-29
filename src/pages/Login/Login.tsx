import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export function Login() {
  const labelClass: string = "grid grid-cols-[1fr_2fr] mb-3";
  const inputClass: string =
    "border-b-2 border-solid border-gray-200 px-3 py-1 text-sm outline-0 focus:border-blue-500";

  //TODO: パスワード条件を作成する。以下を条件とする。
  //   - 少なくとも13文字以上のパスワード
  //   - 大文字のアルファベットを含む
  //   - 二つ以上の記号を含む

  const passwordRole: RegExp = /[f]/;
  return (
    <main id="login" className="grid items-center h-screen p-5">
      <form
        action=""
        method="get"
        className="flex flex-col py-8 px-6 m-auto max-w-xl md:px-12 rounded-lg my-6 w-full bg-white shadow-sm border-1.5 border-gray-300"
      >
        <h1 className="text-5xl mb-8">Login</h1>
        <div className="my-4">
          <div className={labelClass}>
            <label htmlFor="email" className="mr-4">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              className={inputClass}
              required
              name="email"
              autoFocus
            />
          </div>
          <div className={labelClass}>
            <label htmlFor="pass" className="mr-4">
              Password:
            </label>
            <input
              type="password"
              id="pass"
              placeholder="password"
              className={inputClass}
              name="password"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-slate-200 active:bg-slate-300 p-3 my-3 mx-8 rounded-md"
        >
          Login
        </button>
      </form>
    </main>
  );
}
