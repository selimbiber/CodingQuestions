class Robot {
  static usedNames = new Set();

  _name = null;

  constructor() {}

  get name() {
    if (this._name === null) {
      this._name = this.generateUniqueName();
    }

    return this._name;
  }

  resetName() {
    this._name = null;
  }

  static releaseNames() {
    this.usedNames.clear();
  }

  generateUniqueName() {
    let newName;

    do {
      newName = this.generateRandomName();
    } while (Robot.usedNames.has(newName));

    Robot.usedNames.add(newName);

    return newName;
  }

  generateRandomName() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";

    let name = "";

    for (let i = 0; i < 2; i++) {
      name += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    for (let i = 0; i < 3; i++) {
      name += digits.charAt(Math.floor(Math.random() * digits.length));
    }

    return name;
  }
}
