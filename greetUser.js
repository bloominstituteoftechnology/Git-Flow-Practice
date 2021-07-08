const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`First name: `, (userName) => {
    const capitalize = word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    const greetUser = (user, callback) => callback(capitalize(user));
    const result = greetUser(userName, capName => `Welcome ${capName}`);
    console.log(result);
});