// @ts-nocheck
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { createContext, useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail.js";
import About from "./About";
import Event from "./Event";
import Card from "./Card";
import React from "react";
import axios from "axios";

export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/0");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <button
                onClick={() => {
                  let copy = [...shoes];
                  copy.sort((a, b) =>
                    a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
                  );
                  setShoes(copy);
                }}
              >
                가나다순 정렬
              </button>
              <div className="container">
                <div className="row">
                  {shoes.map(function (a, i) {
                    return <Card shoes={a} key={a.id} />;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((result) => {
                      let copy = [...shoes, ...result.data];
                      setShoes(copy);
                    })
                    .catch(() => {
                      console.log("실패하였습니다.");
                    });
                }}
              >
                상품 더보기
              </button>
            </div>
          }
        />

        <Route path="/detail/:id" element={
          <Context1.Provider value={{ 재고 }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치 정보</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        {/* 404 페이지 */}
        <Route path="*" element={<div>없는 페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
