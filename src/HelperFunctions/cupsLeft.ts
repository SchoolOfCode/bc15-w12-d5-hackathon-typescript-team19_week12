import coffeeInput from "./coffeeInput";
// ‘cupsLeft’ Function that takes result of ‘coffeeInput’ (number) function, and subtracts it from 400mg.
// divide returning amount by 90mg to equal mugs left. use Math.floor to round.
//  Returns ‘X’ (number) where ‘X’ is cups left
// Returns console.log `400mg is the maximum a person should have in a day. There’s around 90mg of caffeine in a cup. You can have ${X}  more cups today` (string).
export function cupsLeft(caffeine: number ): void{
    let coffeeLeft: number =(400 - caffeine)/90;
    console.log(`You can have ${coffeeLeft} more cups of coffees today`)
    alert(`You can have ${coffeeLeft} more cups of coffees today`)
}