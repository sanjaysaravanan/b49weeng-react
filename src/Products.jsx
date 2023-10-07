import { useState } from 'react';


const products = [
  { title: 'Coffe', price: '15.00' },
  { title: 'Sugar', price: '20.00' },
  { title: 'Rice', price: '35.00' },
]

const Products = () => {

  // let cart = 0;
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // cart++;
    // setCart(cart + 1);
    // console.log(cart);
    const newCart = [...cart, product];
    setCart(newCart);
  }

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.title !== product.title);
    setCart(newCart);
  }

  return (
    <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      {console.log('re-rendering', cart)}
      {products.map(product => (
        <div 
          key={product.title} 
          style={{
            border: '1px solid',
            padding: '16px'
          }}
        >
          <h2>{product.title}</h2>
          <h3>${product.price}</h3>
          {cart.find(({title}) => title === product.title) ? (
            <button onClick={() => removeFromCart(product)} type='button'>Remove From Cart</button>
          ) : (
          <button onClick={() => addToCart(product)} type='button'>Add To Cart</button>)}
        </div>
      ))}
    </div>
    <div
      style={{
        margin: 48,
        fontSize: 48,
        textAlign: 'center'
      }}
    >
      Cart({cart.length})
    </div>
    </>
  )
}

export default Products;