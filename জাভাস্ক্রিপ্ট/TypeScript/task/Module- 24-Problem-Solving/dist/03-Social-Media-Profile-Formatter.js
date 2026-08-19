"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatUserProfile(user) {
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`;
}
// formatUserProfile({
//     name: "Fahim",
//     age: 22,
//     city: "Dhaka"
// });
console.log(formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka"
}));
//# sourceMappingURL=03-Social-Media-Profile-Formatter.js.map