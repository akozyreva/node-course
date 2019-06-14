const doWorkCallback = (a, callbackFn) => {
    setTimeout( () => {
        if (a > 0) {
            callbackFn('This is my error', undefined)
        } else {
            callbackFn(undefined, [1, 4, 7])
        }
            
    }, 2000, a)
}

doWorkCallback(-1, (er, res) => {
    if(er) {
        return console.log(er)
    }

    console.log(res)
})
