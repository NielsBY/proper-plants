export default function plant({ plant, addCart }) {
  return (
    <div>
      <b>{plant.name}</b> <b>{plant.image}</b>{" "}
      <button onClick={() => addCart(plant)}>Add to cart</button>
    </div>
  );
}
