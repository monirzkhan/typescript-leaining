//Key of: is a type operator that takes an object type and produces a string or 
// numeric literal union of its keys. 
// It is used to create types that represent the keys of an object.

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
}

const person: Person = {
    name: 'Monirzkhan',
    age: 30,
    isStudent: false,
};


const product={
    id: 1,
    name: 'Laptop',
    price: 999.99,
}
const getPropertyFromObject = <T>(obj: T, key: keyof T) => {
    return obj[key];
}

console.log(getPropertyFromObject(person, 'name'));
console.log(getPropertyFromObject(product, 'name'));