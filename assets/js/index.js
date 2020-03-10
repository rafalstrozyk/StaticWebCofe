let myIndex = 0;

const carousel = () => {
    let i;
    const images = document.getElementsByClassName('mySlides');
    for(i=0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    myIndex++;
    if(myIndex > images.length) {myIndex = 1}
    images[myIndex-1].style.display = 'block'
    setTimeout(carousel, 2000);
};

carousel();