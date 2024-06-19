var pro1 = new Promise(
    function (resolve, reject){
        let num = Math.random()
        console.log(num)
        if (num < 0.5) setTimeout(resolve.bind(null, '성공'), 3000)
        else setTimeout(reject.bind(null, '실패'), 1)
    }
)

pro1.then(function (value){
    console.log(value)
}).catch(function (value){
    console.log(value)
})
