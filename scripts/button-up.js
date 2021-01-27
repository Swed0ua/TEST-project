
window.addEventListener('scroll', function() {
    let buttonUp = document.querySelector('.button__up'),
    scrollTop = window.pageYOffset;


    if (scrollTop > 200) {
        buttonUp.classList.add('button__up_active');
    } else {
        buttonUp.classList.remove('button__up_active');
    }
  });


  function to_top(){
    window.scrollTo(0, 0)
  }