import "./Css/TotalMoney.css"

function TotalMoney({listTransactions}){
    const total = listTransactions.reduce((valorAtual, acumulador) =>{
        if(acumulador.type === "entrada"){
            return parseFloat(acumulador.value) + valorAtual
        }
        else{
            return valorAtual - (acumulador.value)
        }
    }, 0)

    return (
        <div className="DivTotalValue">
            <h3>Valor total:</h3>
            <p className="Total">R$ {total}</p>
        </div>
    )
}
export default TotalMoney