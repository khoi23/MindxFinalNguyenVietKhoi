const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
// console.log(tabs);
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active-tab');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active-tabs');
        });
        // console.log(target);
        tab.classList.add('active-tabs');
        target.classList.add('active-tab');
    });
});

const gallery = document.getElementById('gallery-list'),
    popup = document.getElementById('popup'),
    selectedImage = document.getElementById('selectedImage'),
    popupIconLeft = document.getElementById('popup-icon-left'),
    popupIconRight = document.getElementById('popup-icon-right'),
    imageIndexs = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    selectedIndex = null;

imageIndexs.forEach(i => {
    const image = document.createElement('img');
    image.src = `./assets/img/blog/blog-${i}.jpg`;
    image.alt = `Image Gallery ${i}`
    image.classList.add('galleryIMG');

    image.addEventListener('click', ()=> {
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `./assets/img/blog/blog-${i}.jpg`
    });

    gallery.appendChild(image);
});

popup.addEventListener('click', ()=> {
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
});

