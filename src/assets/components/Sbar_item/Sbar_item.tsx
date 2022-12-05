import React from "react";

export default function Sbar_item(props: any): JSX.Element {
  return (
    <li role="menuitem" tabIndex={props.tabIndex}>
      <a
        className="AdvenccreCmp-Sbar_item active:bg-[#00ff1940] outline-none focus-visible:bg-[#00ff1940] items-center sticky top-0 left-0 flex py-1.5 px-2 rounded-sm"
        href={props.href}
      >
        <span className="mr-4 text-md">{props.icon}</span>
        <span className="font-semibold text-sm">{props.title}</span>
      </a>
    </li>
  );
}
