import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

export default class App extends Component {
  colors = ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
  /* LOCAL DE TRABALHO
   - Construir a estrutura para um componente de classe
   - Faça um estado com o arranjo de cores
   - Vamos usar uma função shuffle abaixo e vamos enviá-la por adereços... que
     maneiras que temos para não perder o contexto?
   */


   /* LOCAL DE TRABALHO
   Função de embaralhamento
   Aqui eles devem fazer uma função que me retorne um novo arranjo com o
   cores misturadas
   */

  
  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={"Recebe uma função"} />
      </div>

    )
  }
}
