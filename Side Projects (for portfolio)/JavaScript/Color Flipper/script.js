const button = document.getElementById('button');

const setBg = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.randomColor = '#' + randomColor;
    console.log('click');
}

button.addEventListener('click', setBg);
setBg();
console.log('hello');
