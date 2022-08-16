const animation = document.querySelectorAll('._animation');

if (animation.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll (){
        for (let i = 0; i < animation.length; i++){
            const animationItem = animation[i];
            const animationItemHeight = animationItem.offsetHeight;
            const animationItemOffset = offset(animationItem).top;
            const animationStart = 2;

            let animationPoint = window.innerHeight - animationItemHeight / animationStart;
            if (animationItemHeight > window.innerHeight){
                animationPoint = window.innerHeight - window.innerHeight / animationStart;
            }

            if ((scrollY > animationItemOffset - animationPoint) && scrollY < (animationItemOffset + animationItemHeight)){
                animationItem.classList.add('_active');
            }else{
                if(!animationItem.classList.contains('_animation-no-repeat')) {
                    animationItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el){
        let rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll();
}