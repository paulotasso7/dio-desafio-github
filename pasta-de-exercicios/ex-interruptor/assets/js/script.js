
const BTN = document.getElementById('mode-selector');  

function interruptor(){
    const BODY = document.getElementById('corpo');
    const H1 = document.getElementById('page-title');
    const FOOTER = document.getElementsByTagName('footer')[0];
    const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';
    const darkModeClass = 'dark-mode';

    BTN.classList.toggle(darkModeClass);
    BODY.classList.toggle(darkModeClass);
    H1.classList.toggle(darkModeClass);
    FOOTER.classList.toggle(darkModeClass);
    

        if (BODY.classList.contains(darkModeClass)) {
            BTN.innerHTML = lightMode;
            H1.innerHTML = darkMode + ' ON';
                return;
        }
            BTN.innerHTML = darkMode;
            H1.innerHTML = lightMode + ' ON';
          
}

BTN.addEventListener('click', interruptor);