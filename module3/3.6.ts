{
  // getter and setter

  class BankAccount {
    public readonly id: number;
    name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // setter
    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }

    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // getter
    get balance() {
      return this._balance;
    }

    // public getBalance() {
    //   return this._balance;
    // }
  }

  const poorAccount = new BankAccount(111, "Mr. Poor", 50);
  //   poorAccount.balance = 0;
  // poorAccount.addDeposit(55);
  poorAccount.deposit = 50;

  //   const myBalance = poorAccount.getBalance(); // function call kore
  const myBalance = poorAccount.balance; // property call kore
  console.log(myBalance);

  //
}
