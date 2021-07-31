export interface accountEntry {
        date: Date;
        change: number;
        postChangeBalance: number;
}

interface Account {
    currentBalance: number
    accountHistory: accountEntry[]
}

const accountHistory = [
    {date: '29/01/19', change: 10, postChangeBalance: 210}
]
