// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //tuple
// }
 const person = {
    name: 'Diana',
    age: 35,
    hobbies: ["Sports", "Cooking"],
    role: [2, 'author']
}

enum Role { ADMIN, READ_ONLY, AUTHOR };

let favoriteActivities: string[];

favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase())
    // console.log(hobby.map()) !!!! ERROR
}