import FilterOption from "./FilterOption";
import styled from "styled-components";

export default function Filtro({setCheckedInit, checkedInit}){
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
        <FilterStyle>
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
border-radius: 5px;
padding-left: 20px;
font-family: Arial, Helvetica, sans-serif;
color: #4A5E6D;
& p{
    padding: 4px;
    padding-top: 15px;
    font-weight: bold;
}
`