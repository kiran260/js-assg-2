//Question #1//

var a= new Date();
document.write(a)

//Question #2//

var a= new Date();
var b=a.toLocaleString('default', { month: 'long' })
document.write("Current Month:"+" " +b)

//Question #3//

var a= new Date();
var b=a.toLocaleString('default', { weekday: 'long' })
var d= b.slice(0,3)

document.write("today is "+" "+d)

//Question #4//

var a= new Date();
var b=a.toLocaleString('default', { weekday: 'long' })
document.write(b)
if(b==="Sunday" || c==="Saturday"){
    alert("its funday")
}

//Question #5//

var a= new Date();
var b= a.getDate()
document.write(b)
if(b<16){
    alert(" First fifteen days of the month")
}
else{
    alert( "Last days of the month")
}
// question #6//

var currentDate6 = new Date();
var currentTime6 = currentDate6.getTime();
document.write(currentDate6)
var givenDate = new Date('Jan 1, 1970');
var givenTime = givenDate.getTime();
var diffOfTime = currentTime6 - givenTime;
document.write('<br>Elapsed miliseconds since January 1, 1970: '+diffOfTime)
var timeInMin = diffOfTime/(1000*60)
document.write('<br>Elapsed minutes since January 1, 1970: '+timeInMin)

// question #7//

var currentDate7 = new Date();
var getCurrentTime7 = currentDate7.getHours()
if(getCurrentTime7 < 12){
    document.write("It's A.M")
}
else{
    document.write("It's P.M")
}

// question #8//

var currentDate8 = new Date(2020, 12, 0, 24, 0, -1)
document.write('Later Date: '+currentDate8)

// question #9//

var ramzanDate = new Date('April 25, 2020').getTime();
var currentDate9 = new Date().getTime();
var remainTime = currentDate9 - ramzanDate;
var remainDays = Math.floor(remainTime/(1000*60*60*24))
document.write(remainDays+' days have passed since 1st Ramadan, 2020')

// question #10//

var currentDate10 = new Date();
var beginDate = new Date('Jan 1, 2015');
var diffDate = currentDate10 - beginDate;
var passedSec = diffDate/1000;
document.write('On reference date '+currentDate10+',<br>'+passedSec+' seconds has passed since begin of 2015')


// question #11//

var currentDate11 = new Date();
document.write('Current time: '+currentDate11)
var anHourAgo = currentDate11.setHours(currentDate11.getHours() - 1);
var anHourDate = new Date(anHourAgo)
document.write('<br>1 hour ago, it was '+anHourDate)

// question #12//

var currentDate12 = new Date();
document.write('Current time: '+currentDate12)
var _100yearAgo = currentDate12.setFullYear(currentDate12.getFullYear() - 100);
var _100yearBack = new Date(_100yearAgo)
document.write('<br>100 years back, it was '+_100yearBack)

// question #13//
var currentDate13 = new Date().getFullYear();
var ageDate = new Date('Oct 24, 1998').getFullYear();
var diffAge = currentDate13 - ageDate;
document.write('Your age is '+diffAge)
document.write('<br>Your birth year is '+ageDate)

// question #14//


document.write('<h1>K-Electric Bill</h1>')
var customerName = 'kiran maqsood';
document.write('Customer Name: '+customerName)
var  months1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate14 = new Date();
var monthName1=months1[currentDate14.getMonth()];
document.write('<br>Month: '+monthName1)
var numOfUnit = 410;
document.write('<br>Number of unit: '+numOfUnit.toFixed(2))
var chargesPerUnit = 16;
document.write('<br>Charges per unit: '+chargesPerUnit.toFixed(2))
document.write('<br><br>')
var netAmount = numOfUnit * chargesPerUnit;
document.write('Net amount payable(within Due Date): '+netAmount.toFixed(2))
var lateCharges = 350;
document.write('<br>Late payment charges: '+lateCharges.toFixed(2))
var grossAmount = netAmount +lateCharges;
document.write('<br>Gross amount payable(within Due Date): '+grossAmount.toFixed(2))











