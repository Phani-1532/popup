const images = document.querySelectorAll('.image-gallery img');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup img');
const btn = document.querySelector('.popup button');

for (image of images){
    image.onclick = function(){
        popup.style.display = 'block';
    }
}

btn.onclick = function(){
    popup.style.display = 'none';
}