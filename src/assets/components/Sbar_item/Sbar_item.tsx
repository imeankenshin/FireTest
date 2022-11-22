import React from "react";

export default function Sbar_item(props: any): JSX.Element {
  return (
    <a
      className="AdvenccreCmp-Sbar_item active:bg-slate-100 sticky top-0 left-0 w-full py-2 px-3 rounded-md"
      href={props.href}
    >
      <span className=" font-semibold">{props.title}</span>
    </a>
  );
}
