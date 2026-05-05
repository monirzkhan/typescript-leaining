//type guard


type Alphaneumeric = string | number;

const add=(num1: Alphaneumeric, num2: Alphaneumeric):Alphaneumeric=>{
    if(typeof num1 === 'string' || typeof num2 === 'string'){
        return num1.toString() + num2.toString();
    }
    return num1 + num2;
}

console.log(add(5, 10)); // 15
console.log(add('Hello, ', 'World!')); // 'Hello, World!'
console.log(add('10', 10)); // '1010';


type NormalUserType = {
    name: string;
}

type AdminUserType = {
    name: string;
    role: 'admin';
}

type UserType = NormalUserType | AdminUserType;

const getUser = (user: UserType) => {
    if ('role' in user) {
        return `I am an admin and my name is ${user.name}`;
    }
    return `I am a normal user and my name is ${user.name}`;
}

const normalUser: NormalUserType = { name: 'Monirzkhan' };
const adminUser: AdminUserType = { name: 'Admin Monir', role: 'admin' };

console.log(getUser(normalUser)); // I am a normal user and my name is Monirzkhan
console.log(getUser(adminUser)); // I am an admin and my name is Admin Monir