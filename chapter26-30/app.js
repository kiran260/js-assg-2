//Question #1//


var a = parseFloat(prompt('Enter a positive float number',3.45214))
var b=Math.round(a)
var c=Math.floor(a)
var d=Math.ceil(a)
document.write("NUMBER:"+a+"<br>"+"round of value:"+b+"<br>"+"floor value:"+c+"<br>"+"ceil value:"+d)

//Question #2//

var a = parseFloat(prompt('Enter a negative float number',-2.673))
var b=Math.round(a)
var c=Math.floor(a)
var d=Math.ceil(a)
document.write("NUMBER:"+a+"<br>"+"round of value:"+b+"<br>"+"floor value:"+c+"<br>"+"ceil value:"+d)

//Question #3//

var a=prompt("enter number")
var b=Math.abs(a)
document.write("Absolute value:"+ b)

//Question #4//

 var randm=Math.floor(Math.random()*6)
 document.write(randm)
     
//Question #5//

 var prom1= prompt("enter your side")
 var prom2= prompt("enter your side")

        var randm= Math.random()*2
        var floor= Math.floor(randm)
        document.write(floor)
        if(floor=== 0){
            alert("random coin toss value: head")
        }else{
            alert("random coin toss value: tail")
        }
//Question #6//

var randm= Math.random()*100
var round=Math.round(randm)
document.write("random number between 1-100 is:"+" "+round)

// questrion #7//

document.writeln("<br><br>")
var weight = parseInt(prompt('Enter your weight in kilogram'))
var weightInKg = (Math.random() + weight).toFixed(1);
document.writeln('The weight of user is '+weightInKg+' kilograms')

// question #8//

document.writeln("<br><br>")
var aNumber5 = parseInt(prompt('Enter a number between 1 and 10'))
var randomNumber = Math.floor(Math.random() * 10 + 1)
if(aNumber5 === randomNumber){
    document.writeln('Congratulation! Your answer is correct')
}
else{
    document.writeln('Try Again')
}




