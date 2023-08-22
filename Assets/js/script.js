// to output js projects
// alert("Hello World") 
// console.log("Hello World 2")


// to output a number variable
// var x = 7
// var y = 10


// to output string variables
// var container = "box"


// to update variable items
// var id = "Grace"
// console.log(id)
// id = "Ganobi"
// console.log(id)


// Mathematical Operations(+, -, /, *, **, %)
// console.log(5 + 7)

// mathematical operations using variables
// var number1 = 8
// var number2 = 10
// console.log(number1 + number2)

// multiple numbers
// var num1 = 3
// var num2 = 6
// var num3 = 9
// var num4 = 12
// console.log(num1 + num2 + num3 + num4)

// multiple numbers and operators
// var sum = num1 + num2 + num3 + num4
// var num = 6
// console.log(sum / num)

// Conditional Statements
// If Statements
// if(condition){execution} - with the boolean value
// if(true){
//     console.log("It is true")
// }
// // if(condition){execution} - with conditional operators
// if(5 > 3){
//     console.log("It is true")
// }
// false statements won't run in the program
// if(1 == 5){
//     console.log("It is true")
// }
// // employ variables
// var num1 = 8
// var num2 = 7
// if(num1 > num2){
//     console.log("num1 is greater")
// }

// // the principle of concatenating(+)
// var num1 = 8
// var num2 = 7
// if(num1 > num2){
//     console.log(num1+" is greater")
// }

// Else Statements
// var num1 = 20
// var num2 = 30
// if(num1 > num2){
//     console.log(num1+" is greater")
// }else{
//     console.log(num2+" is greater")
// }

// Assignment
// var fig1 = 1780
// var fig2 = 4565
// if(fig1 > fig2){
//     console.log(fig1+" is greater than " +fig2)
// }else{
//     console.log(fig2+" is greater than " +fig1) 
// }

// chatbot
// var message = "I am fine"
// if(message == "Hello"){
//     console.log("How are you?")
// }else if(message == "I am fine"){
//     console.log("That's good")
// }else if(message == "I am having a problem"){
//     console.log("What problem is it")
// }else{
//     console.log("Who are you?")
// }

// nested if else statements
// var age = 12
// var level = "JSS1"

// if(age <= 18){
//     if(level == "JSS1"){
//         console.log("You are eligible")
//     }else{
//         console.log("Your level is not eligible")
//     }
// }else{
//     console.log("Your age is not eligible")
// }

// Assignment


// logical operators "AND"/"OR"
// if(5 == 2 || 3 > 1){
//     console.log("True")
// }else{
//     console.log("False")
// }

// if else statements simplified with logical operators
// the downside of this is that it can't tell the user the parameter that was incorrect
// if(age <= 18 && level == "JSS1"){
//     console.log("You are eligible")
// }else{
//     console.log("You are not eligible")
// }

// arrays
// var names=["John", "Mary", "Peter", "Paul", ["boy", ["sports", "hobby"], "girl"]]

// array operations
// 1. Selecting/getting data in an array
// names[0]
// console.log(names[0])

// implementing concatenation on an array
// console.log("My name is "+names[2])

// view all the content in an array
// console.log(names)

// 2. Updating data in an array
// names[1] = "Sarah"
// console.log(names)

// 3. Adding an item to an array
// names[4] = "Peace"
// console.log(names)

// multidimensionl array
// console.log(names[4][1])
// console.log(names[4][1][1])

// objects
// var person = {
//     age:27,
//     eye:"green", 
//     hair:"black",
//     vitals:{
//         genotype:"AA",
//         blood_group:"O+",
//         bmi:31
//     } 
// }

// object operators
// console.log(person.age)

// output all the values
// console.log(person)

// updating in objects
// person.age = 30
// console.log(person)

// multidimensional objects
// console.log(person.vitals.bmi)

// storing arrays inside objects
// var person = {
//     age:27,
//     eye:"green", 
//     hair:"black",
//     vitals:{
//         genotype:"AA",
//         blood_group:"O+",
//         bmi:31
//     },
//     sports:["Football", "Tennis", {club:"Manchester"}, "Basketball"] 
// }

// output an array item from objects
// console.log(person.sports[1])

// Methods
// var person = {
//     name:"John",
//     age:27,
    // speak:function(){
    //     console.log("I am speaking")
    // }
//     speak:function(word){
//         console.log(word)
//     },
//     sum:function(x,y){
//         console.log(x+y)
//     }
// }

