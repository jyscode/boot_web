
const coffee = function (){
    alert('주문하신 커피 나왔습니다')
}

function order(){
    setTimeout(coffee, 5000)
}

btn.addEventListener('click', order)
