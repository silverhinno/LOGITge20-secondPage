//console.log('Hello from script');

const myButton = document.querySelector('button');
const myImage = document.querySelector('img');
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.png', 'pic4.jpg', 'pic5.jpg'];

myButton.addEventListener('click', () => {
    console.log('click');
    //generate a random number from 0 to 4
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);

    let randomImagePath = 'images/' + images[randomIndex];
    console.log(randomImagePath);
    myImage.src = randomImagePath;
});