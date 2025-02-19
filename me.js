const slider = document.querySelector('.cards-wrapper');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});



function activateTab(tabNumber) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach((tab, index) => {
        if (index === tabNumber - 1) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// function slideCards(direction) {
//     const slider = document.querySelector('.slider');
//     const scrollAmount = 300;
//     slider.scrollLeft += direction * scrollAmount;
// }
