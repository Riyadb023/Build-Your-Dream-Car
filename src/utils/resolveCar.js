import { cars } from "../data/cars.js";
import { getEngine } from "../data/engines.js";
import { getTransmission } from "../data/transmissions.js";
import { getDrivetrain } from "../data/drivetrains.js";

export function resolveCar(id) {
  const car = cars.find((car) => car.id === id);

  if (!car) {
    return null;
  }

  const engine = getEngine(car.stockEngine);
  const transmission = getTransmission(car.stockTransmission);
  const drivetrain = getDrivetrain(car.drivetrain);

  if (!engine || !transmission || !drivetrain) {
    return null;
  }

  return {
    ...car,
    engine,
    transmission,
    drivetrain,
  };
}
