let employees = [
    {id:101,name:"john",gender:"male",salary:50000},
    {id:102,name:"nayandara",gender:"female",salary:60000},
    {id:103,name:"ajith",gender:"male",salary:70000},
    {id:104,name:"shalini",gender:"female",salary:80000},
    {id:104,name:"shalini",gender:"female",salary:70000},
]

function get_data(){
    let rows=""
    for(emp of employees){
        if(emp.gender && emp.salary==70000){
            rows=rows + `<tr>
                      <td>${emp.id}</td>
                      <td>${emp.name}</td>
                      <td>${emp.gender}</td>
                      <td>${emp.salary}</td>
                        </tr>`
        }
    }
    document.getElementById("one").innerHTML=rows
}