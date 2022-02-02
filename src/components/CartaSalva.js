import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartaSalva extends Component {
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
      onButtonDelete,
    } = this.props;
    return (
      <div className="create-card">
        <p data-testid="name-card">
          {cardName}
        </p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          {cardAttr3}
        </p>
        <p data-testid="rare-card">{cardRare}</p>
        {
          cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>
        }
        <button
          name={ cardName }
          type="button"
          data-testid="delete-button"
          onClick={ onButtonDelete }
        >
          Excluir
          {' '}

        </button>
      </div>
    );
  }
}

CartaSalva.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onButtonDelete: PropTypes.func.isRequired,
};

export default CartaSalva;
