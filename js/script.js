let allContent = [
    {
        name: 'H9',
        title: 'Анализатор гемоглобина Lifotromic  H9',
        description: 'С учётом сложившейся международной обстановки, существующая теория предполагает независимые способы реализации экономической целесообразности принимаемых решений. ',
        image: './images/h9.svg'
    },
    {
        name: 'H8',
        title: 'Анализатор гемоглобина Lifotromic  H8',
        description: 'Полностью автоматизированный анализатор гемоглобина H8 сообщает результат HbA1c за 130 секунд с распознаванием вариантов гемоглобина, обеспечивая выдающееся решение для быстрого и надежного мониторинга диабета. Без пробоподготовки и безоперационной работы. Образцы с вариантами гемоглобина могут быть подвергнуты углубленному анализу в рамках программы β-талассемии.',
        image: './images/h8.svg'
    },
    {
        name: 'H100',
        title: 'Анализатор гемоглобина Lifotromic  H100',
        description: 'Полностью автоматизированный анализатор гемоглобина H100 использует аналитическую технику ВЭЖХ, которая является золотым стандартом обнаружения HbA1c. Он может давать результат HbA1c за 96 секунд без распознавания вариантов Hb, обеспечивая выдающееся решение для быстрого и надежного мониторинга диабета. Образцы с вариантами гемоглобина могут быть проанализированы простым изменением режима на программу β-Thalassemia.',
        image: './images/h100.svg',
    },
    {
        name: 'ECL8000',
        title: 'Анализатор гемоглобина Lifotromic  ECL8000',
        description: 'eCL 8000 — это полностью автоматизированный анализатор с производительностью 86 Т/ч, основанный на самом передовом электрохемилюминесцентном иммуноанализе (ECLIA). Доступно более 90 параметров, охватывающих щитовидную железу, фертильность, опухоль, сердце, воспаление, маркер костного метаболизма и т. д.',
        image: './images/ecl8000.png'
    },
    {
        name: 'GH-900+',
        title: 'Анализатор HbA1c  GH-900PLUS',
        description: 'Полностью автоматизированный анализатор HbA1c GH-900Plus сообщает результат HbA1c за 130 секунд с распознаванием вариантов Hb. Он обеспечивает выдающееся решение для надежного мониторинга диабета.',
        image: './images/gh-900plus.png'
    },
    {
        name: 'AC610',
        title: 'Гематологический анализатор на 5 частей  AC610',
        description: 'AC610 — это автоматический гематологический анализатор на 5 частей с компактными размерами и усовершенствованной конструкцией, предназначенный для малых и средних диагностических лабораторий, больниц и клиник, с более низкими эксплуатационными расходами, более удобным управлением и экономичным бюджетом.',
        image: './images/ac-160.png'
    },
    {
        name: 'ECL9000',
        title: 'Автоматизированный иммуноанализатор  ECL9000',
        description: 'eCL 9000 — это полностью автоматизированный анализатор производительностью 300 т/ч, основанный на самом передовом электрохемилюминесцентном иммуноанализе (ECLIA). Доступно более 90 параметров, охватывающих щитовидную железу, фертильность, опухоль, сердце, воспаление, маркер костного метаболизма и т. д.',
        image: './images/ecl9000.png'
    },
    {
        name: 'FA-160',
        title: 'Иммунофлуоресцентный анализатор  FA-160',
        description: 'Lifotronic FA-160 основан на технологии иммунофлуоресценции, которая позволяет количественно определять аналиты в образцах для диагностики кардиологических, инфекционных и многих других заболеваний.',
        image: './images/fa-160.png'
    },
    {
        name: 'COVID-19',
        title: 'Экспресс тест на антитела от коронавируса  SARS CoV-2',
        description: 'Rapid test, или экспресс тест на коронавирус — это общее название нескольких быстрых методов определения заболевания. Тест является быстрой альтернативой ПЦР, не требующий лабораторного оборудования и специальных условий проведения.',
        image: './images/rapid-covid-test.png'
    }
]
let windowWidth = window.innerWidth
let sectionOneContent = allContent.slice(0, 4)

