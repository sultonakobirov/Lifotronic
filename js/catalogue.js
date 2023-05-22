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