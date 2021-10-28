import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 15, img: '/assets/products/tomato.jpg' },
      { name: 'Peas', price: 5, img: '/assets/products/peas.jpg' },
      { name: 'Lettuce', price: 25, img: '/assets/products/lettuce.jpg' },
    ]
  }
  render() {
    return (
      <div>
        <p>Hola mundo</p>
      </div>
    )
  }
}

export default App;
