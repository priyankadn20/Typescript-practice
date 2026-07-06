let student:{name:string, age:number} ={
    name:"priyanka",
    age:25
}
console.log(student.name);
console.log(student.age);

//-----nested object type--------

let child:{
    name:string,
    age:number,
parent:{
    name:string,
    age:number}}={
    name:"priyanka",
    age:25,
    parent:{
        name:"john",
        age:50
    }
}
console.log(child.name);
console.log(child.age);
console.log(child.parent.name);
console.log(child.parent.age);

//it is seems difficult to read nested object type so we can use type alias to make it more readable

//-----type alias--------
type Parent={
    name:string,
    age:number
}
type Child={
    name:string,
    age:number,
    parent:Parent
}
 
let child1:Child={
    name:"priyanka",
    age:25,
    parent:{
        name:"john",
        age:50
    }
}
console.log(child1.name);
console.log(child1.age);
console.log(child1.parent.name);
console.log(child1.parent.age);