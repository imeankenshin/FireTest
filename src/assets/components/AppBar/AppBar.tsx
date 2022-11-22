import React from "react";
import { useState } from "react";

export default function AppBar(props: any): JSX.Element {
  return (
    <nav className="AdvenccreCmp-AppBar bg-gray-200 sticky top-0 left-0 w-full p-3">
      {props.children}
    </nav>
  );
}
