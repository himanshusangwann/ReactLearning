function add(a=1,b=2){
    console.log(a,b)
    return a * b
}

console.log(add(3,5))


const array = [1,2,3,4,5]
const array1 = [6,7,8,9,0]

console.log([...array,...array1])
console.log(...array,...array1)


function alfa(a,...b){
    console.log(a,b)
    console.log(...b)
}

alfa(1,2,3,4,5,6,7,8,9)