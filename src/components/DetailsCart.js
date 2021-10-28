import { Component } from 'react';

const styles = {
  detailscart: {
    backgroundColor: '#FFF',
    position: 'absolute',
    marginTop: '30px',
    boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
    borderRadius: '5px',
    width: '300px',
    right: '50px',
  },
  ul: {
    margin: '0',
    padding: '0',
  },
  product: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alighItems: 'center',
    padding: '25px 20px',
    borderBottom: '1px solid #AAA',
  }
}

class DetailsCart extends Component {
  render() {
    const { cart } = this.props;
    console.log(cart);
    return (
      <div style={styles.detailscart}>
        <ul style={styles.ul}>
          {cart.map(x =>
            <li style={styles.product} key={x.name}>
              <img alt={x.name} src={x.img} width='50' height='32' />
              {x.name}
              <span> {x.cantidad}</span>
            </li>)}
        </ul>
      </div>
    )
  }
}

export default DetailsCart;