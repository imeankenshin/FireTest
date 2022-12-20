import { useRef } from "react";
import { singup } from "../../firebase/auth";
import { useAuth } from "../../firebase/Authentication";
import { useNavigate, Link } from "react-router-dom";

export function Signin() {
  const labelClass = "grid grid-cols-[1fr_2fr] mb-3";
  const inputClass =
    "border-b-2 border-solid border-gray-200 px-3 py-2 text-sm outline-0 focus:border-blue-500 autofill:border-blue-300";
  const navigation = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch } = useAuth();

  const submitHdler = async (e) => {
    e.preventDefault();
    try {
      await singup(emailRef.current.value, passwordRef.current.value);
      dispatch({ type: "signup" });
      navigation("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main id="login" className="grid items-center h-screen p-5">
      <form
        onSubmit={(e) => submitHdler(e)}
        className="flex flex-col py-8 px-6 m-auto max-w-xl md:px-12 rounded-lg my-6 w-full bg-white border-2 shadow-md border-gray-300"
      >
        <h1 className="text-5xl mb-8">Signin: {}</h1>
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
          className="bg-slate-200 active:bg-slate-300 p-3 my-3 mx-8 rounded-md"
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
