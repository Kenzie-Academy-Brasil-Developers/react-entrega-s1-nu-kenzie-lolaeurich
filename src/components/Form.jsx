import "./Css/Form.css"

import { useState } from "react"

function Form({listTransactions, setListTransactions}){

    //VAR PARA PEGAR A DESCRIÇÃO
    const [input, setInput] = useState("")

    //VAR PARA PEGAR O VALOR
    const [valor, setValor] = useState("")

    //VAR PARA SELECIONAR SE É ENTRADA OU SAÍDA
    const [selectType, setSelectType] = useState("entrada")


    function addTransaction(){

            const item = {description: input, type: selectType, value: valor} 
            
            setListTransactions([...listTransactions, item])
    }
    return (
        <>
            <div className="DivForm">
                <h3 className="Description">Descrição</h3>
                <input className="InputDescription"
                    type="text"
                    placeholder="Digite a descrição do item"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />    
                <p>Ex: compra de roupas</p>

            <div className="DivValue">
                <div className="DivValue2">
                <p className="ValueDescription">Valor</p>
                <input className="InputValue"
                    type="text"
                    placeholder="ex: R$ 10.90"
                    value={valor}
                    onChange={(event) => setValor(event.target.value)}></input>
                </div>     

                <div className="DivValue3">             
                <p className="Class">Classificação</p>
                <select className="Options" onChange={(event) => setSelectType(event.target.value)}
                >
                    <option value="entrada">Entrada</option>
                    <option value="saida">Saída</option>
                </select>
                </div>
            </div>

            <button className="FormBtn"
            onClick= {addTransaction}>
                Inserir Valor
            </button>
        </div>    

       </>
    )
}

export default Form