import Filtro from './Filtro';
import "../reset.css"
import styled from 'styled-components';
import {useState} from "react";

function App() {
  const [showFilter, setShowFilter] = useState(false)
  const [checkedInit, setCheckedInit] = useState([])
  var c = "";
  return (
    <Content>
      <div>
        <button onClick={()=>setShowFilter(!showFilter)}>+ Adic. Filtro</button>
        {showFilter? <Filtro c={""} setCheckedInit={setCheckedInit} checkedInit={checkedInit}/> 
        : <Filtro c={"hide"} setCheckedInit={setCheckedInit} checkedInit={checkedInit}/>}
        
      </div>
    </Content>
  );
}

const Content = styled.div`
display: flex;
/* justify-content: center; */
margin-top: 15vh;
align-items: center;
flex-direction: column;
height: 85vh;
position: relative;
&>div{
  min-width: 158px;
  padding: 10px 4px 4px 4px;
  border-radius: 0px 0px 10px 10px;
  background: #F6F6F6;
  position: absolute;
  & button{
    background: #F6F6F6;
    width: 100%;
    height: 100%;
    border-style: none;
    margin-bottom: 4px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: #4dd0e1;
    cursor: pointer;
  }
}
`

export default App;
