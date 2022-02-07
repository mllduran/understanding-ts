"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "mart",
    age: 30,
    hobbies: [],
    // role: [2, 'author'] Tuple
    role: Role.ADMIN
};
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.READ_ONLY) {
    console.log('Is Admin');
}
