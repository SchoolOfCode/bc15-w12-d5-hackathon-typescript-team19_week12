export function equation(
  initialAmount: number,
  threshold: number,
  halfLife: number
): number | null {
  // Calculate the decay constant (k)
  const decayConstant = Math.log(2) / halfLife;

  let remainingAmount = initialAmount;
  let elapsedTime = 0;

  // Iterate until the remaining amount falls below the threshold
  while (remainingAmount > threshold) {
    remainingAmount = initialAmount * Math.exp(-decayConstant * elapsedTime);
    elapsedTime += 1; // Assuming time is measured in discrete units (e.g., hours)
  }

  // Return the elapsed time when the threshold is reached
  return elapsedTime;
}

// Example usage:
const initialCaffeineAmount = 100; // Initial amount of caffeine
const eliminationThreshold = 5; // Threshold amount for considering caffeine eliminated
const caffeineHalfLife = 3; // Caffeine half-life in hours

const timeToElimination = equation(
  initialCaffeineAmount,
  eliminationThreshold,
  caffeineHalfLife
);

if (timeToElimination !== null) {
  console.log(
    `It takes approximately ${timeToElimination} hours for caffeine to be mostly eliminated.`
  );
} else {
  console.log(
    "Caffeine may not reach the elimination threshold within the provided time frame."
  );
}
