const conversion = (num: number) => {
  if (isNaN(num))
    return NaN;
  const digits = String(+num).split(""),
  key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
    "","I","II","III","IV","V","VI","VII","VIII","IX"]
  let roman = "";
  let i: number = 3;
  
  while (i--)
    roman = (key[+(digits.pop() ?? '100') + (i * 10)] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}

console.log(conversion(1))
console.log(conversion(2))
console.log(conversion(4))
console.log(conversion(5))
console.log(conversion(6))
console.log(conversion(9))
console.log(conversion(10))
console.log(conversion(11))
console.log(conversion(25))
console.log(conversion(24))
console.log(conversion(100))
console.log(conversion(1000))
console.log(conversion(2000))
console.log(conversion(2500))