let user = {id: '123', pw: '1234', name: 'kim', age: 30}


let {id, ...rest} = user;

console.log(id, rest)


