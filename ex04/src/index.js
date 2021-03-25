const BAKING_TEMPERATURES = {
    cake: {low: 180, high: 250 },
    bread: {low: 150, high: 250},
    pie: { low: 200, high: 230 }
};
function main(baking) {
    const {bread: { low: lowBread, high: highBread }} = BAKING_TEMPERATURES;
    return { lowBread, highBread };
}
console.log(main(BAKING_TEMPERATURES));
module.expots = main;