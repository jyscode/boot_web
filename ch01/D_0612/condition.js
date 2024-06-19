const readline = require('readline');

const ri = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// ri.question('프로그래밍 언어 이름을 입력하십시오: ', function(data){
//     console.log('가장 좋아하는 프로그래밍 언어는 ' + data + '입니다')
//     ri.close()
// })

ri.question('정수를 입력하세요: ', function(num){
    num = num % 2
    if(num){
        console.log('홀수입니다')
    } else {
        console.log('짝수입니다')
    }
    ri.close()
})
