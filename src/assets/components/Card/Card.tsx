import React from "react";
import "./Dialog.module.css";

export function Card(props: any): JSX.Element {
  return <div className="border-2">{props.children}</div>;
}
