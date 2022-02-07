enum Role { ADMIN, READ_ONLY, AUTHOR }

const person: {
  name: string;
  age: number;
  hobbies: string[];
  // role: [number, string]
  role: Role
} = {
  name: "mart",
  age: 30,
  hobbies: [],
  // role: [2, 'author'] Tuple
  role: Role.ADMIN
};

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby)
}

if (person.role === Role.READ_ONLY) {
  console.log('Is Admin')
}