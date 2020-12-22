function sayHello() {
    let header = document.querySelector('#greeting');
    let hello = ('<h1> Hello World </h1>');
    header.innerHTML = hello;
}

module.exports = sayHello();