alert("welcome"); //great
// <<declaring variables>>
//automatically
a1 = 1;
//var -- old di gamit
var a2 = 2;
//let -- latest mas gamit
let a3 = 3;
//const -- can't be reassigned/change
//ex = const hi = "hellow" ;
//hi = "hi" ; result = hellow
const a4 = 4;
document.getElementById("variables").innerHTML =
  "automatically = " +
  a1 +
  "<br>" +
  " var = " +
  a2 +
  "<br>" +
  " let = " +
  a3 +
  "<br>" +
  " const = " +
  a4;

//<<converting strings to numbers>>
//integer
// pwede = let con1="4"
// alert( parseInt(con1)); result = 4
// pwede let con1= parseint("4hello"); result = 4
let con1 = parseInt("4");
//decimal
let con2 = parseFloat("4.15"); // result = 4.15 without the float the result are 4
document.getElementById("ston").innerHTML =
  "Int = " + con1 + "<br>" + " float = " + con2;

//<<arithmetic operators>>
//+, -, *, /, **, %
//** - ex = 2**5 mean = 2*2*2*2*2
document.getElementById("math1").innerHTML = "+, -, *, /, %, **";
document.getElementById("math2").innerHTML =
  "2**5 = " +
  2 ** 5 +
  " reason = 2*2*2*2*2 = 32" +
  "<br>" +
  " 5**2 = " +
  5 ** 2 +
  " reason = 5*5 = 25";

//<<shorthand operators>>
//+=, -=, *=, /=, **=, %=
//same as x = x + 5
let num1 = 5;
document.getElementById("sh1").innerHTML = "+=, -=, *=, /=, **=, %= ";
document.getElementById("sh2").innerHTML =
  "<br>" + "let num = 5; " + "<br>" + "ans = " + num1;
num1 += 5;
document.getElementById("sh3").innerHTML =
  "num += 5" + "<br>" + "ans = " + num1;

//<<increment decrement>>
//x++,++x,x--,--x
//x++= add 1

//<<string length/indices>>
//length
let le = "jareth";
//length
document.getElementById("le1").innerHTML =
  "length:" + "<br>" + "jareth = " + le.length;
//indices
document.getElementById("in1").innerHTML =
  "indices:" + "<br>" + "jareth = " + le[2];
//length/indices
document.getElementById("li1").innerHTML =
  "length/indices:" + "<br>" + "jareth = " + le[le.length - 2];

//<<string methods>>
//pwede to permanent change
//me1=me1.toUpperCase();
//alert(me1) result = JARETH
let me1 = "  Jareth pogi "; //letters and space=14
//toUpperCase
document.getElementById("up1").innerHTML =
  "toUpperCase():" + "<br>" + me1 + " = " + me1.toUpperCase();
//toLowerCase
document.getElementById("low1").innerHTML =
  "toLowerCase():" + "<br>" + me1 + " = " + me1.toLowerCase();
//trim = remove over space start and end
//without trim
document.getElementById("tr1").innerHTML =
  "without trim():" + "<br>" + me1 + " = " + me1.length;
//with trim
let me2 = "  Jareth pogi ";
me2 = me2.trim();
document.getElementById("tr2").innerHTML =
  "with trim():" + "<br>" + me1 + " = " + me2.length; //result = 11 removing 3 space
//trimEnd
me2 = "  Jareth pogi ";
me2 = me2.trimEnd(); //removing over space in end
document.getElementById("te1").innerHTML =
  "trimEnd():" + "<br>" + me2 + " = " + me2.length;
//trimStart
me2 = "  Jareth pogi ";
me2 = me2.trimStart(); //removing over space in start
document.getElementById("te2").innerHTML =
  "trimStart():" + "<br>" + me2 + " = " + me2.length;
//replace
//replace(from,to);
let sentence = "I have a dog, and may dog is cute";
document.getElementById("re1").innerHTML =
  "replace(from,to):" + "<br>" + sentence.replace("dog", "cat"); //first dog are replace cat
//replaceAll(from,to);
sentence = "I have a dog, and may dog is cute";
document.getElementById("re2").innerHTML =
  "replaceAll(from,to):" + "<br>" + sentence.replaceAll("dog", "cat"); //all dog are replace cat
