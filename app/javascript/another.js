function sayHello() {
    let header = document.querySelector('#greeting');
    let hello = ('<h1> hello World </h1>');
    header.innerHTML = hello;
}

module.exports = sayHello();