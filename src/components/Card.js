import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
    } = this.props;
    return (
      <div className="create-card">
        <h1 className="name" data-testid="name-card">
          {cardName}
        </h1>
        <img className="imagem" src={ cardImage } alt={ cardName } data-testid="image-card" />
        <article className="descricao" data-testid="description-card">{cardDescription}</article>
        <p className="att1" data-testid="attr1-card">
          {`Fofura :
          ${cardAttr1}
          `}
        </p>
        <p className="att2" data-testid="attr2-card">
          {cardAttr2}
        </p>
        <p className="att3" data-testid="attr3-card">
          {cardAttr3}
        </p>
        <p className="raridade" data-testid="rare-card">{cardRare}</p>
        {
          cardTrunfo && <span data-testid="trunfo-card" className="trunfo">Super Trunfo</span>
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
