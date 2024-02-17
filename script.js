/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map((student) => {
        if(student.marks > 50){
            console.log(student);
        }
    })
    
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach((student) => {
        if(student.marks > 50){
            console.log(student);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let newArr = {id:4,name:"susan",age:"20",marks:45}
    arr.push(newArr);
    console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    let res = arr.forEach((student) => { 
        if(student.marks > 50){
            console.log(student);
        }
    })  
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 4, name: "shiv", age: "23", marks: 60 },
        { id: 5, name: "arvind", age: "28", marks: 75 },
        { id: 6, name: "amar", age: "29", marks: 55 },
    ]
    let res = arr.concat(newArr);
    console.log(res);
  }