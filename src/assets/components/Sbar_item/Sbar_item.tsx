import React from "react";

export default function Sbar_item(props: any): JSX.Element {
  return (
    <a
      className="AdvenccreCmp-Sbar_item active:bg-lime-200 items-center sticky top-0 left-0 flex py-2 px-3 rounded-md"
      href={props.href}
    >
      <span className="mr-4 text-2xl">{props.icon}</span>
      <span className="font-semibold text-xl">{props.title}</span>
    </a>
  );
}
