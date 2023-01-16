import { useRef } from "react";
import { login } from "../../firebase/auth";
import { useAuth } from "../../firebase/Authentication";
import { useNavigate, Link } from "react-router-dom";
import { Btn } from "../../assets/components/Button/Button";
import { useState } from "react";

export function Login() {
  const labelClass = "grid grid-cols-[1fr_2fr] mb-3";
  const inputClass =
    "border-b-2 border-solid border-gray-200 px-3 py-2 text-sm outline-0 focus:border-blue-500 autofill:border-blue-300";
  const [isLogging, setLogging] = useState(false);
  const navigation = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch } = useAuth();

  const submitHdler = async (e) => {
    setLogging(true);
    e.preventDefault();
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      dispatch({ type: "login" });
      navigation("/");
    } catch (e) {
      alert(e);
      setLogging(false);
    }
  };

  return (
    <main id="login" className="grid h-screen items-center p-5">
      <form
        onSubmit={(e) => submitHdler(e)}
        className="m-auto my-6 flex w-full max-w-xl flex-col rounded-lg bg-slate-800 py-8 px-6 shadow-md md:px-12"
      >
        <h1 className="mb-8 text-5xl font-medium">Login</h1>
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
        <Btn type="submit">{isLogging ? "Loading..." : "Login"}</Btn>
        <p>
          if you not have an account yet, <Link to="/signin">click here</Link>{" "}
          to signup.
        </p>
      </form>
    </main>
  );
}
