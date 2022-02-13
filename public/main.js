const redBtn = document.getElementById('red')
const greyBtn = document.getElementById('grey')
const blackBtn = document.getElementById('black')

const changePicture = color => {
    console.log('Picture Changed')
    document.getElementById("monsterImg").src=`images/Mon${color}_1050x650.png`
}

redBtn.addEventListener("click", function(){changePicture('Red')})
greyBtn.addEventListener("click", function(){changePicture('Grey')})
blackBtn.addEventListener("click", function(){changePicture('Black')})