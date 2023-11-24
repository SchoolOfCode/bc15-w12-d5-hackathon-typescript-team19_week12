import { cupsLeft } from "./cupsLeft";

export function halfLifeEquation(
  coffeeInput: () => number
  // threshold: number,
  // halfLife: number
): number | null {
  // Calculate the decay constant (k)
  const halfLife: number = 4; // in hours, how long it takes caffeine in system to halve
  const threshold: number = 5; // In mg, amount left in system to be considered gone
  const decayConstant = Math.log(2) / halfLife;
  let remainingAmount = coffeeInput();
  let elapsedTime = 0;
  // Iterate until the remaining amount falls below the threshold
  while (remainingAmount > threshold) {
    remainingAmount = remainingAmount * Math.exp(-decayConstant * elapsedTime);
    elapsedTime += 1; // Assuming time is measured in discrete units (e.g., hours)
  }
  // Return the elapsed time when the threshold is reached
  return elapsedTime;
}
// In this example, calculateTimeToElimination takes the initial amount of caffeine (coffeeInput()), the threshold amount for considering caffeine eliminated (threshold), and the half-life of caffeine (halfLife). It iteratively calculates the remaining amount of caffeine until it falls below the threshold and returns the elapsed time.

// Keep in mind that this is a simple model and may not perfectly represent individual variations in metabolism. Additionally, it assumes that time is measured in discrete units, and the precision depends on the chosen time increment in the loop.
