let currentIndex = 0; // Índice da imagem atual
const images = document.querySelectorAll('.gallery-image'); // Seleciona todas as imagens

function showSlide(index) {
    // Oculta todas as imagens
    images.forEach((img, i) => {
        img.classList.remove('active');
        img.style.opacity = '0'; // Define opacidade como 0
    });

    // Mostra a imagem atual
    images[index].classList.add('active');
    images[index].style.opacity = '1'; // Define opacidade como 1
}

function changeSlide(direction) {
    currentIndex += direction;

    // Garante que o índice fique dentro do intervalo
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Volta para a última imagem
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Volta para a primeira imagem
    }

    showSlide(currentIndex);
}

// Inicializa a galeria mostrando a primeira imagem
showSlide(currentIndex);

// Opicional: Avança automaticamente a cada 5 segundos
setInterval(() => changeSlide(1), 5000);
