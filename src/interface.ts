
//type Alias recap
type User = {
    name: string;
    age :number
}


//interface type
interface IUser{
    name: string;
    age :number
}


type Role = {
    role:'admin' | 'user';

}

//Intersection type
type UserWithRole= User & Role;

interface IUserWithRole extends IUser{
    role: 'admin' | 'user';
}

const user1: User = {
name: 'Md Moniruzzaman',
age:30,
};

const user2: UserWithRole={
    name: 'Moniruzzaman',
    age:25,
    role:'admin',
};

const user3: IUserWithRole={
    name: 'Md Moniruzzaman',
    age:35,
    role:'admin',}

console.log(user1, user2, user3);


//interface with function

interface IAdd{
    (num1: number, num2: number):number
}

const add: IAdd =(num1, num2)=> num1+num2;
console.log(add(10,30));