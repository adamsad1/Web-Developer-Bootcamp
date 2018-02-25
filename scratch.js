var age = prompt("What is your age?");

if (age < 0){
    console.log("Error");
} else if (age < 18) {
    console.log("You cannot enter");
} else if (age < 21) {
    console.log("You cannot drink");
} else if (age == 21) {
    console.log("happy 21st birthday");
} else {
    console.log("you may enter");
}

if (age % 2 !== 0) {
    console.log("your age is odd");
}

if (Math.sqrt(age) % 1 == 0){
    console.log("perfect square");
}