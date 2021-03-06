/* eslint-disable react/jsx-indent */
import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';
import CartaSalva from './components/CartaSalva';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
      baralho: [],
      filtro: '',
    };
    this.handler = this.handler.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onButtonDelete = this.onButtonDelete.bind(this);
  }

  handler(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    }, () => this.button());
  }

  onSaveButtonClick() {
    const { cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardRare,
      deck,
      baralho } = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    this.setState({ deck: [...deck, { nome: cardName,
      image: cardImage,
      descricao: cardDescription,
      att1: cardAttr1,
      att2: cardAttr2,
      att3: cardAttr3,
      raridade: cardRare,
      trunfo: cardTrunfo,
    }],
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    });
    this.setState({ baralho: [...baralho, { nome: cardName,
      image: cardImage,
      descricao: cardDescription,
      att1: cardAttr1,
      att2: cardAttr2,
      att3: cardAttr3,
      raridade: cardRare,
      trunfo: cardTrunfo,
    }],
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true });
  }

  onButtonDelete(event) {
    const elemento = event.target.parentNode.childNodes[0].textContent;
    const { deck } = this.state;
    const arraySemElemento = deck.filter((carta) => carta.nome !== elemento);
    const cartaComTrunfo = arraySemElemento.some((carta) => carta.trunfo === true);
    if (cartaComTrunfo) {
      this.setState({
        deck: arraySemElemento,
        baralho: arraySemElemento,
      });
    }
    this.setState({
      deck: arraySemElemento,
      hasTrunfo: false,
      baralho: arraySemElemento,
    });
  }

  filtraBaralho = ({ target }) => {
    const { value } = target;
    const { baralho } = this.state;
    const filtro1 = baralho.filter((carta) => carta.nome.includes(value));
    this.setState({
      deck: filtro1,
      filtro: value,
    });
  }

  button() {
    const { cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const max = 90;
    const maxGeral = 210;
    const soma = +cardAttr1 + +cardAttr2 + +cardAttr3;
    if (cardName === ''
    || cardImage === ''
    || cardDescription === ''
    || cardAttr1 > max
    || cardAttr1 < 0
    || cardAttr2 > max
    || cardAttr2 < 0
    || cardAttr3 > max
    || cardAttr3 < 0
    || soma > maxGeral
    ) {
      return this.setState({
        isSaveButtonDisabled: true,
      });
    }
    return this.setState({ isSaveButtonDisabled: false });
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      deck,
      filtro,
    } = this.state;
    return (
      <div>
        <div className="creation-page">
          <section className="form-section">
            <h1 className="title-page">Tryunfo</h1>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              onInputChange={ this.handler }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>
          <section className="card-section">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </section>
        </div>
        <section className="deck-section">
          <h1 className="title-page">Seu Deck de Cartas</h1>
          <div>
            <input
              name="filtro"
              type="text"
              data-testid="/name-filter/i"
              id="filtra-por-nome"
              carta="Filtrar"
              value={ filtro }
              onChange={ this.filtraBaralho }
            />
          </div>
          { deck.map((
            { nome, descricao, att1, att2, att3, image, raridade, trunfo },
          ) => (
            <div key={ nome } className="card-section">
              <CartaSalva
                cardName={ nome }
                cardDescription={ descricao }
                cardAttr1={ att1 }
                cardAttr2={ att2 }
                cardAttr3={ att3 }
                cardImage={ image }
                cardRare={ raridade }
                cardTrunfo={ trunfo }
                onButtonDelete={ this.onButtonDelete }
              />
            </div>))}
        </section>
      </div>
    );
  }
}

export default App;
