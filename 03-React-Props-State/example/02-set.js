//extend a native implementation of Set

class MySet extends Set{
  constructor(arr){
    super(arr)
    this.originalArray = arr
  }

  toArray(){
    return Array.from(this)
  }

  reset(){
    return new MySet(this.originalArray)
  }
}

const s = new MySet([1,2,3,4,5])
s.add(6)
s.add(7)
console.log(s.toArray())

const reset = s.reset()
console.log(reset.toArray())
