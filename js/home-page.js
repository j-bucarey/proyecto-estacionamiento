(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            elemnt.addEventListener('Click',()=>{

                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');


                if(subMenu.clientHeight === 0){
                    height= subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;
            });

        });
         
    }

    addClick;


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
        
            }else{
                addClick();
            }
        
    });

    if(window.innerWidth > 800){
        addClick();
    }

    
})();


