let itemTotalCents = 2095 * 2 + 799 * 2;
let shippingCents = 499 + 499;

let totalBeforeTaxCents = itemTotalCents + shippingCents;
let totalBeforeTax = totalBeforeTaxCents / 100;

let tax = Math.round(totalBeforeTax * 0.10 * 100) / 100;

let line4 = `Estimated tax (10%): $${tax}`;

console.log(line4);