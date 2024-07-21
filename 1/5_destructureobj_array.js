const a = 1;
const b = "himanshu";
const c = 2;

const product = {
  a: a,
  b: b,
  c: c,
};

console.log(product);

const product1 = {
  s: "happy",
  a,
  b,
  c,
};
console.log(product1);

const { s } = product1;
console.log(s, product1.s, product.a);

let array = [1, 2, 3];

let [o,p] = array

console.log(o,p)
