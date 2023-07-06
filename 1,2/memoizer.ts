const memoizer = (func: (...args: any[]) => any) => {
  const preValues: {[keys: string]: any} = {}
  return (...args: any[]) => {
    const index = JSON.stringify(args)
    if ( ! (index in preValues) ) {
      preValues[index] = func(...args)
      console.log("function called")
    }
    return preValues[index]
  }
}

const square = memoizer((num: number, val: string) => num * num)
console.log(square(5, '1'))
console.log(square(5, '1'))
console.log(square(5, '2'))
console.log(square(5, '3'))
console.log(square(5, '3'))
console.log(square(100, '1'))
console.log(square(100, '2'))
console.log(square(100, '1'))
console.log(square(100, '12'))
console.log(square(100, '2'))
