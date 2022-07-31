import "./Styles/App.css"

import { useState } from "react";

import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";


function App() {


  //Array contendo minhas transações
  const [listTransactions, setListTransactions] = useState([])

  //Página de home, antes de entrar no formulário
  const [home, setHome] = useState(true)

  return (
    <>
    {home ? 
      (
        <div className="Home">
          <section className="SectionHome">
            <div className="ContentHome">

              <h1 className="Tittle">Nu Kenzie</h1>
              <h2 className="Subtittle">Centralize o controle das suas finanças</h2>
              <span className="Subtittle2">de forma rápida e segura</span>
              <button onClick={() => setHome(false)} className="HomeBtn">
                Iniciar
              </button>

            </div>
          </section>

          <figure className="HomeImage"></figure>
          
        </div>
      ) 
      : 
      (
        <div className="App">
          <header className="Header">
            <h1 className="AppName">Nu Kenzie</h1>
            <button onClick={() => setHome(true)} className="BackBtn">
              Home
            </button>
          </header>

        <main className="Main">
            <section className="HomeForm">  
              <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
              <TotalMoney listTransactions={listTransactions}/>
              </section>
              <section className="HomeList">
              <List listTransactions={listTransactions}/>
            </section>
        </main>

        </div>
      )
    }
    </>
  )
}

export default App;
