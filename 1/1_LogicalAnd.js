let a = true;
let b = false;

console.log(a&&a)
console.log(a&&b)
console.log(b&&a)
console.log(b&&b)

function getname(name){
    return name
}


console.log(a&&getname("Himanshu sangwan"))
console.log(a&&getname("Himanshu sangwan"))
console.log(b&&getname("Himanshu sangwan"))
console.log(b&&getname("Himanshu sangwan"))