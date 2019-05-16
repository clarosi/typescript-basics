import { IPersonInfo } from './src/IPersonInfo';
import Students from './src/Students';

// Enum
enum KnownLanguage {
  Tagalog,
  Bisaya,
  Waray
}

const { Tagalog, Bisaya, Waray } = KnownLanguage;
const obj: IPersonInfo = {
  name: 'Ian',
  age: 34,
  language: KnownLanguage[Tagalog]
};
const arryList: IPersonInfo[] = [
  { name: 'Josh', age: 28, language: KnownLanguage[Bisaya] },
  { name: 'Julie', age: 34, language: KnownLanguage[Waray] }
];
arryList.unshift(obj);

// Function Declaration
function showNames(name: IPersonInfo[]) {
  name.forEach(item =>
    console.log(
      `Name: ${item.name} Age: ${item.age} Language: ${item.language}`
    )
  );
}

// Function Declaration Generics
function showNamesG(name: Array<IPersonInfo>) {
  name.forEach(item =>
    console.log(
      `Name: ${item.name} Age: ${item.age} Language: ${item.language}`
    )
  );
}

// Rest Parameter
function showNums(...nums: Array<Number>) {
  nums.forEach(num => console.log(num));
}

// Default Parameter
function showGreetings(text: string = 'Hello') {
  console.log(text);
}

showNames(arryList);
showNums(1, 2, 3);
showGreetings('Good Day');

// ##### Anonymous and Arrow functions #####
const showName = function(fName: string, lName: string) {
  console.log(`Firstname: ${fName} ... Lastname: ${lName}`);
};

const showPangan = (fName: string, lName: string) =>
  console.log(`Firstname: ${fName} ... Lastname: ${lName}`);

const Studyante = new Students('Ian', 'Claros');
//Studyante.fName = 'Zyrus';
console.log(Studyante.GetFullName());
//console.log(Studyante.fName);

//let message;
//message = 'message';
// type assertion
//const length = (<string>message).length;
//const lengthAlternative = (message as string).length;
