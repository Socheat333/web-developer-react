function greetinMessage(){
    console.log("Welcome to function")
}
greetinMessage()

function WelcomeMessage(name = "Nana"){
    console.log(`Welcome, ${name}`)
}
WelcomeMessage("Mana")
WelcomeMessage()

function sum(num1 ,num2 ){
    let result = num1 + num2
    return result
}
console.log(sum(10,20))

let greet = () => console.log("Welcome")


let button = document.querySelector("#btn")
button.addEventListener("click", function(){
    console.log("button was clicked")
    greet()
})