interface Student {
    name:string;
    age:number;
    email:string;
}
interface Person {
    name:string;
    age:number;
}

interface Student extends Person {
    email:string;
}

const s1:Student = {
    name: "Alice",
    age: 20,
    email: "alice@example.com"
};
const s2:Student = {
    name: "Bob",
    age: 22,
    email: "bob@example.com"
};

console.log(s1.name);
console.log(s1.age);
console.log(s1.email);
console.log(s2.name);
console.log(s2.age);
console.log(s2.email);
const p1:Person = {
    name: "Charlie",
    age: 30
};
const p2:Person = {
    name: "David",
    age: 35
};
console.log(p1.name);
console.log(p1.age);
console.log(p2.name);
console.log(p2.age);
