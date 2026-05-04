
//The as const assertion is a feature in TypeScript that allows you to create a readonly version of an 
// object or array.It is used to indicate that the value should be treated as a constant and cannot be modified.

const UserRole = {
    Admin: 'ADMIN',
    User: 'User',
    Guest: 'Guest',
} as const;


//console.log(typeof UserRole);
// console.log(keyof typeof UserRole); // Output: "Admin" | "User" | "Guest"

const canEdit = (role: typeof UserRole[keyof typeof UserRole]) => {
    if (role === UserRole.Admin || role === UserRole.User) {
        return true;
    }
    return false;
}

console.log(canEdit(UserRole.Guest)); // Output: false
console.log(canEdit(UserRole.User)); // Output: true