// Classes
export default class Students {
  private _fName: string;
  private _lName: string;

  constructor(fName?: string, lName?: string) {
    this._fName = fName;
    this._lName = lName;
  }
  // shorter syntax
  // constructor(private fName: string, private lName: string) {
  // }

  get fName() {
    return this._fName;
  }

  set fName(value) {
    this._fName = value;
  }

  GetFullName(): string {
    return `${this._fName} ${this._lName}`;
  }
}

//export { Students };
