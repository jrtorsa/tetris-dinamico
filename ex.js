// const arr = [[1,2], [3], [4,5]];

// const flatten = arr => {
//     return arr.flat()
// }

// console.log(flatten(arr))

// var n = 0;

// const increment = () => {
//   n++;
//   return n;
// }

// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())

// const maximo = (...n) => {
//   const max = Math.max(...n)
//   console.log('max', max )
// }

// console.log(maximo(1,2,3,4,5))

// const isPlate = str => {
//   if(str.length > 6) return false
//   const firstThree = str.slice(0, 3)
//   const secondThree = str.slice(3, 6)
//   if(!isNaN(secondThree * 1)){
//     if(firstThree == firstThree.toUpperCase()){
//       return true;
//     } else if(firstThree == firstThree.toLowerCase()){
//       return false;
//     } 
//   } else {
//     return false
//   }
// }

// console.log(isPlate('mvvMVV'))

// const split = (str) => {
//   const strMod = str.replace(/[-&\/\\#+()$~%.'":*?<>{}]/g, ',')
//   const arr = strMod.split(/[,]/g)
//   return arr
// }

// console.log(split('Hello+World'))

// const plates = str => {
//  const newStr = str.split(' ')
//  let newArr = [];
//  newStr.forEach(element => {
//    if(element.length === 6){
//      let firstThree = element.slice(0, 3)
//      let secondThree = element.slice(3, 6)
//      if(firstThree == firstThree.toUpperCase() && !isNaN(secondThree * 1)){
//        newArr.push(element)
//      } else {
//        return;
//      }
//    }
//  })
//  return newArr
// }

// console.log(plates('Iba en un AAA123 y después en un BBB987'))

const template = (str, obj) => {
  const strArr = str.split(" ")
  const regEx = /([^[]+(?=]))/g.test(strArr)
   
  
}

console.log(template('Hola [nombre], tu saldo es [saldo]', { nombre: 'German', saldo: 12000}))







































