import React from "react";

// const Exemplo = ()=> <h1>Estou sofrendo para aprender React!!</h1>;

// export default Exemplo;

let estilo = {listStyle: 'none', color: 'blue', fontSize: '67px', textAlign:'center' };

const pipoca = ()=> {
    return (
        <>
        <h1> Sexta-feira depressão</h1>
        <p>Metade vai reprovar</p>
        <ul style={estilo}>
            <li>Maria Eduarda</li>
            <li>Anna Clara</li>
            <li>Leandro Jun</li>
            <li>O restante da sala</li>
        </ul>
        </>
    )
};

export default pipoca;