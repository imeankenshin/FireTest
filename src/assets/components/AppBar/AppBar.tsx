import React from "react";
import { useState } from "react";

export default function AppBar(props: any): JSX.Element {
  return (
    <header>
      <nav className="flex bg-gradient-to-b from-white via-white to-transparent py-4 px-6 fixed top-0 left-0 w-full justify-between">
        <p className="text-xl font-semibold">{props.title}</p>
        <div>{props.children}</div>
      </nav>
    </header>
  );
}
