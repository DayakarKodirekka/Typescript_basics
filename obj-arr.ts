const person = {
    name: "daya",
    role: "Developer",
    hobbies : ['cooking', 'playing guitar']    
}

console.log(`the name is: ${person.name}`);

for (const hob of person.hobbies) {
    console.log("The hobbies are :",hob);
}