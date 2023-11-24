// takes user input, inserts it into ‘coffeeInput’ function that multiplies input by amount of miligrams of caffeine in a coffee outputs initialAmount (type number) to be inserted into equation.ts
// type  myCoffee = numberOfCoffees: number | null;

function coffeeInput(): number {
  let numberOfCoffees: string = "";
  let coffees = prompt(
    "How many coffees have you had today? Please enter a number",
    numberOfCoffees
  );
  if (coffees !== null) {
    const numberOfCoffees = parseInt(coffees, 10);

    if (!isNaN(numberOfCoffees)) {
      const caffeine: number = Math.floor(numberOfCoffees * 90);
      console.log(caffeine);
      return caffeine;
    }
  } else {
    throw new Error("Invalid input. Please enter a valid number.");
  }
  throw new Error("Woops! Something's gone wrong!");
}

export default coffeeInput;
