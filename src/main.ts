import coffeeInput from "./HelperFunctions/coffeeInput";
import { halfLifeEquation } from "./HelperFunctions/halfLife.js";

const timeToElimination = halfLifeEquation(coffeeInput);
if (timeToElimination !== null) {
  console.log(
    `It takes approximately ${timeToElimination} hours for caffeine to be mostly eliminated.`
  );
  alert(
    `It takes approximately ${timeToElimination} hours for caffeine to be mostly eliminated.`
  );
} else {
  console.log(
    "Caffeine may not reach the elimination threshold within the provided time frame."
  );
}
