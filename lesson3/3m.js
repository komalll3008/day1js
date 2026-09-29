let itemTotalCents = 2095 * 2 + 799 * 2;
let shippingCents = 499 + 499;

let totalBeforeTaxCents = itemTotalCents + shippingCents;
let totalBeforeTax = totalBeforeTaxCents / 100;

let line3 = `Total before tax: $${totalBeforeTax}`;

console.log(line3);