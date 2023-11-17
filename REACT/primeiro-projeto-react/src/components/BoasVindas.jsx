import React from "react";

function NomeAluno (props){
    return <h1>Calmo, {props.name}, não se vá</h1>
}

const mensagem = () => {
    return (
        <NomeAluno name = "Jun Leandro Matue"/>
    )
};

export default mensagem;