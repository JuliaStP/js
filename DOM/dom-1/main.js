const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const sliderList = document.querySelector('#slider');
const computedStyles = getComputedStyle(sliderList);

let currentRight = 0;

leftBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right);

    if (currentRight > 0) {
        sliderList.style.right = `${currentRight - 80}px`;
    }
});

rightBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right)

    if(currentRight < 400) {
        sliderList.style.right = `${currentRight + 80}px`;
    }
});


