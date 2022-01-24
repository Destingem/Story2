import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  function handleSubmit(props){
    props.preventDefault()
    let customer = {}
    console.log(props);
    for (let index = 0; index < 4; index++) {
      const target = props.target[index];
      console.log(target.id);
      console.log(target.value);
      switch (target.id) {
        case "fName":
          customer.fName = target.value
          break;
          case "lName":
          customer.lName = target.value
            break;
            case "email":
          customer.email = target.value
              break;
              case "phone":
          customer.phone = target.value
          break;
      
        default:
          break;
      }
      console.log(customer);
    }
    async function postData(props){
      fetch("https://react-api-test-8bcb9-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
        method: "POST",
        body: JSON.stringify(props)
      })
    }
    
    postData({customer, order : {...cartCtx.items}})
    console.log([customer, cartCtx.items]);
  }
  return (
    
    <Modal onClose={props.onClose}>
    <form onSubmit={handleSubmit}>
    <div className={classes.userInfo}>
    <div>
    <label HTMLfor="fName">First Name</label>
    <input id='fName'></input>
    </div>
    <div>
    <label HTMLfor="lName">Last Name</label>
    <input id='lName'></input>
    </div>
    <div>
    <label HTMLfor="email">Email </label>
    <input id='email'></input>
    </div>
    <div>
    <label htmlFor="phone">Phone</label>
    <input id='phone'></input>
    </div>
    </div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} type="submit">Order</button>}
      </div>
      </form>
    </Modal>
    
  );
};

export default Cart;
