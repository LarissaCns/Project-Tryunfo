import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <form className="formulario-carta">
          <label htmlFor="name">
            Nome da carta
            <input id="name" type="text" data-testid="name-input" />
          </label>
          <label htmlFor="descricao">
            Descrição da carta
            <textarea id="descricao" data-testid="description-input" />
          </label>
          <label htmlFor="first-att">
            Primeiro Atributo
            <input id="first-atribut" type="number" data-testid="attr1-input" />
          </label>
          <label htmlFor="second-att">
            Segundo Atributo
            <input id="second-att" type="number" data-testid="attr2-input" />
          </label>
          <label htmlFor="third-att">
            Terceiro Atributo
            <input id="third-att" type="number" data-testid="attr3-input" />
          </label>
          <label htmlFor="image">
            Imagem
            <input data-testid="image-input" id="image" type="text" />
          </label>
          <label htmlFor="raridade">
            Raridade
            <select data-testid="rare-input">
              <option id="raridade">Escolha uma raridade</option>
              <option id="raridade">normal</option>
              <option id="raridade">raro</option>
              <option id="raridade">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            Super Trunfo
            <input data-testid="trunfo-input" id="trunfo" type="checkbox" />
          </label>
          <button data-testid="save-button" type="submit">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
