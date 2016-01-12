var age = function(x,y,z) {
  var dateRaw = Date.now();
  var dateDay = (dateRaw/86400000);
  var dateCurrent = Math.floor(dateDay);
  var dateGiv = new Date(x,y,z);
  var dateGivRaw = dateGiv.getTime();
  var dateGivDay = dateGivRaw/86400000;
  var dateGiven = Math.floor(dateGivDay);
  var differenceDay = Math.abs(dateCurrent- dateGiven);
  var month = Math.floor(differenceDay/30);
  var day1 = differenceDay - (month*30);
  var year = Math.floor(differenceDay/365);
  var month2 = month - (year*12);
  var day2 = differenceDay - (month2*30);
  if (differenceDay < 31) {
    console.log(differenceDay + " days");
      } else if (month < 12) {
        console.log(month2 + " months " + day1 + " days");
          } else {
        console.log(year + " years " + month2 + " months " + day2 + " days");
      };
};
age(2005, 9, 4);



