//Static 

class Counter{
    static count:number = 0;

    static increment(){
        Counter.count++;
    }

    static decrement(){
        Counter.count--;
    }                               
    
}

Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.decrement();

console.log(Counter.count); // Output: 4