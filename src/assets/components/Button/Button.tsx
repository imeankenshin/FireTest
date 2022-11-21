import React from "react";
import "./Dialog.module.css";

export function Dialog(prop: any): JSX.Element {
  return (
    <nav className="AdvenccreCmp-Button bg-slate-200 sticky top-0 left-0 w-full">
      {prop}
    </nav>
  );
}
