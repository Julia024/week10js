function greeting() {
    console.log('Я учу JavaScript!')
}
greeting();

const image = document.getElementById('section__image');
console.log(image);

function showImgOne() {
    image.src="./assets/pictures/cat1.jpg";
}

function showImgTwo() {
    image.src="./assets/pictures/cat2.jpg"
}