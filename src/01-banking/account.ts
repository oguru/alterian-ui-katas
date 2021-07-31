import { accountEntry } from "./account.interface"

class Account {
    balance: number;
    accountHistory: accountEntry[];
    date: Date;

    constructor

    deposit(number): void {
        this.balance += number;
        this.accountHistory.push({
            date: new Date(), 
            change: number, 
            postChangeBalance: this.balance
        });
    }
    
    withdraw(number): void {
        this.balance -= number;

    }
    
    printStatement(): string {
        return 
    }
}

export const myAccount = new Account;

export const printStatement = (account, history) => {
    const myAccount = new Account;

    myAccount.balance = 0;
    myAccount.deposit(500);

    return `Date\tAmount\tBalance\n` +
    `12/01/2020\t+500\t500\n` +
    `13/01/2020\t-250\t250\n`;
}
