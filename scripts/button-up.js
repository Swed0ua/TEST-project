
window.addEventListener('scroll', function() {
    let buttonUp = document.querySelector('.button__up'),
    scrollTop = window.pageYOffset;
    
    console.log(scrollTop)
    if (scrollTop > 200) {
        buttonUp.classList.add('button__up_active');
    } else {
        buttonUp.classList.remove('button__up_active');
    }
  });