
class Student {
    name: string;
    age: number;
    roll: number;

    constructor(name: string, age: number, roll: number) {
        this.name = name;
        this.age = age;
        this.roll = roll;
    }                   
    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Roll: ${this.roll}`);
    }
}

const student1 = new Student('Monirzkhan', 30, 12345);
student1.getDetails();

class GraduateStudent extends Student {
    degree: string;                                             

    constructor(name: string, age: number, roll: number, degree: string) {
        super(name, age, roll);
        this.degree = degree;
    }       
    takeClass(){
        console.log(`${this.name} is taking a class in ${this.degree}`);
    }
}           

const gradStudent1 = new GraduateStudent('Mr Graduate', 35, 12345, 'Computer Science');
gradStudent1.getDetails();
gradStudent1.takeClass();
console.log(`Degree: ${gradStudent1.degree}`);