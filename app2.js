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
// var currentYear = 2018
// var carName = 'Ford'
// var carYear = 2008
// var carAge = currentYear - carYear

// if (carAge < 5) {
//     console.log(carName + ' младше 5 лет')
// } else if (carAge >= 5 && carAge <= 10) {
//     console.log(carName + ' старше 5 но младше 10')
// } else {
//     console.log('Возраст ' + carName + ' равняется ' + carAge)
// }
// var userInput = 'foobar'

// switch (userInput) {
//     case 'blue':
//         console.log('I\'m blue dabudi...')
//         break
//     case 'grey':
//         console.log('listen to Eiffel 65')
//         break
//     case 'happy':
//         console.log('listen to Eiffel 65')
//         break
//     default:
//         console.log('listen to Eiffel 65 because you\'re strange')
// }

// var johnYear = 2001
// var vovaYear = 1997
// var mashaYear = 2005
// var currentYear = 2020

// function calcAge(year) {
//     var result = currentYear - year
//     return result
// }
// function logAge(year, object, compareYear) {
//     if (calcAge(year) < compareYear) {
//         console.log(object + ' младше '+ compareYear)
//     } else {
//         console.log(object + ' старше '+ compareYear)
//     }
// }
// logAge(mashaYear, 'Masha', 11)

// alert('hi!!!!')

// var div = document.getElementById('thiswebpage')
// var h1 = document.getElementsByTagName('h1')
// console.log(div)

//актуальный сегодня .querySelector
// class -> .CLASS_NAME
// id ->    #ID
// tag ->   TAG

// var div = document.querySelector('#thiswebpage') 
// var p = document.querySelectorAll('.text')
// var h1 = document.querySelector('h1')
// var ul = document.querySelector('#thiswebpage ul')
// var ul2 = document.querySelector('#thiswebpage > div ul')
// var input = document.querySelector('input')
// h1.textContent = 'Changed by JS'
// // console.log(div)
// // console.log(p)
// console.log(h1.textContent)
// console.log(input.value)
// console.log(ul)
// console.log(ul2)

// var a = document.querySelector('a')
// var oldHref = a.getAttribute('href')
// // console.log(a.attributes)
// a.setAttribute('href', 'https://yahoo.com')
// a.setAttribute('title', 'Go to Yahoo') 
// a.textContent = 'Yahoo'

// var box1 = document.querySelector('#box1')
// var box2 = document.querySelector('#box2')

// box1.classList.add('blue')
// box2.classList.add('red')

// var hasClass = box1.classList.contains('blue')
// var hasClass2 = box2.classList.contains('red')
// console.log(hasClass, hasClass2)

// if (hasClass2) {
//     box2.classList.remove('blue')
// } else {
//     box2.classList.add('blue')
// }
// var button = document.querySelector(' button')
// var h1 = document.querySelector('h1')
// var input = document.querySelector('input')

// function buttonHandler() {
//     console.log('clicked');
//     h1.textContent = input.value

// }
// h1.addEventListener('mouseenter', function () {
//     this.style.color = 'red'
//     this.style.backgroundColor = 'black'
// })
// h1.addEventListener('mouseleave', function () {
//     this.style.color = 'black'
//     this.style.backgroundColor = 'transparent'
// })
// button.addEventListener('click', buttonHandler)

// var link = document.querySelector('a')
// var divs = document.querySelectorAll('div')
// for (i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', function (event) {
//         event.stopPropagation()
//         console.log(this.getAttribute('id'));
//     })
// }

// link.addEventListener('click', handleLinkClick)

// function handleLinkClick(event) {
//     event.preventDefault()
//     var div = divs[0]
//     div.style.display = div.style.display === 'none'
//         ? 'flex'
//         : 'none'
// }

// var p = document.querySelectorAll('p')

// for (var i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', function (event) {
//         event.target.style.color = 'red'
//     })
// }
document.getElementById('wrapper').addEventListener('click', function (event) {
    var tagName = event.target.tagName.toLowerCase()
    if (tagName === 'p') {
        event.target.style.color = 'red'
    }
})
