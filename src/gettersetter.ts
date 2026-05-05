//getter and setter
class bankAccount {
    private _bankBalance: number;

    constructor(bankBalance: number) {
        this._bankBalance = bankBalance;
    }

    //getter
    get bankBalance() {
        return this._bankBalance;
    }

    //setter
    set bankBalance(amount: number) {
        if (amount < 0) {
            console.log('Bank balance cannot be negative');
        } else {
            this._bankBalance = amount;
        }
    }
}

const account1 = new bankAccount(1000);
console.log(account1.bankBalance);

account1.bankBalance = 5000;
console.log(account1.bankBalance);

account1.bankBalance = -200; // Bank balance cannot be negative
console.log(account1.bankBalance); // 5000