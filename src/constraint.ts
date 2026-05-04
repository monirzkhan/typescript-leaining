//Constraint means strictly typed object with specific properties and types

type Student = {
    name: string,
    id: number,
    class: string,
    dateOfBirth: string,
}


const addStudentToCourse = <T extends Student>(studentInfo: T) => {
    return {
        courseName: 'Next Level Web Development',
        ...studentInfo,
    }
}

const student1 = {
    name: 'Abul',
    isLaptop: true,
    age: 25,
    isMarried: false,
    id: 12345,
    class: '10th Grade',
    dateOfBirth: '2000-01-01',
}

const student2 = {
    name: 'Babul',
    isLaptop: true,
    age: 25,
    isMarried: true,
    isCarOwner: true,
    id: 67890,
    class: '12th Grade',
    dateOfBirth: '1998-05-15',

}

const result1 = addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);

console.log(result1);
console.log(result2);