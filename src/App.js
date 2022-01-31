/* eslint-disable react/jsx-indent */
import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

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
    };
    this.handler = this.handler.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
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
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      deck,
    } = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    this.setState({
      deck: [...deck, {
        nome: cardName,
        image: cardImage,
        descricao: cardDescription,
        att1: cardAttr1,
        att2: cardAttr2,
        att3: cardAttr3,
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
  }

  button() {
    const { cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
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
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
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
        <hr />
        { deck.map(({
          nome,
          descricao,
          att1, att2,
          att3, image,
          raridade,
          trunfo }, index) => (
          (<Card
            key={ index }
            cardName={ nome }
            cardDescription={ descricao }
            cardAttr1={ att1 }
            cardAttr2={ att2 }
            cardAttr3={ att3 }
            cardImage={ image }
            cardRare={ raridade }
            cardTrunfo={ trunfo }
          />)))}
      </div>
    );
  }
}

export default App;
