let slider = {
    curSlide: 1,
    city: ['Rostov-on-Don<br>LCD admiral', 'Sochi<br>Thieves', 'Rostov-on-Don<br>Patriotic'],
    area: [81, 105, 93],
    time: [3.5, 4, 3],
    showSlide() {
        for (let i = 1; i <= 3; i++) {
//            let activeLi = document.querySelector('.main__block-one__menu__li[data-slide="'+i+'"]');
//            let activeDot = document.querySelector('.main__block-one__slider__dot[data-slide="'+i+'"]');
            let activeLi = topLinks[i-1];
            let activeDot = dotLinks[i-1];
            if (i == this.curSlide) {
                activeLi.classList.add('li_active');
                activeDot.classList.add('dot_active');
            }
            else {
                activeLi.classList.remove('li_active');
                activeDot.classList.remove('dot_active');
            }
        }
        cityContent.innerHTML = this.city[this.curSlide-1];
        areaContent.innerHTML = this.area[this.curSlide-1];
        timeContent.innerHTML = this.time[this.curSlide-1];
        imgContent.src = `./images/image${this.curSlide}.jpg`;
    }    
}

let cityContent = document.getElementById('city-left');
let areaContent = document.getElementById('area-left');
let timeContent = document.getElementById('time-left');
let imgContent = document.getElementById('slide-image');
let topLinks = document.getElementsByClassName('main__block-one__menu__li')
let dotLinks = document.getElementsByClassName('main__block-one__slider__dot')
let arrowLinks = document.getElementsByClassName('slider-arrows')

const chooseSlide = (event) => {
    slider.curSlide = event.target.dataset.slide;
    clearInterval(intervalID);
    slider.showSlide();
}

slider.showSlide();

  let intervalID = setInterval (() => {
      slider.curSlide++;
      if (slider.curSlide > 3) slider.curSlide = 1;
      slider.showSlide();
  }, 3000);

for (let link of topLinks) {
    link.addEventListener('click', (event) => {
        chooseSlide(event);
    });
}

for (let link of dotLinks) {
    link.addEventListener('click', (event) => {
        chooseSlide(event);
    });
}

for (let link of arrowLinks) {
    link.addEventListener('click', (event) => {
        clearInterval(intervalID);
        if (event.target.id === 'next-arrow') {
            slider.curSlide++;
            if (slider.curSlide > 3) slider.curSlide = 1;
        } else {
            slider.curSlide--;
            if (slider.curSlide < 1) slider.curSlide = 3;
        } 
    slider.showSlide();
    });
}
