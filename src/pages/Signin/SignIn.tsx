import { useRef } from "react";
import { singup } from "../../firebase/auth";
import { useAuth } from "../../firebase/Authentication";
import { useNavigate, Link } from "react-router-dom";

export function Signin() {
  const labelClass = "grid grid-cols-[1fr_2fr] mb-3";
  const inputClass =
    "border-b-2 border-solid border-gray-200 px-3 py-2 text-sm outline-0 focus:border-blue-500 autofill:border-blue-300";
  const navigation = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useAuth();

  const submitHdler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (emailRef.current !== null && passwordRef.current !== null) {
        await singup(emailRef.current.value, passwordRef.current.value);
        dispatch({ type: "signup" });
        navigation("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main id="login" className="grid h-screen items-center p-5">
      <form
        onSubmit={(e) => submitHdler(e)}
        className="m-auto my-6 flex w-full max-w-xl flex-col rounded-lg border-2 border-gray-300 bg-white py-8 px-6 shadow-md md:px-12"
      >
        <h1 className="mb-8 text-5xl">Signin: {}</h1>
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
              ref={emailRef}
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
              ref={passwordRef}
              required
            />
          </div>
        </div>
        <input
          type="submit"
          className="my-3 mx-8 rounded-md bg-slate-200 p-3 active:bg-slate-300"
          value="Signin"
        />
        <p>
          If you are already have an account,
          <Link to="./Login"> login</Link>.
        </p>
      </form>
    </main>
  );
}
