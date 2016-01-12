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
intercom