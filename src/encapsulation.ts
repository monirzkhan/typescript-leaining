//encapsulation is the process of hiding the internal details of an object and only exposing a public interface.
//  This allows us to protect the internal state of an object and prevent it from being modified 
// directly by external code.


class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    public getBalance(): number {
        return this.balance;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log('Deposit amount must be positive');
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log('Invalid withdrawal amount');
        }
    }
}

const myAccount = new BankAccount(1000);
console.log(myAccount.getBalance());    // Output: 1000
myAccount.deposit(500);
console.log(myAccount.getBalance());    // Output: 1500
myAccount.withdraw(200);
console.log(myAccount.getBalance());    // Output: 1300
myAccount.withdraw(2000);               // Output: Invalid withdrawal amount
console.log(myAccount.getBalance());    // Output: 1300  