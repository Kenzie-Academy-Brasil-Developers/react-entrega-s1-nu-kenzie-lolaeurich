import "./Css/List.css"

import Card from "./Card"

function List({listTransactions}){

    return (
        <ul className="List">
        {listTransactions?.map((transaction, index) => <Card transaction={transaction} key={index}/>)}
        </ul>
    )
}

export default List