import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <form className="formulario-carta">
          <label htmlFor="name">
            Nome da carta
            <input
              id="name"
              name="name"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="descricao">
            Descrição da carta
            <textarea
              id="descricao"
              name="descricao"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="first-att">
            Primeiro Atributo
            <input
              id="first-atribut"
              name="first-atribut"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="second-att">
            Segundo Atributo
            <input
              id="second-att"
              name="second-att"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="third-att">
            Terceiro Atributo
            <input
              id="third-att"
              name="third-att"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              data-testid="image-input"
              name="image"
              id="image"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="raridade">
            Raridade
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option id="raridade">Escolha uma raridade</option>
              <option id="raridade">normal</option>
              <option id="raridade">raro</option>
              <option id="raridade">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            Super Trunfo
            <input
              data-testid="trunfo-input"
              id="trunfo"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            data-testid="save-button"
            onClick={ onSaveButtonClick }
            type="submit"
            disabled={ isSaveButtonDisabled }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
