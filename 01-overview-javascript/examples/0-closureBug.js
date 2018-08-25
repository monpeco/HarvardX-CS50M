function makeFunctionArray(){
  const arr = []

  for(var i = 2; i < 5; i++){
    arr.push( function() { console.log(i)} )
  }

  return arr
}

const functionArr = makeFunctionArray()

functionArr[0]()
