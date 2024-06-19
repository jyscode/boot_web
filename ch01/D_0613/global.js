
let saveUser = '김사랑'
function account(userId) {
    let saveUser = new String("이은")
    let saveUser2 = saveUser

    console.log(userId === saveUser)
    console.log(saveUser === saveUser2)

    saveUser.met = 10


    console.log(Object.keys(saveUser))
    console.log(saveUser.at(0))
    for (let i in saveUser){
        console.log(saveUser[i])
    }
}

account(new String('이은'))
// console.log('또 오셨네요 ', saveUser, "님")
