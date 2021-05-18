// // here we declare variable 'name'
// let name = 'shoztobou'
// /* here we declare a list:
//  'firstArray'
// */
//  const firstArray = ['John', 'Whick', 1, 2, 3, 'Johnathan', 4, 5, 6]
// for (i in firstArray){
//     console.log(firstArray[i],name)
// }
// let nameDouble = { name: 1 }
// console.log(nameDouble)
// var num1 = 47
// var num2 = 69
// var str1 = ' 58 1'
// var result = num1 + (num2 + str1)

// console.log(result, typeof result)
var currentYear = 2018
var carName = 'Ford'
var carYear = 2008
var carAge = currentYear - carYear

if (carAge < 5) {
    console.log(carName + ' младше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
    console.log(carName + ' старше 5 но младше 10')
} else {
    console.log('Возраст ' + carName + ' равняется ' + carAge)
}