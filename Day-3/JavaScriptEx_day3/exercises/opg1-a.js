const crypto = require('crypto');
let size = 48;

const randomStrings = {
    "title": "6 Secure Randoms",
    "randoms": [
        // { "length": 48, "random": "A string with 48 random hex-characters" },
        // { "length": 40, "random": "A string with 40 random hex-characters" },
        // { "length": 32, "random": "A string with 32 random hex-characters" },
        // { "length": 24, "random": "A string with 24 random hex-characters" },
        // { "length": 16, "random": "A string with 16 random hex-characters" },
        // { "length": 8, "random": "A string with 8 random hex-characters" }
    ]
}

crypto.randomBytes(size, (err, buffer) => {
    if (err) return console.log(err)
    randomStrings.randoms.push({ length: size, random: buffer.toString("hex") })
    size -= 8;
    crypto.randomBytes(size, (err, buffer) => {
        randomStrings.randoms.push({ length: size, random: buffer.toString("hex") })
        size -= 8;
        crypto.randomBytes(size, (err, buffer) => {
            randomStrings.randoms.push({ length: size, random: buffer.toString("hex") })
            size -= 8;
            crypto.randomBytes(size, (err, buffer) => {
                randomStrings.randoms.push({ length: size, random: buffer.toString("hex") })
                size -= 8;
                crypto.randomBytes(size, (err, buffer) => {
                    randomStrings.randoms.push({ length: size, random: buffer.toString("hex") })
                    size -= 8;
                    crypto.randomBytes(size, (err, buffer) => {
                        randomStrings.randoms.push({ length: size, random: buffer.toString("hex") })
                        console.log(randomStrings)
                    });
                });
            });
        });
    });
});