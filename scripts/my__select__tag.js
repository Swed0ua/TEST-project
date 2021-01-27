let select_Mtag = {
    select_main : document.querySelector('.new__select'),
    select_options : document.querySelectorAll('.NEWcontact__item'),
    select_wrap : document.querySelector('.select_m')
};

document.addEventListener("click", function(e) {
    let a = e.path[0];

    while(a){
    
    if (a.classList.contains("select__noCopy")){
        e.path[1].children[1].classList.toggle('new__opt_OPEN')
        
        break;
    }
   
    if (e.path[1].classList.contains("NEWcontact__item")){
        e.path[3].children[0].innerHTML = e.path[0].innerHTML;
    } else if (e.path[0].classList.contains("NEWcontact__item")){
        e.path[2].children[0].innerHTML = e.path[0].innerHTML;
    }

    if (a.classList.contains("menu__burgerICO") || a.classList.contains("menu__burgerICO_line")){
        document.querySelector(".menu__burgerICO_line").classList.toggle('menu__burgerICO_closeline');
        document.querySelector(".menu__2").classList.toggle('menu__2_OPEN');
    }

    closeAll();
break;    
}

    function closeAll(){
        document.querySelectorAll('.new__opt')[0].classList.remove('new__opt_OPEN');
        document.querySelectorAll('.new__opt')[1].classList.remove('new__opt_OPEN');
        
    }

    
});


    function defFunc() {
        let languageFlag = {
            main : document.querySelector('.new__select::before'),
            item : document.querySelectorAll('.language__item::after')
        }
        languageFlag.item
        

    }


    setTimeout(defFunc, 0);
    setTimeout(createBurherMenu, 0);

    function createBurherMenu (){
        let menuData = document.querySelectorAll('.menu__item');
        let menu2 = document.querySelector('.menu2__items');
        let contactInf = document.querySelector('.header__contact');

        menuData.forEach(element => {
            if(!element.classList.contains("menu__burgerICOWrapper")){
            menu2.insertAdjacentHTML("beforeEnd", '<li class="menu2__item">'+element.innerHTML+'</li>');
            }
        });

        menu2.insertAdjacentHTML("beforeEnd", '<div class="menu2__contact">'+contactInf.innerHTML+'</div>');

    }

