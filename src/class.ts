//opp-class-object-oriented programming class

class Animal{
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound(){
        console.log(`${this.name} the ${this.species} says ${this.sound}`);
    }   

}

const dog= new Animal('Jonny', 'Dog', 'Ghew Gheww');
const cat= new Animal('Kitty', 'Cat', 'Meow Meow');

dog.makeSound();
cat.makeSound();

//Parameter Property in Class

class Animal2{
    

    constructor(public name:string, public species:string, public sound:string){
   
    }

    makeSound(){
        console.log(`${this.name} the ${this.species} says ${this.sound}`);
    }   

}

const dog2= new Animal('Jonny', 'Dog', 'Ghew Gheww');
const cat2= new Animal('Kitty', 'Cat', 'Meow Meow');

dog2.makeSound();
cat2.makeSound();