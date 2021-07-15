import FilterOption from "./FilterOption";
import {useState} from "react";
import styled from "styled-components";

export default function Filtro(){
    const [checked, setChecked] = useState([
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
    ]);

    return (
        <FilterStyle>
        <p>Filtros</p>
        {checked.map((check,i)=>(
            //key precisa react saber
            <FilterOption check={check} key={i} checked={checked}/>
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