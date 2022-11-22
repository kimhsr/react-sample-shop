import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom'
import Detail from './pages/Detail.js'

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Routes>
        <Route path="/" element={
          <div>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                {
                  shoes.map(function (a, i) {
                    return (
                      <Card shoes={shoes[i]} i={i} />
                    )
                  })
                }
              </div>
            </div>
          </div>
        } />
        <Route path="/detail" element={<Detail/>} />
      </Routes>

    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" alt={props.i} />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
