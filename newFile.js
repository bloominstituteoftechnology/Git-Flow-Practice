const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Enter a number to double: `, (myNum) => {
    const doubleNum = (num) => 2 * num;
    const displayNewNum = (n, callback) => callback(doubleNum(n));
    const result = displayNewNum(myNum, value => `Your ${myNum} was doubled to ${value}`);
    console.log(result);
    readline.close()
})