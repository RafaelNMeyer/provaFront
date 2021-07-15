import Filtro from './Filtro';
import "../reset.css"
import styled from 'styled-components';
import {useState} from "react";

function App() {
  const [showFilter, setShowFilter] = useState(false)
  return (
    <Content>
      <div>
        <button onClick={()=>setShowFilter(!showFilter)}>+ Adic. Filtro</button>
        {showFilter? <Filtro/> : false}
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
  background: #eee;
  padding: 10px 4px 4px 4px;
  border-radius: 0px 0px 4px 4px;
  position: absolute;
  & button{
    width: 100%;
    border-style: none;
    margin-bottom: 4px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: #4dd0e1;
  }
}
`

export default App;
