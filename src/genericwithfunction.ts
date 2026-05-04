//Generic Function 

// const createArrayWithString=(value: string)=>{
//     return [value];
// }
// const createArrayWithNumber=(value: number)=>{
//     return [value];
// }
// const createArrayWithObject=(value: {
//     name: string;
//     age: number;
// })=>{
//     return [value];
// }

const createArrayWithGeneric=<T>(value: T)=>{
    return[value];
}

const stringArray = createArrayWithGeneric('Hello, Monirzkhan!');
const numberArray = createArrayWithGeneric(42);
const objectArray = createArrayWithGeneric({ name: 'Monirzkhan', age: 30 }); 


const createArrayWithTuple=(value1: string, value2: number)=>{
    return [value1, value2];
}

const tupleArray = createArrayWithTuple('Monirzkhan', 30);

const createArrayWithGenericTuple=<T, X>(value1: T, value2: X)=>{
    return [value1, value2];
}

const res1= createArrayWithGenericTuple('Monir', 30);
const res2= createArrayWithGenericTuple({
    name: 'Monirzkhan',
    age: 45
}, true);

console.log(res1, res2);

//

const addStudentToCourse=<T>(studentInfo: T)=>{
    return{
        courseName: 'Next Level Web Development',
        ...studentInfo,
    }
}

const student1 ={
    name: 'Abul',
    isLaptop: true,
    age: 25,
    isMarried: false,


}

const student2 ={
    name: 'Babul',
    isLaptop: true,
    age: 25,
    isMarried:true,
    isCarOwner: true,


}

const result1 = addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);

console.log(result1);
console.log(result2);