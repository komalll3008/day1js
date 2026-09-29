let basketballPrice = 2095;
let basketballQuantity = 2;

let tshirtPrice = 799;
let tshirtQuantity = 2;

let itemCount = basketballQuantity + tshirtQuantity;

let itemTotalCents =
    basketballPrice * basketballQuantity +
    tshirtPrice * tshirtQuantity;

let itemTotal = itemTotalCents / 100;

let line1 = `Items (${itemCount}): $${itemTotal}`;

console.log(line1);