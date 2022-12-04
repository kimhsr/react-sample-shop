// @ts-nocheck
import React, { memo, useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../store.js";
import { increase } from "../store/userSlice";

// 무거운 컴포넌트들에만 memo 사용 (대부분 붙일 일은 없음)
// let Child = memo(function () {
//   console.log("재렌더링");
//   return <div>자식</div>;
// });

// function 함수(){
//   return 반복문 여러번 돌린결과
// }

function Cart() {

  // useMemo 컴포넌트 렌더링시 1회만 실행함
  // let result = 함수();
  // useMemo(()=>{
  //   return 함수();
  // }, [state]);

  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  // let [count, setCount] = useState(0);

  return (
    <div>
      {/* <Child count={count}></Child>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button> */}
      <h5>
        {state.user.name} {state.user.age}의 장바구니
      </h5>
      <button
        onClick={() => {
          dispatch(increase(4));
        }}
      >
        버튼
      </button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => {
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(state.cart[i].id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