let swiperWrapper = document.querySelector('.swiper-wrapper')
for (let item of sectionOneContent) {
    let swiperSlide = document.createElement('div')
    let swiperContent = document.createElement('div')
    let swiperContentText = document.createElement('div')
    let contentTitle = document.createElement('h2')
    let contentDescription = document.createElement('p')
    let contentImage = document.createElement('img')
    let buttonAdd = document.createElement('button') 
    buttonAdd.classList.add('buttonAdd')
    let buttonAddLink = document.createElement('a')
    buttonAddLink.href = '#'
    buttonAddLink.appendChild(buttonAdd)
    swiperSlide.classList.add('swiper-slide')
    swiperSlide.classList.add('swiper-slide-page')
    swiperContent.classList.add('swiper-content')
    swiperContentText.classList.add('swiper-text')
    swiperWrapper.appendChild(swiperSlide)
    swiperSlide.appendChild(swiperContent)
    swiperContent.appendChild(swiperContentText)
    swiperContent.appendChild(contentImage)
    swiperContentText.appendChild(contentTitle)
    swiperContentText.appendChild(contentDescription)
    if (windowWidth <= 690) {
        swiperContent.appendChild(buttonAddLink)
    } else {
        swiperContentText.appendChild(buttonAddLink)
    }
    
    contentTitle.textContent = item.title
    contentDescription.textContent = item.description
    contentImage.src= item.image
    buttonAdd.textContent = 'Подробнее'

}
let swiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    effect: 'fade',
    loop: true,
    allowTouchMove: false,
    autoplay: {
        disableOnInteraction: false,
        delay: 3000,
    },
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-next-section-one',
    },
    on: {
        slideChange: function () {
            let currentSlide = swiper.realIndex + 1;
            document.getElementById('current-slide').innerHTML = currentSlide;
        },
    }
})
document.querySelector('.catalogue').addEventListener('mouseover', ()=>{
    document.querySelector('.additional-list').style.display = 'flex'
})
document.querySelector('.products').addEventListener('mouseover', ()=>{
    document.querySelector('.inner-list').style.display = 'flex'
})
document.querySelector('main').addEventListener('mouseover', ()=>{
    document.querySelector('.additional-list').style.display = 'none'
    document.querySelector('.inner-list').style.display = 'none'
    document.querySelector('.search-input').style.display = 'none'
    document.querySelector('.search-input').value = ''
    document.querySelector('.search-img').src = './images/search.svg'
    document.querySelector('.search-img').style.position = 'unset'
    let windowWidth = window.innerWidth
    if (windowWidth <= 1080) {
        
        document.querySelector('.tel-number').style.display = 'none'
    } else{
        document.querySelector('.tel-number').style.display = 'block'
    }
})
document.querySelector('.search-img').addEventListener('mouseover', ()=>{
    document.querySelector('.tel-number').style.display = 'none'
    document.querySelector('.search-block').style.gap = '0'
    document.querySelector('.search-img').src = './images/search-red.png'
    document.querySelector('.search-img').style.position = 'absolute'
    document.querySelector('.search-input').style.display = 'block'
})
document.querySelector('.search-img').addEventListener('click', ()=>{
    document.querySelector('.search-input').value = ''
})

document.querySelector('.header-media').addEventListener('click', function () {
    
})

let swiper3 = new Swiper(".mySwiper3", {
    spaceBetween: 25,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        420: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1080: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    }
});
let swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    breakpoints: {
        320: {
            spaceBetween: 100,
        },
        1080: {
            spaceBetween: 40,
        },
        1500: {
            spaceBetween: 50,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper3,
    },
});
let swiper4 = new Swiper(".mySwiper4", {
    effect: 'fade',
    loop: true,
    allowTouchMove: false,
    autoplay: {
        disableOnInteraction: false,
        delay: 3000,
    },
});

