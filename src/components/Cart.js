import { Component } from 'react';
import BubbleAlert from './BubbleAlert'
import DetailsCart from './DetailsCart'

const styles = {
  cart: {
    backgroundColor: '#359A2C',
    color: '#FFF',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: '12px',
    top: '20px',
  }
}

class Cart extends Component {
  render() {
    const { cart, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = cart.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0
            ? <BubbleAlert value={cantidad} />
            : null
          }
        </span>
        <button onClick={mostrarCarro} style={styles.cart}>
          Cart
        </button>
        { esCarroVisible ? <DetailsCart cart={cart} /> : null }
      </div>
    )
  }
}

export default Cart;