//slice
//slice(start,end);
sentence = "I have a dog, and may dog is cute";
document.getElementById("sl1").innerHTML =
  "slice(start,end):" + "<br>" + sentence.slice(2, 6); //index 2 to 5 are show

//<-marami pang mga string methods->

//string template literals
//`=backticks
let sen1 = `'hello' "hi"`;
document.getElementById("bac1").innerHTML = "`=backticks" + "<br>" + sen1; //allow to type "" and '' and show on html
//${}
let s = "${}:";
document.getElementById("$1").innerHTML = `${s} ${"<br>"} ${sen1}.`; //easy to use than +

//<<arrays>>
let names = ["jareth", "rafael", "joanne"];
let numbers = [2, 4, 6, 8.02, 10];
let mixed = [1, "jareth", 2, "rafael", 3.1, "joanne"];
document.getElementById(
  "ar1"
).innerHTML = ` arrays: ${"<br>"} ${names} ${"<br>"}  ${numbers} ${"<br>"} ${mixed}`;
//array length
document.getElementById("ar2").innerHTML = ` names[1]: ${"<br>"}   ${
  names[1]
} `; //showing index 1 =rafael
document.getElementById(
  "ar3"
).innerHTML = ` names[names.length - 2]: ${"<br>"}   ${
  names[names.length - 2]
} `;
//updating arrays
names[1] = "pogi rafael"; //changing
document.getElementById(
  "ar4"
).innerHTML = ` names[1] = "pogi rafael": ${"<br>"}   ${names}`;
names[3] = "roberth"; //adding
document.getElementById(
  "ar5"
).innerHTML = ` names[3] = "roberth": ${"<br>"}   ${names}`;
names.push("lazarte"); //adding on end
document.getElementById(
  "ar6"
).innerHTML = ` names.push("lazarte"): ${"<br>"}   ${names}`;
names.unshift("lazarte"); //adding on start
document.getElementById(
  "ar7"
).innerHTML = ` names.unshift("lazarte"): ${"<br>"}   ${names}`;
names[names.length] = "family"; //adding on start
document.getElementById(
  "ar8"
).innerHTML = ` names[names.length]="family": ${"<br>"}   ${names}`;
//deleting arrays
names.length = 6; //showing index 0 and end index you put
document.getElementById(
  "ar9"
).innerHTML = ` names.length = 6: ${"<br>"}   ${names}`;
names.pop(); //deleting end
document.getElementById(
  "ar10"
).innerHTML = ` names.pop(): ${"<br>"}   ${names}`;
names.shift(); //deleting start
document.getElementById(
  "ar11"
).innerHTML = ` names.shift(): ${"<br>"}   ${names}`;
names = names.slice(1, 3); // names=names.slice(start,end)
document.getElementById(
  "ar12"
).innerHTML = ` names=names.slice(start,end): ${"<br>"}   ${names}`;

//ex
let fn = ["david", "jareth", "joanne"];
let ln = ["sdpt", "crus", "lazarte"];
let age = ["22", "12", "15"];
let id = 2; //input
document.getElementById("fn1").innerHTML = `ex: ${"<br>"}first name = ${
  fn[id]
} ${"<br>"} last name = ${ln[id]} ${"<br>"} age = ${age[id]} `;

//<<comparison operator>>
//== //not strict
//=== //strict
//! //revers //ex != ,!==
//<,>,>=,<=

//ex
let grade = 99;
if (grade <= 74) {
  console.log("failed");
} else if (grade <= 89) {
  console.log("passed");
} else if (grade <= 94) {
  console.log("with honor");
} else if (grade <= 97) {
  console.log("with high honor");
} else if (grade <= 100) {
  console.log("with highest honor");
} else if (grade >= 101) {
  console.log("invalid");
}
// <<logical operator>>
//&&,||

// ex
let age1 = 14;
let reg = "registered";

if (reg == "registered" && age1 >= 18) {
  console.log("valid voter");
} else if (reg == "not registered" && age1 >= 18) {
  console.log("register first");
}
if (reg == "registered" && age1 < 18) {
  console.log("invalid voter");
} else if (reg == "not registered" && age1 < 18) {
  console.log("non voter");
}

