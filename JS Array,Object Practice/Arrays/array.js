// const movies = ["avatar","fast and furious", "ironman", "avengers"]
// console.log(movies )
// console.log(movies[2]) 

const food = [
    {id:101, title:'veg', dish:'carrot rice'},
    {id:102, title:'non-veg', dish:'chicken fry'},
    {id:103, title:'veg', dish:'vegetable rice'}
]
//console.log(food[1].dish)

//for loop
for(i=0;i<food.length;i++){
   console.log("for loop - " + food[i].dish)
}

//for in loop
for(foods in food){
   console.log("for in - " + food[foods].title )
}

//for of loop
for(foods of food){
    console.log("for of - " + foods.id)
}

//forEach loop
food.forEach((foods) => console.log("forEach - " + foods.title))
// document.getElementById("one").innerHTML = food[1].dish

//forEach loop
function change(){
food.forEach((foods) => document.getElementById("one").innerHTML += `<li>` + foods.dish
)
}