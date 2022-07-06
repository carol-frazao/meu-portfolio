const btn = document.getElementById('switch-shadow');
const view1 = document.getElementById('view1');

function addEventos() {
    
    btn.addEventListener('change', (e) => {
        view1.classList.toggle('colorView1_lightTheme', e.target.unchecked);
    })
}

addEventos()


