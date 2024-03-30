const countDown = function() {
    const t = document.getElementById('timer');
    t.textContent -= 1;

    if (t.textContent < 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(id);
    }; 
};

id = setInterval(countDown, 1000)
