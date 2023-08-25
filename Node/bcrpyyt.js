const bcrypt = require('bcrypt');
// import bcrypt from 'bcrypt';
const pass = 'Sidddhat';
// const hash = bcrypt.hash(pass, 10);
const hash = new Promise(function (resolve, reject) {
    const data = bcrypt.hash(pass, 10);
    if (data) {
        resolve(data);
    }
});

const salt = bcrypt.genSaltSync(10);
console.log({
    pass,
    hash,
    salt
});