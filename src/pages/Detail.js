import { useParams } from "react-router-dom";
import styled from 'styled-components';

let Box = styled.div`
  padding : 20px;
  background : grey;
`;

let YelloBtn = styled.button`
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'black' : 'white' };
  padding : 10px;
`;

// let NewBtn = styled.button(YelloBtn)`

// `

function Detail(props) {

  let { id } = useParams();

  return (
    <div className="container">
      <Box>
        <YelloBtn bg="black">버튼</YelloBtn>
        <YelloBtn bg="blue">버튼</YelloBtn>
      </Box>

      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (parseInt(id) + 1) + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;