//OOP instanceof guard

class Person{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    isSleeping(numberOfHours: number){
        console.log(`${this.name} is sleeping ${numberOfHours} hours`);
    }
}



class Student extends Person{
    constructor(name: string){
        super(name);
    }

    isStudying(numberOfHours: number){
        console.log(`${this.name} is studying ${numberOfHours} hours`);
    }
}

class Teacher extends Person{
    constructor(name: string){
        super(name);
    }

    isTeaching(numberOfHours: number){
        console.log(`${this.name} is teaching ${numberOfHours} hours`);
    }
}

const isStudent=(user:Person)=>{
return user instanceof Student;
}
const isTeacher=(user:Person)=>{
return user instanceof Teacher;
}

const getUserInfo = (user: Person) => {
    if(isStudent(user)){
        user.isStudying(5);
    }
    else if(isTeacher(user)){
        user.isTeaching(8);
    }
    else if(user instanceof Person){
        user.isSleeping(7);
    }
}

const person1 = new Person('Abul babul');
const student1 = new Student('Monirzkhan');
const teacher1 = new Teacher(' Moniruzzaman Techer');

getUserInfo(person1);
getUserInfo(student1);
getUserInfo(teacher1);

