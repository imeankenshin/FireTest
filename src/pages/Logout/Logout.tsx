import { logout } from "../../firebase/auth";

export function Logout(): JSX.Element {
  const a = async () => {
    await logout();
  };
  a();
  return (
    <main>
      <h1>log out, yeeeeeeeaaaahhh!!!!!</h1>
      <a href={"/"}>go back to menu</a>
    </main>
  );
}
