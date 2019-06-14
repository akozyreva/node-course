const doWorkPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        //resolve([1, 4, 7])
        reject("Error!")
    }, 2000)
})

// if promises resolves well
doWorkPromise.then( (res) => {
    console.log(res)
}).catch(er => console.log(er))