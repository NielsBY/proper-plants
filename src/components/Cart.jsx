function Cart({ cart, addCart, removeCart }) {
  return (
    <>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((plants) => {
            return (
              <div key={plants.id}>
                <button
                  onClick={() => {
                    removeCart(plants);
                  }}
                >
                  -
                </button>{" "}
                {""}
                <span>
                  {plants.name} {plants.image} : {plants.quantity}
                </span>{" "}
                {""}
                <button onClick={() => addCart(plants)}>+</button>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default Cart;