let swiperWrapperCustom = document.querySelector('.swiper-wrapper-custom')
let swiperWrapperCustomBig = document.querySelector('.swiper-wrapper-custom-big')
for (let item of allContent) {
    let sliderthumb = document.createElement('div')
    sliderthumb.classList.add('swiper-slide')

    let contentImage = document.createElement('img')
    let contentName = document.createElement('h3')

    contentImage.src = item.image
    contentName.textContent = item.name

    sliderthumb.appendChild(contentImage)
    sliderthumb.appendChild(contentName)
    swiperWrapperCustom.appendChild(sliderthumb)

    let myCustomSlider = document.createElement('div')
    let customWrapperText = document.createElement('div')
    let contentTitle = document.createElement('span')
    let contentDescription = document.createElement('p')
    let buttonMoreInfo = document.createElement('button')
    let slideImage = document.createElement('img')
    let slideNameCont = document.createElement('div')
    let outline = document.createElement('span')
    let slideName = document.createElement('h2')
    
    outline.textContent = item.name
    outline.classList.add('outline')
    slideNameCont.classList.add('slide-name-cont')
    slideNameCont.appendChild(slideName)
    slideNameCont.appendChild(outline)
    myCustomSlider.classList.add('swiper-slide')
    myCustomSlider.classList.add('slide')
    customWrapperText.classList.add('slide-text-custom')  
    swiperWrapperCustomBig.appendChild(myCustomSlider)
    myCustomSlider.appendChild(slideImage)
    myCustomSlider.appendChild(customWrapperText)
    slideImage.src = item.image
    slideName.textContent = item.name
    contentTitle.textContent = item.title
    contentDescription.textContent = item.description
    buttonMoreInfo.textContent = 'Подробнее'

    customWrapperText.appendChild(slideNameCont)
    customWrapperText.appendChild(contentTitle)
    customWrapperText.appendChild(contentDescription)
    customWrapperText.appendChild(buttonMoreInfo)
}

let uslugiCards = document.querySelector('.uslugi-cont').querySelectorAll('.uslugi')
for (let uslugi of uslugiCards) {
    uslugi.addEventListener('mouseover', ()=>{
    uslugi.style.scale = '1.07' 
    uslugi.style.transition = '300ms'
    })
    uslugi.addEventListener('mouseout', ()=>{
    uslugi.style.scale = '1' 
    uslugi.style.transition = '300ms'
    })
}


document.querySelector('.next-custom').addEventListener('mouseover', ()=>{
    document.querySelector('.next').src = './images/hover-next.svg'
    document.querySelector('.next').style.rotate = '0deg'
})
document.querySelector('.next-custom').addEventListener('mouseout', ()=>{
    document.querySelector('.next').src = './images/next-button.png'
    document.querySelector('.next').style.rotate = '180deg'
})
document.querySelector('.prev-custom').addEventListener('mouseover', ()=>{
    document.querySelector('.prev').src = './images/hover-next.svg'
    document.querySelector('.prev').style.rotate = '180deg'
})
document.querySelector('.prev-custom').addEventListener('mouseout', ()=>{
    document.querySelector('.prev').src = './images/next-button.png'
    document.querySelector('.prev').style.rotate = '0deg'
})

const anchors = document.querySelectorAll('a[class="header-link"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('id')//.substr(1)
    console.log(blockID);
    document.querySelector(`[name=${blockID}]`).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



const menuBtn = document.querySelector('.menu-btn');
let l1 = document.querySelector('.l1');
let l2 = document.querySelector('.l2');
let l3 = document.querySelector('.l3');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.querySelector('.btn-line').style.position = 'absolute'
    menuBtn.style.gap = '0'
    l1.style.rotate = '45deg'
    l2.style.opacity = '0'
    l3.style.rotate = '-45deg'
    document.querySelector('.btn-line').style.transition = '300ms'
    document.querySelector('.header-media').style.display = 'flex'
  } else {
    menuBtn.classList.remove('open');
    document.querySelector('.btn-line').style.position = 'unset'
    menuOpen = false;
    menuBtn.style.gap = '6px'
    l1.style.rotate = '0deg'
    l2.style.opacity = '1'
    l3.style.rotate = '0deg'
    l1.style.marginTop = '0'
    document.querySelector('.header-media').style.display = 'none'
    }
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = document.querySelector('.panel')
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
});
}
let allbuttons = document.querySelectorAll('button')

for (let button of allbuttons) {
    button.addEventListener('click', function (){
        document.querySelector('.modal-window').style.zIndex = '99' 
        document.querySelector('.modal-window').style.display = '99' 
    })
}
