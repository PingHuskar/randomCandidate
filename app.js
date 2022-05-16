
function main() {
    var allCard = $(".card")
    var randomNum = randint(0, 6)
    console.log(randomNum)
    allCard.eq(randomNum).addClass("on")
    // https://stackoverflow.com/questions/49314884/elementindex-addclass-does-not-work
}

function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}