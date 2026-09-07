import { cars } from "./data/cars";
function App() {
  return (
    <div className="App">
      <h1>Dream Car Builder</h1>
      <p>Welcome to your garage where you build your dream car!</p>
      <button>Start Building</button>
      <h2>Available Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <h3>{car.name}</h3>
            <p>{car.blurb}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
