var i = 10
document.querySelector('#randomize').addEventListener('click', function (event) {
    var rand = Math.ceil(Math.random() * 100)
    document.querySelector('#result').textContent = rand
    i++
    document.querySelector('.form').style.fontSize = i + 'px'

})


