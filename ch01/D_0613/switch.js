const readline = require('readline')

const ri = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

ri.question('C 드라이브를 포멧하시겠습니까? ', function (ch){
    switch (ch){
        case 'y':
            console.log('예 드라이브를 포멧하겠습니다.')
            break
        default:
            console.log('취소')
            break
    }
    ri.close()
})
// switch (n){
//     case 1:
//         console.log('1번을 선택하셨습니다')
//         break
//     case 2:
//         console.log('2번을 선택하셨습니다')
//         break
//     default:
//         break
// }


