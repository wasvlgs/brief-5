let currentIndex = 0;
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage(index) {
    thumbnails.forEach(thumb => thumb.classList.remove('thumbnail-active'));
    thumbnails[index].classList.add('thumbnail-active');
    
    mainImage.classList.add('fade-out');
    setTimeout(() => {
        mainImage.src = thumbnails[index].src;
        mainImage.classList.remove('fade-out');
    }, 300);
    
    currentIndex = index;
}

prevBtn.onclick = () => {
    const newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateImage(newIndex);
};

nextBtn.onclick = () => {
    const newIndex = (currentIndex + 1) % thumbnails.length;
    updateImage(newIndex);
};

thumbnails.forEach((thumbnail, index) => {
    thumbnail.onclick = () => updateImage(index);
});

thumbnails[0].classList.add('thumbnail-active');