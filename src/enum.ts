//Enum is a special "class" that represents a group of constants (unchangeable variables).


//Enums come in two flavors: string and numeric.

//Numeric Enums
enum UserRole {
    Admin = 'Admin',
    User = 'User',
    Guest = 'Guest',
}

const canEdit = (role: UserRole) => {
    if (role === UserRole.Admin || role === UserRole.User) {
        return true;
    }
    return false;
}

console.log(canEdit(UserRole.Guest)); // Output: false
console.log(canEdit(UserRole.Admin)); // Output: true

//String Enums
enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

const move = (direction: Direction) => {
    switch (direction) {
        case Direction.Up:
            return 'Moving Up';
        case Direction.Down:
            return 'Moving Down';
        case Direction.Left:
            return 'Moving Left';
        case Direction.Right:
            return 'Moving Right';
        default:
            return 'Invalid direction';
    }
}

console.log(move(Direction.Left)); // Output: Moving Left
console.log(move(Direction.Right)); // Output: Moving Right