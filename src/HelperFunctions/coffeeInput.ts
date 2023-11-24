// takes user input, inserts it into ‘coffeeInput’ function that multiplies input by amount of miligrams of caffeine in a coffee outputs initialAmount (type number) to be inserted into equation.ts
// type  myCoffee = numberOfCoffees: number | null;

function coffeeInput(): number | void {
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
    console.error("Invalid input. Please enter a valid number.");
  }
}
coffeeInput();

export default coffeeInput;
