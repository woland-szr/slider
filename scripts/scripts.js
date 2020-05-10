let Slider = {
    curSlide: 1,
    City: ['Rostov-on-Don<br>LCD admiral', 'Sochi<br>Thieves', 'Rostov-on-Don<br>Patriotic'],
    Area: [81, 105, 93],
    Time: [3.5, 4, 3],
    showSlide() {
        for (let i = 1; i <= 3; i++) {
            let activeLi = document.querySelector('.main__block-one__menu__li[data-slide="'+i+'"]');
            let activeDot = document.querySelector('.main__block-one__slider__dot[data-slide="'+i+'"]');
            if (i == this.curSlide) {
                activeLi.classList.add('li_active');
                activeDot.classList.add('dot_active');
            }
            else {
                activeLi.classList.remove('li_active');
                activeDot.classList.remove('dot_active');
            }
        }
        document.getElementById('city-left').innerHTML = this.City[this.curSlide-1];
        document.getElementById('area-left').innerHTML = this.Area[this.curSlide-1];
        document.getElementById('time-left').innerHTML = this.Time[this.curSlide-1];
        document.getElementById('slide-image').src = `./images/image${this.curSlide}.jpg`;
    }    
}

const chooseSlide = (event) => {
    Slider.curSlide = event.target.dataset.slide;
    clearInterval(intervalID);
    Slider.showSlide();
}

Slider.showSlide();

let intervalID = setInterval (() => {
    Slider.curSlide++;
    if (Slider.curSlide > 3) Slider.curSlide = 1;
    Slider.showSlide();
}, 3000);

let topLinks = document.getElementsByClassName('main__block-one__menu__li')

for (let link of topLinks) {
    link.addEventListener('click', (event) => {
        chooseSlide(event);
    });
}

let dotLinks = document.getElementsByClassName('main__block-one__slider__dot')

for (let link of dotLinks) {
    link.addEventListener('click', (event) => {
        chooseSlide(event);
    });
}

let arrowLinks = document.getElementsByClassName('slider-arrows')

for (let link of arrowLinks) {
    link.addEventListener('click', (event) => {
        clearInterval(intervalID);
        if (event.target.id === 'next-arrow') {
            Slider.curSlide++;
            if (Slider.curSlide > 3) Slider.curSlide = 1;
        } else {
            Slider.curSlide--;
            if (Slider.curSlide < 1) Slider.curSlide = 3;
        } 
    Slider.showSlide();
    });
}
