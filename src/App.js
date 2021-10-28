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
    ],
    cart: [],
  }

  agregarAlCarro = (product) => {
    const { cart } = this.state
    if (cart.find(item => item.name === product.name)) {
      const newCart = cart.map(item => item.name === product.name
        ? ({
          ...item,
          cantidad: item.cantidad + 1
        })
        : item)
      return this.setState({ cart : newCart})
    }

    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        cantidad: 1,
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} />
        <Layout>
          <Title />
          <Products
            agregarAlCarro={this.agregarAlCarro}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
