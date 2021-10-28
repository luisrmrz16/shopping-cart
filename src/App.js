import { Component } from 'react';
import Products from './components/Products';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

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
        <Navbar />
        <Layout>
          <Title />
          <Products
            agregarAlCarro={() => console.log('No hace nada')}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
