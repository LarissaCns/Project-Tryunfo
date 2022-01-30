import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      descricao: '',
    };
    this.handler = this.handler.bind(this);
  }

  handler(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      nome,
      descricao,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nome }
          cardDescription={ descricao }
          onInputChange={ this.handler }
        />
        <Card
          cardName={ nome }
          cardDescription={ descricao }
        />
      </div>
    );
  }
}

export default App;
