///     ***** LOGIN EQUATION LAB *****



// Number 1 & Number 2

function login (firstName, lastName, isLoggedIn) {
    if (isLoggedIn){
    console.log(`Hello ${firstName} ${lastName}`)
} else {
    console.log(`Please log in.`)
}
}
    login('Ron', 'Rose', false);




// Number 3

function lawnWork(lawnL, lawnW, lawnCost, work) {
let lawnA = lawnL*lawnW;
let lawnPrice = lawnA*lawnCost;
let totalPrice = lawnPrice + work;
console.log(`The area of your lawn is ${lawnA} so it will be $${lawnPrice} to do the work plus $${work} for the labor giving a total price of $${totalPrice}`)
}

    lawnWork(20, 30, 1.45, 100)


// Number 4


const students = [
    'Alice',
    'Andrew',
    'Casey',
    'Damian',
    'Grant',
    'Howie',
    'Wade',
    'Kat',
    'Kimbrad',
    'Kiu',
    'Natasha',
    'Obi',
    'Pedro',
    'Sarah',
    'Scott',
    'Tiffany',
    'Zhe'
  ]

function classLoop(ourClass) {
    for (let i=0; i<ourClass.length; i++) {
        console.log(ourClass[i] + ` is ` + ourClass[i].length + ` characters long`)
    }
}

classLoop(students);



// Number 5

function fizzBuzz() {
    for (let i=1; i<=100; i++) {
        if (((i%3)===0) && ((i%5===0))) {
            console.log('FizzBuzz');
        } else if ((i%3)===0) {
            console.log('Fizz');
        } else if ((i%5)===0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
        }
    }

    fizzBuzz();


// Number 6


const boardSize = 20
const checkerBoard =() => {
    for(i = 1; i <= boardSize; i++){
        pattern = ` #`
        let board = pattern.repeat(boardSize/2)
        if (i%2==0){
            console.log(board.substring(1))
        } else {
            console.log(board)
        }
    }
}
checkerBoard()