let calc = (a,b,did)=>{
    if(did === "sum"){
      return a+b
    }
    if(did === "multi"){
        return a*b
    }
}

// let a1 = calc(10,20,"sum")
// let b1 = calc(10,20,"multi")
console.log(calc(10,20,"sum"))
console.log(calc(10,20,"multi"))