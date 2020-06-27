const gallery = document.querySelector('.images');
const prev    = document.querySelector('.btn-prev');
const next    = document.querySelector('.btn-next');
let counter = 1;
next.addEventListener('click', nextSlide);

prev.addEventListener('click', prevSlide);

function nextSlide(){
    gallery.animate([{opacity: .2}, {opacity: 1.0}], {duration: 1000, fill: 'forwards'})
    if(counter == 6)
    {
        counter = 0
    }
    counter++;
    console.log(counter)
    gallery.style.backgroundImage = `url(images/slide-${counter}.jpg)`
}

function prevSlide(){
    gallery.animate([{opacity: .2}, {opacity: 1.0}], {duration: 1000, fill: 'forwards'})
    if(counter == 1)
    {
        counter = 7
    }
    counter--;
    console.log(counter)
    gallery.style.backgroundImage = `url(images/slide-${counter}.jpg)`
}