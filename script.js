
function toggleMenu() {
    const menu = document.getElementById('menu-conteudo');

    // Adiciona a classe se ela não existir, ou remove se ela já existir
    menu.classList.toggle('ativo');
}
const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let autoPlayTimer;

// Função para passar o slide
function moveCarousel(direction) {
    const slideWidth = carousel.clientWidth;

    // Se chegar no final, volta pro começo. Se for pro início, vai pro fim.
    if (direction === 'next') {
        if (carousel.scrollLeft + slideWidth >= carousel.scrollWidth - 1) {
            carousel.scrollTo({ left: 0 }); // Volta ao início
        } else {
            carousel.scrollBy({ left: slideWidth });
        }
    } else {
        if (carousel.scrollLeft <= 0) {
            carousel.scrollTo({ left: carousel.scrollWidth }); // Vai ao final
        } else {
            carousel.scrollBy({ left: -slideWidth });
        }
    }
}

// Inicia o timer para passar sozinho a cada 3 segundos
function startAutoPlay() {
    stopAutoPlay(); // Garante que não haverá timers duplicados
    autoPlayTimer = setInterval(() => {
        moveCarousel('next');
    }, 3000);
}

function stopAutoPlay() {
    clearInterval(autoPlayTimer);
}

// Eventos de clique manual nos botões
nextBtn.addEventListener('click', () => {
    moveCarousel('next');
    startAutoPlay(); // Reinicia o timer após o clique do usuário
});

prevBtn.addEventListener('click', () => {
    moveCarousel('prev');
    startAutoPlay(); // Reinicia o timer após o clique do usuário
});

// Pausa o autoplay se o usuário passar o mouse por cima
carousel.addEventListener('mouseenter', stopAutoPlay);
carousel.addEventListener('mouseleave', startAutoPlay);

// Inicializa o funcionamento automático ao carregar a página
startAutoPlay();

