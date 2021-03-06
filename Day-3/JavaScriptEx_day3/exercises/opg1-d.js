const makeRandom = require("./opg1-bc");

// Plain promise
makeRandom(32) //any size and values ok, as long as integers
.then(randoms => console.log(randoms))

// async/await
const getAsync = async () => {
    try {     
        console.log(await makeRandom(8));
    } catch (err) {
        console.log("Error: " + err);
    }
}
getAsync();