function scrollAppear(){
    var introText = document.querySelector(".intro-text");
    var introPosition = introText.getBoundingClientRect().top; //distance from the top

    //capturing window's resolution/size
    var screenPosition = window.innerHeight / 1.3;
    
    if(introPosition < screenPosition){
        //allows to capture classes above intro-text
        introText.classList.add('intro-appear');
    }
}
window.addEventListener('scroll',scrollAppear);