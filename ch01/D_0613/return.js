

const readline = require('readline');

const ri = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    }
)

function checkAge(age){
    return age > 19
}

ri.question('나이를 입력하세요', function (nai){
    if (checkAge(nai)){
        console.log('입장 가능')
    } else {
        console.log('입장 불가')
    }
    ri.close()
})


