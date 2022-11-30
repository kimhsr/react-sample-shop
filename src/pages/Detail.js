/* eslint-disable no-undef */
// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

import {Context1} from './../App.js'

function Detail(props) {

  let {재고} = useContext(Context1)

  let { id } = useParams();
  id = parseInt(id);
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id === id;
  });

  let [count, setCount] = useState(0);
  let [alertB, setAlertB] = useState(true);
  let [tab, setTab] = useState(0);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlertB(false);
    }, 5000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  let [num, setNum] = useState("");

  useEffect(() => {
    if (isNaN(num) === true) {
      alert("숫자를 입력해주세요.");
    }
  }, [num]);

  let [fade2, setFade2] = useState("");

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

  return 찾은상품 !== undefined ? (
    <div className={`container start ${fade2}`}>
      {alertB === true ? (
        <div className="alert alert-warning">5초 이내 구매시 할인</div>
      ) : null}

      {재고}

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
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  ) : (
    <div>상품을 찾을 수 없습니다.</div>
  );
}

function TabContent({ tab }) {
  let [fade, setFade] = useState("");
  let {재고} = useContext(Context1)

  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {[<div>{재고}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

export default Detail;
