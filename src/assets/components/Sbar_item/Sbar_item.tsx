import React from "react";

export default function Sbar_item(props: any): JSX.Element {
  return (
    <li role="menuitem" tabIndex={props.tabIndex}>
      <a
        className="AdvenccreCmp-Sbar_item sticky top-0 left-0 flex items-center rounded-sm py-1.5 px-2 outline-none focus-visible:bg-[#00ff1940] active:bg-[#00ff1940]"
        href={props.href}
      >
        <span className="text-md mr-4">{props.icon}</span>
        <span className="text-sm font-semibold">{props.title}</span>
      </a>
    </li>
  );
}
