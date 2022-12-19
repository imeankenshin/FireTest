import { Link, Outlet } from "react-router-dom";
import AppBar from "../assets/components/AppBar/AppBar";
import { user } from "../firebase/auth";

export function Layout(props: any) {
  return (
    <>
      <AppBar title="اللعنة عليك">
        <Link to={user ? "/logout" : "/login"}>
          {user ? "􀻵 Logout" : "􀷀 Login"}
        </Link>
      </AppBar>
      <Outlet />
    </>
  );
}
