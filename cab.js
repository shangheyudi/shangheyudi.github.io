Promise.resolve().then(() => {
    console.log('A');

    setTimeout(() => {
        console.log('B')
    }, 0)

});

console.log('C');
console.log('C');

setTimeout(() => {
    console.log('D')

    Promise.resolve().then(() => {
        console.log('E');
    })

}, 0)