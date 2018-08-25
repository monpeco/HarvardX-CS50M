function makeHelloFunction(){
  const message = "Hello!"
  
  function sayHello(){
    console.log(message)
  }
  
  return sayHello
}

const sayHello1 = makeHelloFunction()

//console.log(message) //error!!

console.log("typeof message", typeof message)
console.log("sayHello.toString()", sayHello1.toString())

sayHello1()

/*
Output:

typeof message undefined
sayHello.toString() function sayHello(){
    console.log(message)
  }
Hello!

*/