import React from "react"

export function Btn (props:React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={props.type} name={props.name} className="bg-slate-300 py-2.5 px-5 active:bg-slate-200 rounded">
      {props.children}
    </button>
  )
}