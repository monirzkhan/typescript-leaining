let anything: any   = 'Hello, Monirzkhan!';     
anything as string;  // Type assertion using 'as' syntax

anything.toUpperCase();  // This will work because 'anything' is asserted as a string

console.log(anything.toUpperCase());

const kgToGramConverter = (input : number | string| undefined) : number| string | undefined => {
    if (typeof input==='number'){
        return input*1000;
    }
    if (typeof input==='string'){
        const [value]=input.slice(" ");
        return `converted out is ${Number(value)*1000}`;
        
    }
}

const result1 = kgToGramConverter(5) as number;  // Type assertion to specify that the result is a number
console.log(result1);

const result2 = kgToGramConverter("5 kg") as string;
console.log(result2);

const result3 = kgToGramConverter(undefined) as undefined;  // Type assertion to specify that the result is undefined
console.log(result3);