import { Component } from 'react';
import BubbleAlert from './BubbleAlert'

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
    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAlert value={10} />
        </span>
        <button style={styles.cart}>
          Cart
        </button>
      </div>
    )
  }
}

export default Cart;