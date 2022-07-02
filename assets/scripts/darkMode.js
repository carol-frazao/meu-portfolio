const btn = document.getElementById('switch-shadow')

btn.addEventListener("change", (e) => {
    document.getElementById('view1').classList.toggle('clearMode_view1', e.target.unchecked);
})