import React from "react";
import { useState, useTransition, useDeferredValue } from "react";
import { Outlet } from "react-router-dom";

let a = new Array(10000).fill(0);

function Event() {
  let [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();
  let state = useDeferredValue(name);

  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
      <input
        onChange={(e) => {
          // 늦게 처리
          startTransition(() => {
            setName(e.target.value);
          });
        }}
      ></input>
      {isPending
        ? "로딩중"
        : a.map(() => {
            return <div>{state}</div>;
          })}
    </div>
  );
}

export default Event;
