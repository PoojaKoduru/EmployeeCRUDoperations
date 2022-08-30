var employees = [{ id: 1, name: "def", salary: 3000.0 },
{ id: 2, name: "ghi", salary: 2000.0 },
{ id: 3, name: "abc", salary: 5000.0 }];



function addEmployee() {
    const form = document.getElementById("add");
    let employee = {id:form.elements[0].value,name:form.elements[1].value,salary:form.elements[2].value};
    employees.push(employee);
    document.getElementById("add text").innerHTML="Employee added successfully";
   
}



function getEmployees(){
    let res = "";
    for(var i in employees){
        res+= "Employee Id : " + employees[i].id + ",  Employee Name : " + employees[i].name + ",  Employee Salary : " + employees[i].salary + "<br>";
    }
    document.getElementById("get text").innerHTML=res;
}



function removeEmployee(){
    const form = document.getElementById("remove");
    let id = form.elements[0].value; 
    let flag =0;   
    for(var i in employees){
        if(employees[i].id == id){
            delete employees[i];
            flag =1;
        }
            
    }   
    if(flag==0)
        document.getElementById("remove text").innerHTML="Employee Not Found";
    else
        document.getElementById("remove text").innerHTML="Employee removed successfully";
}



function updateEmployee(){
    const form = document.getElementById("add");
    let id = form.elements[0].value; 
    let flag = 0;   
    for(var i in employees){
        if(employees[i].id == id){
            let emp = employees[i];
            delete employees[i];
            let nam = form.elements[1].value!=""?form.elements[1].value:emp.name;
            let sal = form.elements[2].value!=""?form.elements[2].value:emp.salary;
            let employee = {id:form.elements[0].value,name:nam,salary:sal};
            employees.push(employee);
            flag =1;
        }
            
    }
    if(flag==0)
        document.getElementById("add text").innerHTML="No such Employee";
    else
        document.getElementById("add text").innerHTML="Employee updated successfully";
}


function getEmployeeById(){
    const form = document.getElementById("remove");
    let id = form.elements[0].value; 
    let flag =0;   
    for(var i in employees){
        if(employees[i].id == id){
            document.getElementById("remove text").innerHTML="Employee Id : " + employees[i].id + ",  Employee Name : " + employees[i].name + ",  Employee Salary : " + employees[i].salary + "<br>";
            flag =1;
        }
            
    }   
    if(flag==0)
        document.getElementById("remove text").innerHTML="Employee Not Found";
}


function sortEmployee() {
    var select = document.getElementById('sorting');
    var text = select.selectedIndex;
    if(text==0)
    {
        employees.sort(function(a, b){return a.id - b.id});
    }
    else if(text==1){
        employees.sort(function(a, b){
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          });
    }
    else{
        employees.sort(function(a, b){return a.salary - b.salary});
    }
    let res = "";
    for(var i in employees){
        res+= "Employee Id : " + employees[i].id + ",  Employee Name : " + employees[i].name + ",  Employee Salary : " + employees[i].salary + "<br>";
    }
    document.getElementById("sort text").innerHTML=res;
   
}