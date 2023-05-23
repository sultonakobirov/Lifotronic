document.querySelector('.catalogue').addEventListener('mouseover', ()=>{
    document.querySelector('.additional-list').style.display = 'flex'
})
document.querySelector('.products').addEventListener('mouseover', ()=>{
    document.querySelector('.inner-list').style.display = 'flex'
})
document.querySelector('section').addEventListener('mouseover', ()=>{
    document.querySelector('.additional-list').style.display = 'none'
    document.querySelector('.inner-list').style.display = 'none'
    document.querySelector('.search-input').style.display = 'none'
    document.querySelector('.search-input').value = ''
    document.querySelector('.search-img').src = '..//images/search.svg'
    document.querySelector('.tel-number').style.display = 'block'
    document.querySelector('.search-img').style.position = 'unset'
    
})
document.querySelector('.search-img').addEventListener('mouseover', ()=>{
    document.querySelector('.tel-number').style.display = 'none'
    document.querySelector('.search-block').style.gap = '0'
    document.querySelector('.search-img').src = '..//images/search-red.png'
    document.querySelector('.search-img').style.position = 'absolute'
    document.querySelector('.search-input').style.display = 'block'
})
document.querySelector('.search-img').addEventListener('click', ()=>{
    document.querySelector('.search-input').value = ''
})
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });