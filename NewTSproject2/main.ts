
/* function minPositive1(arr: number[]): number | null {
    let min: number | null = null;
    arr.forEach(element => {
        if (element > 0){
            if (min == null || element < min){
                min = element;
            }
        }
    });
    return min;
}
  
    const array1 = [3, -1, 0, 7, 10, -5];
    console.log("Минимальное положительное значение:", minPositive1(array1));
    ///////------------------------------------------------------------------------------------
    
    function createBooleanMatrix(matrix: string[][]): boolean[][] {
        let result: boolean[][] = [];
        for (let i: number = 0; i < matrix.length; i++) {
            let row: boolean[] = [];
            for (let j: number = 0; j < matrix[i].length; j++) {
                row.push(matrix[i][j].length % 2 != 0);
            }
            result.push(row);
        }
        return result;
    }
  
  const stringMatrix: string[][] = [
    ["AaAa", "AAaaAAaaA"],
    ["BbBb", "BBBBBaaaBB"]
  ];
  console.log("Матрица булевых значений:", createBooleanMatrix(stringMatrix)); */

 type NumericTuple = [number, number];

function hasEqualDigitSums(tuple: NumericTuple): boolean {
  const sumDigits = (num: number) => 
    num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  
  return sumDigits(tuple[0]) === sumDigits(tuple[1]);
}

const numericTuple: NumericTuple = [123, 321];
console.log("Сумма цифр совпадает:", hasEqualDigitSums(numericTuple));

enum RnkBases {
    Adenine = "A",
    Guanine = "G",
    Cytosine = "C",
    Peniciline = "P"
  }
  
  console.log("Азотистое основание:", RnkBases.Adenine);

  class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
   }
   class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }
   }
   class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
    return "Miyau!";
    }
   }
   
  function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
  }
    
  const myDog = new Dog();
  const myCat = new Cat();
  printPetInfo(myDog);
  printPetInfo(myCat);

  type AminoAcid = {
    base: RnkBases;
    name: string;
    role: string;
  };
  
  const aminoAcid: AminoAcid = {
    base: RnkBases.Adenine,
    name: "Alanine",
    role: "Protein building"
  };

  console.log("Аминокислота в формате JSON:", JSON.stringify(aminoAcid, null, 2)); 
