//question #1//

var user1a=prompt("Enter your first name")
var user1b=prompt("Enter your last name")
var fullName= user1a+" "+user1b

alert(fullName +" "+"we are welcoming You")

//question #2//

var user1=prompt("Tell us about your fvr8 mobile brand")
document.write("my fvr8 phone is:"+" "+user1)
document.write("lenght of string is "+" " + user1.length+"<br>")

//question #3//

var firstName = "pakistani"
var char = firstName.indexOf("n")
document.write("String:" + " " + firstName + "<br>")
document.write('index of "n" is:' + " " + char)

//question #4//

var firstName= "hello world"
var char=firstName.lastIndexOf("l")
document.write("String:"+" "+firstName+"<br>")
document.write('last index of "l" is:'+ " "+char)

//question #5//

var firstName= "pakistani"
var char=firstName.charAt(3)
document.write("String:"+" "+firstName+"<br>")
document.write('char at index 3:'+ " "+char)

//question #6//

var firstName2 = prompt("Enter your first name")
var lastName2 = prompt("Enter your last name")
var fullName2 = firstName2.concat(" "+lastName2);
document.write("My name is "+fullName2)

//question #7//

var city= "hyderabad"
var rep= city.replace("hyder","Islam")
document.write("city:"+" "+city+"<br>")
document.write("After replacement:"+" "+rep)

//question #8//

var city=  "Ali and Sami are best friends. They play cricket and football together"
var rep= city.replace(/and/g,"&")
document.write("city:"+" "+city+"<br>")
document.write("After replacement:"+" "+rep)

//question #9//

var value= 472
document.write("value:"+value+"<br>")
var a=typeof(value)

document.write("type:"+a+"<br>")
document.write("value:"+" "+value+" <br>")
var str=value.toString()
var b=typeof(str)
document.write("type:"+b+"<br>")

//question #10//

var inp= prompt("Enter value")
var inputCap=inp.toUpperCase()
document.write(inputCap)

//question #11//

var inp= prompt("Enter value")
var inputCap=inp.charAt(0).toUpperCase() + inp.substr(1).toLowerCase();
document.write(inputCap)

//question #12//

var value = 35.36
document.write("number:" + value + "<br>")
var value2 = value.toString()

var deci = value2.replace(".", "")
document.write("result" + " " + deci)


//question #13//

var nam = prompt("enter your username")
for(i=0; i<nam.length; i++){

    if (nam.charAt(i) === "@" || nam.charAt(i) === "." || nam.charAt(i) === "," || nam.charAt(i) === "!") {
        prompt("please enter a correct user name")
        break;

    }
    
}

document.write(nam)


//question #14//

document.writeln("<br><br>")
var bakery = new Array('cake', 'apple pie', 'cookie', 'chips', 'patties')
var order = prompt('Welcome to ABC Bakery. What do you want to order Sir/Mam?')
var index = [0,1,2,3,4]
order = order.toLowerCase();
for(var i=0;i<bakery.length && index.length ;i++){
    if(order === bakery[i]){
        document.writeln('<br>'+order+' is available at index '+index[i]+' in our bakery.')
    }
    else{
        document.writeln('<br>We are sorry. '+order+' is not available in our bakery.')
    }    
}

//question #15//

document.writeln("<br><br>")
var pswrd = prompt('Enter a password')
document.write('Enter password: '+pswrd)
if(pswrd === String || Number){
    if(pswrd.length > 6){
        if(pswrd.startsWith() === Number){
            document.write('<br>Password can not begin with a number')
            document.write('<br>Please Enter a valid password')
        }
    }
    else{
        document.writeln('<br>Password must be contain more than 6 characters')
    }
}

//question #16//

document.write("<br><br>")
var university = 'University of Karachi';
var convertInArr = university.split('');
for(var i=0; i< convertInArr.length;i++){
    document.writeln(convertInArr[i]+'<br>')
}

//quetion #17//

document.write("<br><br>")
var aChar = prompt('Enter a word')
document.write('User Input: '+aChar)
document.write('<br>Last character of input: '+aChar.slice(aChar.length - 1))

//question 18//

ocument.write("<br><br>")
var para ='The quick brown fox jumps over the lazy dog';
var upperPara = para.toLowerCase()
document.write('Text: '+para)
var count = upperPara.match(/the/g).length;
document.write('<br>There are '+count+' occurences of the word "the"')
























