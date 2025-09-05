import { useState } from "react";
import PLANTS from "./data";
import Plants from "./components/plants";
import Cart from "./components/cart";

export default function App() {
  const [cart, setCart] = useState([]);

  let addCart = (plant) => {
    let addToCart = cart.find((i) => i.id === plant.id);
    if (addToCart) {
      setCart(
        cart.map((plants) =>
          plants.id === plant.id
            ? { ...plants, quantity: plants.quantity + 1 }
            : plants
        )
      );
    } else {
      let item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  let removeCart = (plantToRemove) => {
    setCart(
      cart
        .map((plants) =>
          plants.id === plantToRemove.id
            ? { ...plants, quantity: plants.quantity - 1 }
            : plants
        )
        .filter((plants) => plants.quantity > 0)
    );
  };
  return (
    <>
      <Plants plants={PLANTS} addCart={addCart} />
      <Cart cart={cart} addCart={addCart} removeCart={removeCart} />
    </>
  );
}
