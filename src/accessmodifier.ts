//Access-- Modiqfiers in TypeScript

//Access modifiers are keywords in TypeScript that determine the visibility and accessibility of class members (properties and methods). 
// They help to control the access level of class members and provide encapsulation in object-oriented programming.

class bankAccount {
    readonly userId: number;
    protected bankBalance: number;
    public userName: string;

    constructor(userId: number, bankBalance: number, userName: string) {
        this.userId = userId;
        this.bankBalance = bankBalance;
        this.userName = userName;
    }

    getBankBalance() {
        return this.bankBalance;
    }
    
    deposit(amount: number) {
        this.bankBalance += amount;
    }

    withdraw(amount: number) {
        if (amount > this.bankBalance) {
            console.log('Insufficient balance');
        } else {
            this.bankBalance -= amount;
        }
    }
}

const account1 = new bankAccount(12345, 1000, 'Monirzkhan');
console.log(account1.getBankBalance()); // 1000
account1.deposit(5000);
console.log(account1.getBankBalance()); // 6000
account1.withdraw(200);
console.log(account1.getBankBalance()); // 5800
account1.withdraw(6000); // Insufficient balance

class StudentAccount extends bankAccount {
    constructor(userId: number, bankBalance: number, userName: string) {
        super(userId, bankBalance, userName);
    }

    getStudentBankBalance() {
        return this.getBankBalance();
    }
}

const studentAccount1 = new StudentAccount(67890, 500, 'Babul');
console.log(studentAccount1.getStudentBankBalance()); // 500
studentAccount1.deposit(200);
console.log(studentAccount1.getStudentBankBalance()); // 700
studentAccount1.withdraw(300);
console.log(studentAccount1.getStudentBankBalance()); // 400
studentAccount1.withdraw(500); // Insufficient balance