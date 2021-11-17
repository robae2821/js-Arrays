// Array Literal
// we assign the array to a variable
// const colors=['brown', 'pink', 'blue', 'teal', 'red']
// const myAges=[10, 13, 16, 18, 21]
// const compNums=[ 12>12, 9==='nine', 1==2, 'eight'==='EIGHT', 5>=5]
// // JS keyword build-in javaScript methodes new Array()
// var colors= new Array('browen', 'pink', 'blue', 'teal', 'red');
// var myAges= new Array(10, 13, 16, 18, 21)

// // JS constractor method

// const colors=[];
// colors[0]= 'brown';
// colors[1]= 'pink';
// colors[2]= 'teal';
// colors[3]= 'red';
// colors[4]= 'blue';

// create an array of at list 7 of your classmates's name
const className = [];
className[0] = 'Robel';
className[1] = 'Emily';
className[2] = 'Anthony';
className[3] = 'Arone';
className[4] = 'luz';
className[5] = 'Anna';
className[6] = 'Ali';
console.log(className);

// Access an Array
console.log(className.length);

// loop over an array//for loop
for (i = 0; i < className.length; i++) {
    console.log(className);
}
// Array Methodes
className.push('Ali');                //*adding an item to the end of an array
className.pop();                      //pop removes last item from array 
className.unshift('Ali');              //*unshift adds an items to the begining 
className.shift();                     //removes an item from the top of an array 
className.splice(2, 2, 'Ali');
console.log(className.indexOf('Ali'));  //find a spacific index




console.log(className);



// Array Assignments //Create an Array called "donuts" that list 7-10 different items
//1 Using a loop, iterate through this array and console.log all the donuts
const donutTypes = [];
donutTypes[0] = 'cake';
donutTypes[1] = 'Glazed';
donutTypes[2] = 'Powder';
donutTypes[3] = 'Eclair';
donutTypes[4] = 'Long John';
donutTypes[5] = 'chocolate';
donutTypes[6] = 'Holes';
console.log(donutTypes);

for (i = 0; i < donutTypes.length; i++) {
    console.log(donutTypes[i]);
}
//2 Write the command to remove the first donut fron the array
donutTypes.shift();
console.log(donutTypes);
//3 Write the command to remove the last donuts from the array
donutTypes.pop();
console.log(donutTypes);
//4 Write the command to add a new donut "lime zest" to the front of the array
donutTypes.unshift('lime zest');
console.log(donutTypes);
//5 Write the command to add another donut "lemon pie" to the end of the array
donutTypes.push('lemon pie');
console.log(donutTypes);
//6 Use either the join() or toString() method to convert an array to a string.
// const donutTypes = ["lime zest", "Glazed", "Powder", "Eclair", "Long John", "chocalate", "Lemon pie"];
let text = donutTypes.toString();
console.log(text);

//7 Write the command to make a copy of the array using slice. The copy should NOT include two donuts.
const citrus = donutTypes.slice(3, 6);
console.log(citrus);

//8 Write the command that gives the indexOf where "chocolate" is located.
console.log(donutTypes.indexOf('chocolate'));
//9 Write the command that gives the indexOf where "glazed" is located (You may get a negative number).
console.log(donutTypes.indexOf('Glazed'));
//10 **Using the splice method, remove one donut from the array and add another.
donutTypes.splice(2, 0, "Lemon", "Kiwi");
console.log(donutTypes);
//11 **Create a new variable called withSyed and set it equal to the people array concatenated with the string of "Bob".

// const withSyed = [];
// withSyed[0] = 'Robel';
// withSyed[1] = 'Emily';
// withSyed[2] = 'Anthony';
// withSyed[3] = 'Arone';
// withSyed[4] = 'luz';
// withSyed[5] = 'Anna';
// withSyed[6] = 'Ali';
// withSyed[7] = 'Chirs';
// withSyed[8] = 'April';
// withSyed[9] = 'Shelby';
// console.log(withSyed);

// let str1 = withSyed;
// let str2 = donutTypes;
// let donuts = str1.concat(str2);
// var withSyed = donuts.concat ("Bob");


// console.log(donuts.concat("Bob"));



//12 **Create a function called getdonuts() that will display all the donuts in your array and display on your page.
function getdonuts() {
    document.getElementById("donuts").innerHTML = donuts;

}
getdonuts()



var choices = ['red', 'orange', 'pink', 'yellow'];
for (var i = 0; i < choices.length; i++) {
    console.log('My #' + (i + 1) + ' choice is ' + choices[i]);
}
for (var i = 0; i < choices.length; i++) {
    var choiceNum = i + 1;
    var choiceNumSuffix;
    if (choiceNum == 1) {
        choiceNumSuffix = 'st';
    } else if (choiceNum == 2) {
        choiceNumSuffix = 'nd';
    } else if (choiceNum == 3) {
        choiceNumSuffix = 'rd';
    } else {
        choiceNumSuffix = 'th';
    }
    console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + choices[i]);
}

var sibling = {
    name: "Ebony",
    age: 39,
    single: false,
    childern: ["Brandon", "Ander", "kelis", "sky"],
    order: "older"
};

sibling.single = true;
sibling.gender = "male";
delete sibling.age;

// for (key in sibling) {
//     document.write(key);
// }
// document.write(object.keys(sibling));
// documents.write(object.value(sibling));




// var meeting= sibling.name + sibling.age;
var meeting = (` hello am ${sibling["name"]} i am ${sibling["age"]} Am I Single ${sibling.single} Gender ${sibling.gender} `)

console.log(meeting);

// new keyword setting the values
var sibling = new Object();
sibling.name = "Ebony";
sibling.age = 39;
sibling.single = false;
sibling.childern = ["Brandon", "Ander", "kelis", "sky"];
order = "older";