export class ValueError extends Error {
  constructor(message = "Bank account error") {
    super(message);
    this.name = "ValueError";
  }
}

export class BankAccount {
  constructor() {
    this.isOpen = false;
    this.balanceAmount = 0;
  }

  open() {
    if (this.isOpen) throw new ValueError("Account is already open.");
    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) throw new ValueError("Account is already closed.");
    this.balanceAmount = 0;
    this.isOpen = false;
  }

  deposit(amount) {
    this.checkIfOpen();
    this.validateAmount(amount);
    this.balanceAmount += amount;
  }

  withdraw(amount) {
    this.checkIfOpen();
    this.validateAmount(amount);
    if (amount > this.balanceAmount) {
      throw new ValueError("Insufficient balance.");
    }
    this.balanceAmount -= amount;
  }

  get balance() {
    this.checkIfOpen();
    return this.balanceAmount;
  }

  checkIfOpen() {
    if (!this.isOpen) {
      throw new ValueError("Account is closed.");
    }
  }

  validateAmount(amount) {
    if (amount <= 0) {
      throw new ValueError("Amount must be positive.");
    }
  }
}
