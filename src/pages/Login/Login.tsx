import { useState } from "react";
import { login } from "../../firebase/auth";
import { useAuth } from "../../firebase/Authentication";
import { useNavigate, Link } from "react-router-dom";

export function Login() {
  const labelClass: string = "grid grid-cols-[1fr_2fr] mb-3";
  const inputClass: string =
    "border-b-2 border-solid border-gray-200 px-3 py-2 text-sm outline-0 focus:border-blue-500 autofill:border-blue-300";
  const navigation = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { dispatch } = useAuth();

  const changeHdler = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHdler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      dispatch({ type: "login" });
      navigation("/");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <main id="login" className="grid items-center h-screen p-5">
      <form
        onSubmit={(e) => submitHdler(e)}
        className="flex flex-col py-8 px-6 m-auto max-w-xl md:px-12 rounded-lg my-6 w-full bg-white shadow-sm border-1.5 border-gray-300"
      >
        <h1 className="text-5xl mb-8">Login: {}</h1>
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
              onChange={(e) => changeHdler(e)}
              value={form.email}
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
              onChange={(e) => changeHdler(e)}
              value={form.password}
              required
            />
          </div>
        </div>
        <input
          type="submit"
          className="bg-slate-200 active:bg-slate-300 p-3 my-3 mx-8 rounded-md"
          value="Login"
        />
      </form>
    </main>
  );
}
