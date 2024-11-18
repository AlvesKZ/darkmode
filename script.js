const body = document.body;
const toggleThemeButton = document.getElementById('toggle-theme')


// VERIFICA O TEMA SALVO NO LOCAL STORAGE
const savedTheme = localStorage.getItem('theme')

if(savedTheme){
    body.classList.add(savedTheme);
}else{
    body.classList.add('light');
}

//ALTERAR E SALVAR O TEMA NO LOCAL STORAGE
if(toggleThemeButton){
    toggleThemeButton.addEventListener('click', ()=> {
        if(body.classList.contains('light')){
            body.classList.remove('light');
            body.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }else{
            body.classList.remove('dark');
            body.classList.add('light')
            localStorage.setItem('theme', 'light')
        

    }
    
    });
}