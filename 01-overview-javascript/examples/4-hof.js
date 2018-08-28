function map(arr, fn){
  const newArr = []
  
  arr.forEach(function(val){
    newArr.push(fn(val))
  })
  
  return newArr
}

function addTwo(num){ return num+2 }

const x = [0,1,2,3]

console.log(map(x, addTwo))