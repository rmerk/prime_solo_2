// ! ! !
// Three Bugs

var objAtticus = {
	name: "Atticus",
	employeeNum: "2405",
	annualSalary: "47000",
	reviewRating: 3
}
var objJem = {
	name: "Jem",
	employeeNum :  "62347",
	annualSalary : "63500",
	reviewRating: 4
}
var objBoo = {
	name: "Boo",
	employeeNum: "11435",
	annualSalary: "54000",
	reviewRating: 3
}
var objScout = {
	name: "Scout",
	employeeNum : "6243",
	annualSalary: "74750",
	reviewRating: 5
}

var object = [objAtticus, objJem, objBoo, objScout];
//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var prop in object){
	object[prop] = calculateSTI(object[prop]); //Changed calculateSTI(array) to calculateSTI(array[i])
 	newEl = document.createElement('li');
	newText = document.createTextNode(object[prop].join(", "));
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(object){
  var newArray = [];

  newArray[0] = object.name;

  var employeeNumber = object.employeeNum;
  var baseSalary = object.annualSalary;
  var reviewScore = object.reviewRating;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;  // I removed the basePercent - 1.
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}
