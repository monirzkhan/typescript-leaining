//Polymorphism:     


class Person {
    getSleep(){
console.log(`this person sleeep 9 hrs`);
    }
}

class Student extends Person{
    getSleep(){
        console.log(`this student sleep 7 hrs`);
    }
}

class Teacher extends Person{
    getSleep(){
        console.log(`this teacher sleep 6 hrs`);
    }
}   

const person1 = new Person();
const student1 = new Student();
const teacher1 = new Teacher();

person1.getSleep();
student1.getSleep();
teacher1.getSleep();    


///
class Shape{
    area(): number{
        return 0;
    }
}

class Circle extends Shape{
    radius: number;

    constructor(radius: number){
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius *this.radius;
    }
}

class Rectangle extends Shape{
    width: number;
    height: number;

    constructor(width: number, height: number){
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const circle1 = new Circle(100);
const rectangle1 = new Rectangle(10,20);

console.log(`Area of Circle: ${circle1.area()}`);
console.log(`Area of Rectangle: ${rectangle1.area()}`); 
