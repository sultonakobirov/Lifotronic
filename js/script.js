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
    swiperContent.classList.add('swiper-content')
    swiperContentText.classList.add('swiper-text')
    swiperWrapper.appendChild(swiperSlide)
    swiperSlide.appendChild(swiperContent)
    swiperContent.appendChild(swiperContentText)
    swiperContent.appendChild(contentImage)
    swiperContentText.appendChild(contentTitle)
    swiperContentText.appendChild(contentDescription)
    swiperContentText.appendChild(buttonAddLink)
    contentTitle.textContent = item.title
    contentDescription.textContent = item.description
    contentImage.src= item.image
    buttonAdd.textContent = 'Подробнее'
}
let swiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    effect: 'fade',
    loop: true,
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
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: 'true',
    spaceBetween: '1000px',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});
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
    document.querySelector('.tel-number').style.display = 'block'
    document.querySelector('.search-img').style.position = 'unset'
    
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




allContent = allContent.slice(1, 2).concat(allContent.slice(0, 1).concat(allContent.slice(4, 5).concat(allContent.slice(3, 4).concat(allContent.slice(8)))))
let contentBox = document.querySelector('.pagination-content').childNodes
let fromZero = 0
let swiperWrapperCustom = document.querySelector('.swiper-wrapper-custom')
for (let item of allContent) {
    let contentImage = document.createElement('img')
    let contentName = document.createElement('h3')
    contentImage.src = item.image
    contentName.textContent = item.name
    contentBox[fromZero].appendChild(contentImage)
    contentBox[fromZero].appendChild(contentName)
    fromZero++
}