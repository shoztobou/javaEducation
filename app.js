var i = 10
document.querySelector('#randomize').addEventListener('click', function (event) {
    var rand = Math.ceil(Math.random() * 100)
    document.querySelector('#result').textContent = rand
    i++
    document.querySelector('.form').style.fontSize = i + 'px'

})

document.querySelector('#saveButton').addEventListener('click', function (event) {
    var value = document.querySelector('input').value
    var obj = {
        text: value
    }
    localStorage.setItem('headerText', JSON.stringify(obj))
})

document.addEventListener('DOMContentLoaded', function () {
    var obj = {}
    try {
        obj = JSON.parse(localStorage.getItem('headerText'))
    } catch (e) { }
    if (obj && obj.text && obj.text.trim()) {
        document.querySelector('h2').textContent = obj.text
    }
})