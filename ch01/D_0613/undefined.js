
function isUndefined(value){
    console.log(value)
    value = 123
    console.log(value)

    value = value ?? 'New Value'
    console.log(value)
}

isUndefined()
