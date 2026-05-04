//Generic = Dynamically Generalized Types

//Generic Array
type GenericArray<T> = Array<T>

//const students: string[] = ["Satyarth", "Shivam", "Rohit", "Anshul"];
const students: GenericArray<string> = ["Satyarth", "Shivam", "Rohit", "Anshul"];

//const rollNumbers: number[] = [1, 2, 3, 4];
const rollNumbers: GenericArray<number> = [1, 2, 3, 4];

//const isPassed: boolean[] = [true, false, true, true];
const isPassed: GenericArray<boolean> = [true, false, true, true];


//Generic Object
type GenericObject<T> = Array<T>;

const userList: GenericObject<{ name: string, age: number }> = [
    {
        name: 'Monirzkhan',
        age: 20,
        
    }
] 