//<<switch statement>>
let day = 3;

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("error");
}

//<<while array>>

let nam = ["rafael", "jareth", "joanne", "roberth"];
nam.push("lazarte family");
let ins = 0;
while (nam[ins]) {
  console.log(nam[ins]);
  ins++;
  if (ins === 2) {
    break;
  }
}
//do while
//do{}while();
//<<for loop>>
for (let x = 0; x < nam.length; x++) {
  console.log("for loop:");
  console.log(nam[x]);
}

//for in loop
for (let y in nam) {
  console.log("for in loop:");
  console.log(nam[y]);
}

//for of loop
for (let per of nam) {
  console.log("for of loop:");
  console.log(per);
}

// <<jason structure>>
let pe1 = {
  firstname: "jose",
  lastname: "rizal",
  age: 32,
  hobbes: ["drawing", "writhing", "teaching"],
  pet: {
    0: {
      name: "doggy",
      type: "dog",
    },
    1: {
      name: "catty",
      type: "cat",
    },
  },
};
console.log(pe1);
//1st way
console.log(pe1["firstname"]);
//2nd way
console.log(`${pe1.firstname} ${pe1.age}`);
//1st way
console.log(pe1["hobbes"][1]);
//2nd way
console.log(pe1.hobbes[2]);

//json read
//1st way
console.log(pe1["pet"][0]["name"])
//2nd way
console.log(pe1.pet[1].type)

//json write
//changing
//1st way
pe1["firstname"]="john";
console.log(pe1)
//2nd way
pe1.firstname = "karen";
console.log(pe1);
//changing inside array
pe1.hobbes[1]="running";
//adding
//1st way
pe1["middlename"]="E";
console.log(pe1)
//2nd way
pe1.bloodtype = "o";
console.log(pe1);
//adding inside array
pe1.hobbes[3]="coding";
console.log(pe1.hobbes)

//stringify
//making json string
let pdata = JSON.stringify(pe1);
console.log(pdata);
//parsing
//making string  json
let stpe1 =`{"firstname":"karen","lastname":"rizal","age":32}`
let jspe1 = JSON.parse(stpe1);
console.log(jspe1);
//json array
let newpe1 = [
  {
    name:"json",
    lastname:"pinto",
    age:17
  },
   {
    name:"jas",
    lastname:"biglangdapa",
    age:16
  },
   {
    name:"warren",
    lastname:"entoma",
    age:19
  }
];

console.log(`${newpe1[0].name} ${newpe1[0].age}`);

//ex
for (let v = 0 ; v < newpe1.length ; v++ ) {
  console.log(`name : ${newpe1[v].name}`);
  console.log(`last name : ${newpe1[v].lastname}`);
  console.log(`age : ${newpe1[v].age}`);
  console.log('');
}

//<<json & for in loop
for(let D in newpe1){
  console.log(D); //showing key of newpe1 which is 0,1,3
  console.log(newpe1[D]);//showing inside key
}
//object.keys() method
//showing array format
let ob1 = Object.keys(newpe1);
console.log(ob1);

//ex
let g1 = 
{
  math:83,
  english: 85,
  Filipino:93,
  esp:89
}
let B=0;
for(let Y in g1){
  console.log(`${Y}:${g1[Y]}`);
  B+=g1[Y]
 };
 B/=Object.keys(g1).length;
 console.log(B);

//<<function>>
function sayhello(){
console.log("Hello");
}
//calling function
sayhello();
sayhello();

//math
function addition(numb1,numb2){
  let ans=numb1 + numb2;
  console.log(ans);
}
//input what you want
addition(5,10);

//inputing using console
function division(n1,n2){
  let an1 = n1 / n2 ;
  console.log(an1);
}
//
//names
let na =["jomar","junjun","delulu","jc"];
let na1 =["janna","rose","sara","james"];
let me ='cruz';
function namess(person){
  for(let Y = 0; Y < na.length; Y++){
    console.log(person[Y]+ ":" + me);
  }
}
namess(na);
namess(na1);

//return keyword
function matt(n1,n2){
  return n1 + n2;

}

ad = matt(5,10);
console.log(ad);