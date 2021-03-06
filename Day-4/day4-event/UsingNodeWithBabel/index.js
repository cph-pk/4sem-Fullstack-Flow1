function messageDelay(msg,delay) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const upperCased = msg.toUpperCase();
            resolve(upperCased)
        },delay)
    })
}

const promises = [
    messageDelay("HI", 1300),
    messageDelay("Hi Class", 700),
    messageDelay("Hello World",1700),
    messageDelay("Promises are cool",500)
]

Promise.any(promises).then((upperCased) => console.log(upperCased))


