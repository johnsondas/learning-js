let cities = ['tamilnadu','kerela','karnataka','punjab','andhra']
console.log(cities)
// find elements by array
console.log(cities[2])


//number type
let num = [12,13,14,15,16,]
console.log(num)
console.log(num[3])


//string and num type
let arr = [10,20,'john',[1,2,3],'johny']
console.log(arr)
console.log(arr[3][1])


//two dimenstional array || matrix type
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix[2][1])


//push() method - (add elements to the end)
//and return the added value
let arra = ['a','b','c','d','e']
console.log(arra.push('f'))
console.log(arra)

//pop() method - (removes elements from the end) 
//and return the removed value
console.log(arra.pop())
console.log(arra)

//shift method -(removes elements from the start)
//and returns the removed values
console.log(arra.shift())
console.log(arra)

//unshift method - (add elements from the starting)
//and returns new length
console.log(arra.unshift('a'))
console.log(arra)



// //splice method
// //1st parameter - starting index
// //2nd parameter - no of elements to be deleted from starting index 
// //3rd parameter - value to be inserted from starting index

// //arra.splice(2,1)  //deleting 3rd element
// arra.splice(2,2)    //deleting no of elements
// console.log(arra)

// //insert the elements
// arra.splice(1,2,'c','d') //replace the elements, 1 refers the 2nd element and 2 refers the position of 1
// console.log(arra)

// //add the elements
// arra.splice(1,0,'b')
// console.log(arra)

// arra.splice(4,2,"e","f") //adding no of elements
// console.log(arra)


//convert array to string
let srt = arra.join()  //use join() commend to convert string
console.log(srt)

//convert string to array
let str = 'a,s,d,f'
let arrr = str.split(',') //use split() commend to convert array
console.log(arrr)


//join the two array values using spread operators
let arr1 = [1,2,3]
let arr2 =[1,2,3,4,5]

let joined = [...arr1,...arr2]
console.log(joined)
