const pregunta = document.querySelector('p');
const imagen = document.querySelector('img');
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const audio = document.getElementById('audio');

let noBtnClicked = false;

document.addEventListener('mousemove', function(event) {
    if (!noBtnClicked && event.target === noBtn) {
        const randomX = parseInt(Math.random() * 100);
        const randomY = parseInt(Math.random() * 100);
        noBtn.style.setProperty('top', randomY + '%');
        noBtn.style.setProperty('left', randomX + '%');
        noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
    }
    
});

yesBtn.addEventListener('click', function () {
    pregunta.textContent = '¿Ves que sí eres la niña más guapa del mundo?';
    imagen.src = 'otra-imagen.jpg';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    audio.play();
    noBtn.classList.remove('mostrar'); 
});


noBtn.addEventListener('click', function () {

    pregunta.textContent = 'Los errores pasan, pero tranquila, sé que querías seleccionar la otra opción :3';
    imagen.src = 'otra-imagen-noBtn.jpg'; 
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    audio.play();
    noBtn.classList.remove('mostrar');
        

    }
);
