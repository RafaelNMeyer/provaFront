import FilterOption from "./FilterOption";
import styled from "styled-components";
import "../index.css"

export default function Filtro({setCheckedInit, checkedInit, hide}){
    const names =[
        "Status",
        "Venda",
        "Valor",
        "Tipo",
        "Cliente",
        "Documento",
        "Referência",
        "TID",
        "ARP",
        "NSU",
        "DATA",
    ];

    return (
        <FilterStyle className={hide} style={{maxHeight: hide==="hide"? 0 : "85vh"}}>
        <p>Filtros</p>
        {names.map((name,i)=>(
            //key precisa react saber
            <FilterOption name={name} key={i} setCheckedInit={setCheckedInit}
            checkedInit={checkedInit}/>
        ))}
        </FilterStyle>
    )
}

const FilterStyle = styled.div`
display: flex;
flex-direction: column;
background: white;
box-shadow: 1px 1px 8px #D0D0D0;
border-radius: 10px;
padding-left: 20px;
font-family: Arial, Helvetica, sans-serif;
color: #4A5E6D;
transition: max-height 0.5s ease-in-out;
overflow:hidden;
&>:last-child{
    padding-bottom: 15px;
}
& p{
    padding: 4px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: bold;
}
`