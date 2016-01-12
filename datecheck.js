// Write a JavaScript function that takes 3 arguments (year, month, and day) and calculates how many days between that day and today

// If the days are more than 30, return Y months, Z days
// If the months are more than 12, return X years, Y months, Z days
// Test Cases

// (Assuming today is April 2nd, 2015)

// age(2017, 11, 17) -> 2 years, 8 months, 15 days

// age(2015, 3, 6) -> 4 days
// Note that the month argument starts from 0 (11 is December)
// var a = Date.now();
// var b = (a/86400000);
// var day = Math.floor(b);
// console.log(day);
// var age = function(x,y,z) {
// 	var then = new Date(x, y, z);
// 	var then2 = Math.floor(then.getTime()/86400000);
// 	var dif = Math.floor(Math.abs(then2 - day));
// 	var years = Math.floor(dif/365);
// 	var months = Math.floor(dif-years*365)/12);
// 	var days = (dif - ((years*365)+(months*30)));
// 	console.log(then + then2 + dif + years + months +days);
// 	if (dif < 31) {
// 	console.log (dif + " days");
// 	} else if (dif < 365) { 
// 		console.log (months + " months " + (dif - (months*30)) + "days ") }
// 	else { console.log (years + " years " + months + " months " + days + "days ") }

// };
// age(2014, 4, 25)
var a = Date.now();
var b = (a/86400000);
var dayC = Math.floor(b);
console.log(dayC)
var age = function(x,y,z) {
  var aN = new Date(x,y,z);
  var bN = aN.getTime();
  var cN = (bN/86400000);
  var dayN = Math.floor(cN);
  var dif = (Math.abs(dayC-dayN))
  var mon = Math.floor(dif/30);
  var day1 = (dif - (mon*30));
  var year = Math.floor(dif/365)
  var mon2 = mon - (year*12)
  var day2 = (dif - (mon*30));
if (dif < 31) {
console.log(dif + " days")
} else if (mon < 12) {
console.log(mon + " months " + day1 + " days");
} else {
console.log(year + " years " + mon2 + " months " + day2 + " days")
} 
}
age(2004, 9, 4);