import { Component } from 'react';

const styles = {
  product: {
    border: 'solid 1px #EEE',
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
    with: '30%',
    padding: '10px 15px',
    borderRadius: '5px',
  },
  img: {
    width: '100%',
  }
}

class Product extends Component {
  render() {
    const {product} = this.props;
    return (
      <div style={styles.product}>
        <img style={styles.img} alt={product.img} src={product.img} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    )
  }
}

export default Product;