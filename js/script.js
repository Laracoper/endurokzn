

const menuicon = document.querySelector('.menu__icon');
const menubody = document.querySelector('.menu__list');
if (menuicon) {
    menuicon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        menuicon.classList.toggle('active');
        menubody.classList.toggle('active');
    });
}

// -----------------------------------------

const anchors = document.querySelectorAll('a.menu__link')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        menuicon.classList.remove('active');
        menubody.classList.remove('active');
        document.body.classList.remove('_lock')

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// ---------------------------------------------


new Swiper('.page-slider__body', {
    // бесконечный слайдер
    // loop: true,

    // количество дублирующих слайдов
    // loopedSlides: 0,

    // автопрокрутка
    // autoplay: {
    //     delay: 9000,
    // },

    // скорость
    // speed: 800,

    // адаптивность
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 2,
    //     },
    //     767.98: {
    //         slidesPerView: 3,
    //     }
    // },

    // стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // круглые кнопки  
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    // автовысота
    autoHeight: true,

    // количество слайдов для показа
    // slidesPerView: 2.3,

    // отступы между слайдами
    spaceBetween: 30,

    // количество пролистываемых слайдов
    slidesPerGroup: 1,
});

// --------------------------------------------------

// const btnhide = document.querySelector('.section-main__btn-hide')

// btnhide.addEventListener('click', function (e) {
//     btnhide.classList.toggle('hide')
//     document.querySelector('.section-main__text-show').classList.toggle('show')
//     document.querySelector('.section-main__btn-show').classList.toggle('show')
// })

// const btnshow = document.querySelector('.section-main__btn-show')

// btnshow.addEventListener('click', function (e) {
//     btnshow.classList.toggle('show')
//     document.querySelector('.section-main__text-show').classList.remove('show')
//     btnhide.classList.remove('hide')
// })

let btnshow = document.querySelector('.section-main__btn-show')
let text = document.querySelector('.section-main__text-show')


btnshow.addEventListener('click', function (e) {
    btnshow.classList.toggle('_show')

    text.classList.toggle('_texthiden')

    btnhide.classList.toggle('_hide')
})

let btnhide = document.querySelector('.section-main__btn-hide')

btnhide.addEventListener('click', function (e) {
    btnhide.classList.remove('_hide')
    text.classList.remove('_texthiden')
    btnshow.classList.remove('_show')
})

// ----------------------------------------------

let modalbtn = document.querySelector('.page-price__subtitle span')
modalbtn.addEventListener('click', function (e) {
    document.querySelector('.page-price__modal').classList.toggle('_open')
    document.body.classList.toggle('_lock')
})

let modalclose = document.querySelector('.page-price__close')
modalclose.addEventListener('click', function (e) {
    document.querySelector('.page-price__modal').classList.remove('_open')
    document.body.classList.remove('_lock')
})

// ----------------------------------------------------

let modalMainbtn = document.querySelector('.section-main__btn')
modalMainbtn.addEventListener('click', function (e) {
    document.querySelector('.section-main__modalwindow').classList.toggle('_open')
    document.body.classList.toggle('_lock')
})

let modalMaincloss = document.querySelector('.section-main__btnclose')
modalMaincloss.addEventListener('click', function (e) {
    document.querySelector('.section-main__modalwindow').classList.remove('_open')
    document.body.classList.remove('_lock')
})


// -----------------------------------------------------

const btnvideo = document.querySelector('.page-slider__btn-video')

btnvideo.addEventListener('click', function (e) {
    document.location.href = '/video'

})

// --------------------------------------------------------

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
}   else {
    document.body.classList.add('_pc');
}