// console.log(person.speak())
// person.speak("This is the word")
// person.speak("This is the second word...")
// person.sum(7, 8)


// Loops(running a program repeatedly)
// while loops
// var x = 0;
// while(x < 10){
//     console.log("Frontend")
//     x++
//     // or x = x + 1
// }

// for loops
// for(var y = 0; y < 100; y++){
//     console.log("Running")
// }

// output arrays using for loops
// var names = ["John", "Peter", "James", "Silas"]
// for(var i = 0; i < 100; i++){
//     console.log(names[i])
// }

// // output arrays using for loops and an if else statement
// for(var i = 0; i < 10; i++){
//     if(names[i] == "James"){
//         console.log(names[i])
//     }else{
//         console.log("Not James")
//     }
// }

// Functions
// creating functions
// function saySomething(){
//     console.log("Hello World")
// }
// // calling functions
// saySomething()

// function saySomething(){
//     var x = 7
//     var y = 8
//     console.log(x + y)
// }

// saySomething()
// saySomething()
// saySomething()
// saySomething()

// arguments and parameters
// function saySomething(){
//     var x = 7
//     var y = 8
//     var z = 9
//     console.log(x + y + z)
// }

// saySomething(7, 8, 9)
// saySomething(10, 6, 2)

// function doSomething(x, y, z){
    // var x = 5
    // var y = 8
//     console.log(x+y)
//     console.log("My name is "+z)
// }

// console.log("Something")
// doSomething()
// console.log("Something else...")
// doSomething()

// doSomething(7, 9, "Princess")
// doSomething(10, 5, "Ganobi")

// returning a value with functions
// function doSomething(){

//     return "Hello"
// }

// console.log(doSomething())

// Document Object Model
// call and print
// var logo_text = document.getElementById("logo-text")
// console.log(logo_text) 

// var menu = document.getElementById("menu")
// menu.addEventListener("click", function(){
//     console.log("I have been clicked!")
//     modal_background.style.display = "flex"
// })


// Assignment
// Put a button in the modal that says close. Listen for a click event and when it happens, close the modal
// var closeModalBtn = document.getElementById("closemodal");
// var modalBackground = document.getElementById("modal-background");

//     closeModalBtn.addEventListener("click", function() {
//         modalBackground.style.display = "none";
//     });

// select elements by class name
// var p = document.getElementsByClassName("p")
// console.log(p)
// console.log(p.length) - to tamper with bulk elements
// p[0].style.color = "yellow"
// call multiple classes at a time
// for(var i=0; i<3; i++) or
// for(var i=0; i<p.length; i++){
//     p[i].style.color = "yellow"
// }


// Assignment 2
// var btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
//     var fullname = document.getElementById("fullname");
//     var email = document.getElementById("email");
//     var subject = document.getElementById("subject");
//     var message = document.getElementById("message");

//     console.log(fullname.value)
//     console.log(email.value)
//     console.log(subject.value)
//     console.log(message.value)
// })

// function shout(){
//     var fullname = document.getElementById("fullname");
//     var email = document.getElementById("email");
//     var subject = document.getElementById("subject");
//     var message = document.getElementById("message");

//     console.log(fullname)
//     console.log(email)
//     console.log(subject)
//     console.log(message)
// }

// form validation
function validate(){
   
    var fullname = document.getElementById("fullname")
    var email = document.getElementById("email")
    var phone = document.getElementById("phone")
    var subject = document.getElementById("subject")
    var message = document.getElementById("message")

    if(fullname.value == ""){
        alert("Fullname cannot be empty!")
        return false
    }else if(email.value == ""){
        alert("Email cannot be empty!")
        return false
    }else if(email.value.includes("@") == false){
        alert("Email is invalid!")
        return false
    }else if(phone.value == ""){
        alert("Phone cannot be empty!")
        return false
    }else if(isNaN(phone.value) == true){
        alert("Only numbers are allowed!")
        return false
    }else if(phone.value.length > 11){
        alert("Phone cannot be more than 11 digits")
        return false
    }else if(phone.value.length < 11){
        alert("Phone cannot be less than 11 digits")
        return false
    }else if(subject.value == ""){
        alert("Subject cannot be empty!")
        return false
    }else if(message.value == ""){
        alert("Message cannot be empty!")
        return false
    }else{
        return true
    }
}

var time = 10
var interval = setInterval(function(){
    time--
    if(time == 0){
        clearInterval(interval)
    }
    console.log(time)
}, 1000)


// setTimeout(function(){
//     console.log("Count Down")
// }, 5000)

AOS.init();