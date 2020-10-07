console.log('hello');
const img = document.querySelectorAll('.photoGallery')
const test = document.querySelector('.test')
let visible = false

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', () => {
        if (!visible) {
            test.style.display = "block";
            visible = true;

        } else {
            test.style.display = "none";
            visible = false;
        }
    })
}
