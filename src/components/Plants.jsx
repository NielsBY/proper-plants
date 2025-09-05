import Plant from "./plant";

export default function plants({ plants, addCart }) {
  return (
    <>
      <h2> Plants </h2>
      <>
        {plants.map((plant) => (
          <Plant
            key={plant.id}
            {...plant.image}
            {...plant.name}
            plant={plant}
            addCart={addCart}
          />
        ))}
      </>
    </>
  );
}
