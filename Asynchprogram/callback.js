let sum = (a,b)=>{
  return a+b
}

let multi = (a,b)=>{
  return a*b
}

let calc = (a,b,callback)=>{
    return callback(a,b)
}

let a1 = calc(10,20,sum)
let b1 = calc(10,20,multi)

console.log(a1)
console.log(b1)