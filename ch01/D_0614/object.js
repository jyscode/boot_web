let dic = new Object()

function Dic2(boy, girl, friend){
    this.boy = boy
    this.girl = girl
    this.friend = friend
}

const dic2 = new Dic2('sonyun', 'sonyeo', 'chin9')

dic.boy = '소년'
dic.girl = '소녀'
dic.friend = '친구'

dic.method = function (){
    console.log('Exec Method')
}

Dic2.prototype.changeBoy = function (boy){
    console.log(this)
    this.boy = boy
}

console.log(typeof dic, typeof Dic2)
console.log(Dic2.prototype)
console.log(dic)
console.log(dic.boy)
console.log(dic.girl)
console.log(dic.friend)
dic.method()

dic2.changeBoy('new Boy')
console.log(dic2)


for(let v of Object.keys(dic2)){
    console.log(v)
}
