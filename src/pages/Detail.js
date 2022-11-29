// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  id = parseInt(id);
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id === id;
  });

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 5000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  return 찾은상품 !== undefined ? (
    <div className="container">
      {alert === true ? (
        <div className="alert alert-warning">5초 이내 구매시 할인</div>
      ) : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (parseInt(id) + 1) +
              ".jpg"
            }
            alt="11"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  ) : (
    <div>상품을 찾을 수 없습니다.</div>
  );
}

export default Detail;
