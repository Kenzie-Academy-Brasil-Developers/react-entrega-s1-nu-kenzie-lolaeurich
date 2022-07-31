import "./Css/Card.css"

function Card({transaction}){
    console.log(transaction);
    // { description: "Conta de luz", type: "saída", value: -150 }

    // const { description, type, value} = transaction
    return (
        <div className={transaction.type === "entrada" ?
        "GreenCard"
        :
        "RedCard" 
        }>  
            <div className="EnterType">
                <h3 className="DescriptionCard">{transaction.description}</h3> 
                <p className="CardType">{transaction.type}</p>   
            </div> 

            <div className="Trash">
            <p className="CardValue">R${transaction.value}</p>
            <button className="TrashBtn" 
            onClick>
            </button>
            </div>
        </div>
    )
}

export default Card
