class Set{
  constructor(arr){
    this.arr = arr
  }
  
  add(val){
    if (!this.has(val)) this.arr.push(val)
  }
  
  delete(val){
    this.arr = this.arr.filter( x => x !== val)
  }
  
  has(val){
    return this.arr.includes(val)
  }
  
  get size(){
    return this.arr.length
  }
}

const d = new Set([1,2,3,4,5])

console.log("This is the size of the set: " + d.size)

console.log("Now add a new value, 6  ")
d.add(6)
console.log("This is the size of the set: " + d.size + ". It was added!")

console.log("Try to add an already addede value")
console.log("And the size shoule be the same (6): " + d.size)

d.delete(2)
console.log("Now we remove an value: " + d.size + ". Shoul be 5 again")