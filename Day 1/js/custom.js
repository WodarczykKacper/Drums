document.addEventListener('DOMContentLoaded', function(){
    drum();
    stopdrum();
})


function stopdrum(e){
    if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');

}
    

function drum(){
    window.addEventListener('keydown',function(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if(!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
        
    })
}


const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', stopdrum));
