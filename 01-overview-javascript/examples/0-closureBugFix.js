function makeFunctionArray(){
  const arr = []

  for(let i = 2; i < 5; i++){ // change var for let
    arr.push( function() { console.log(i)} )
  }

  return arr
}

const functionArr = makeFunctionArray()

functionArr[0]()
