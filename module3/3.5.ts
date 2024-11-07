{
  // access modifiers

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

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const poorAccount = new BankAccount(111, "Mr. Poor", 50);
  //   poorAccount.balance = 0;
  poorAccount.addDeposit(55);

  const myBalance = poorAccount.getBalance();
  console.log(myBalance);

  //
}
