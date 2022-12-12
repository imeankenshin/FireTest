import { Router, Outlet } from "react-router-dom";
import AppBar from "../assets/components/AppBar/AppBar";

export function Layout(props: any) {
  return (
    <>
      <AppBar title="اللعنة عليك">
        <a href="/login">Login</a>
      </AppBar>
      <Outlet />
    </>
  );
}
