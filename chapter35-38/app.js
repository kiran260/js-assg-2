// question #1//

var currentTime;
function dateTime(){
    currentTime = new Date();
    document.write(currentTime)
}

dateTime();

// question #2//


function greet(firstName,lastName){
    document.write('Hello '+firstName+' '+lastName)
}

greet('kiran','maqsood');

// question #3//

var a = parseInt(prompt('Enter a number'))
var b = parseInt(prompt('Enter another number'))

function sumOfTwoNum(){
    var c = a + b;
    document.write('The sum of two numbers is '+c)
}

sumOfTwoNum();

// question #4//

var aNum = parseInt(prompt('Enter a number'))
var anNum = parseInt(prompt('Enter another number'))
var opertaor = prompt('Enter an operator')
var ans;
function calculator(firstNumber,secondNumber,optr){
    if(optr === '+'){
        ans = aNum + anNum;
    }
    else if(optr === '-'){
        ans = aNum - anNum;
    }
    else if(optr === '*'){
        ans = aNum * anNum;
    }
    else if(optr === '/'){
        ans = aNum / anNum;
    }
    else if(optr === '%'){
        ans = aNum % anNum;
    }
    document.write('The result is '+ans)
}

calculator(aNum,anNum,opertaor);


// question #6//


var sq = Math.pow(5,2);
function square(sqOfNum){
    return sq;
}

document.write('The sqaure of 5 is '+square(sq))

// question #6//


function Factorial(n){ 
    var ans1=1; 
      
    for (var i = 2; i <= n; i++){ 
        ans1 = ans1 * i;  
    }
    return ans1;
} 

document.write('The factorial of 9 is '+Factorial(9))

// question #7//


var startNum =parseInt(prompt('Starting number of counting'))
var endNum =parseInt(prompt('Ending number of counting'))

function counting(countStart,countEnd){
    for(var i = startNum; i <= endNum; i++){
        document.write(i+'<br>')
    }
}
counting(startNum,endNum);

// question #8//

var base = parseInt(prompt('Enter the base value'))
var per = parseInt(prompt('Enter the perpendicular value'))
var sqOfBase = Math.pow(base,2)
var sqOfPer = Math.pow(per,2)

function calculateHypoteneus(){
    document.write('Hypotenuse^2 = Base^2 + Perpendicular^2')
    document.write('<br>Hypotenuse^2 = '+sqOfBase+' + '+sqOfPer)
    document.write('<br>Hypotenuse^2 = '+calculateSquare(base,per));
}

function calculateSquare(value1,value2){
    return sqOfBase + sqOfPer;
}

calculateHypoteneus();

// question #9//

function areaOfRect(width,height){
    
    var area = width * height;
    document.write('Area = width * height ')
    document.write('<br>Area = '+width+ ' * '+height)
    return area;
}

document.write('<br>Area = '+areaOfRect(5,6));

// question #10//


var aPalindrome = prompt('Write a palindrome')
var reverse = aPalindrome.split('').reverse().join('')
function palindrome(word){
    if(reverse === word){
        document.write('It is a palindrome word')
    }
    else{
        document.write('It is not a palindrome word')
    }
}

palindrome(aPalindrome);

// question #11//


var sentence = "the quick brown fox";
function upperCase(str)
{
  var arr1 = str.split(' ');
  var arr2 = [];
    
  for(var i = 0; i < arr1.length; i++){ 
      var inUpper = arr1[i].charAt(0).toUpperCase();
      var firstChar = arr1[i].slice(1);
      var pushChar = arr2.push(inUpper+firstChar);
      pushChar = arr2.join(' ');
  }
  document.write('Example String: '+sentence)
  return pushChar;
}

document.write('<br>Expected Output: '+upperCase(sentence));

// question #12//


var sent = 'Web Development Tutorial';

function longestWord(str){
    var arr13 = str.match(/\w[a-z]{0,}/gi);
    var result = arr13[0];

    for(var i = 1 ; i < arr13.length ; i++){
        if(result.length < arr13[i].length){
            result = arr13[i];
        }   
    }
    document.write("EXAMPLE STRING : 'Web Development Tutorial'")
    return result;
}

document.write("<br>EXPECTED OUTPUT : "+longestWord(sent));

// question #13//

var wordOfOccur = 'JSResourceS.com';
var letterOfOccur = 'o';
function occurence(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count += 1;
        }
    }
    return count;
}

document.write('The number of occurence of letter '+letterOfOccur+' in '+wordOfOccur+' is '+occurence(wordOfOccur,letterOfOccur));

// question #14//


document.write('<h1>The Geometrizer</h1>')
var r = parseInt(prompt('Enter radius value'))
var pi = 3.142;
function calcCircumference(radius){
    var circumOfCircle = 2 * pi * radius;
    return circumOfCircle;
}

function calcArea(radius){
    document.write('The circumference is '+calcCircumference(r))
    var areaOfCircle = pi * radius * radius;
    return areaOfCircle;
}

document.write('<br>The area is '+calcArea(r))