
const BTN = document.getElementById('mode-selector');  

function interruptor(){
    const BODY = document.getElementById('corpo');
    const H1 = document.getElementById('page-title');
    const FOOTER = document.getElementsByTagName('footer')[0];

    BTN.classList.toggle('dark-mode');
    BODY.classList.toggle('dark-mode');
    H1.classList.toggle('dark-mode');
    FOOTER.classList.toggle('dark-mode');
          
}

BTN.addEventListener('click', interruptor);