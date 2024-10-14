document.getElementById('start-button').addEventListener('click', function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const pizzaScreen = document.getElementById('pizza-screen');

    welcomeScreen.classList.add('hidden');
    pizzaScreen.classList.remove('hidden');
    pizzaScreen.classList.add('show'); // Adiciona a classe show
    pizzaScreen.style.animation = "fadeIn 0.5s forwards"; // Animação ao entrar
});

document.getElementById('next-button').addEventListener('click', function() {
    const pizzaScreen = document.getElementById('pizza-screen');
    const bebidaScreen = document.getElementById('bebida');
    
    pizzaScreen.classList.add('hidden'); // Esconde a tela de pizza
    bebidaScreen.classList.remove('hidden');
    bebidaScreen.classList.add('show'); // Adiciona a classe show
    bebidaScreen.style.animation = "fadeIn 0.5s forwards"; // Animação ao entrar
});

// Modificado para coletar múltiplas pizzas
document.getElementById('finalize-button').addEventListener('click', function() {
    const selectedPizzas = Array.from(document.querySelectorAll('input[name="pizza"]:checked'));
    const selectedBeverage = document.querySelector('input[name="bebida"]:checked');

    // Verifica se pelo menos uma pizza e uma bebida foram selecionadas
    if (selectedPizzas.length > 0 && selectedBeverage) {
        const pizzaSelections = selectedPizzas.map(pizza => {
            const pizzaEmojis = pizza.getAttribute('data-emojis');
            return `${pizza.value} ${pizzaEmojis}`;
        }).join(' e '); // Junta os sabores selecionados

        const drinkEmojis = selectedBeverage.getAttribute('data-emojis');

        const resultMessage = `
            Você escolheu as pizzas: ${pizzaSelections}
            e a bebida ${selectedBeverage.value} ${drinkEmojis}.
        `;
        
        document.getElementById('result-message').innerHTML = resultMessage;

        const pizzaScreen = document.getElementById('pizza-screen');
        const bebidaScreen = document.getElementById('bebida');
        const resultScreen = document.getElementById('result-screen');

        // Animação de saída das telas de pizza e bebida
        pizzaScreen.style.animation = "slideOut 0.5s forwards"; // Animação para sair
        bebidaScreen.style.animation = "slideOut 0.5s forwards"; // Animação para sair

        setTimeout(() => {
            pizzaScreen.classList.add('hidden'); // Esconde a tela de pizza
            bebidaScreen.classList.add('hidden'); // Esconde a tela de bebida
            resultScreen.classList.remove('hidden'); // Mostra a tela de resultado
            resultScreen.classList.add('show'); // Adiciona a classe show
            resultScreen.style.animation = "slideIn 0.5s forwards"; // Animação ao entrar
        }, 500); // Aguarda a animação de saída terminar

    } else {
        alert("Por favor, selecione pelo menos uma pizza e uma bebida!");
    }
});

// Destaca a opção selecionada ao clicar
document.querySelectorAll('input[name="pizza"], input[name="bebida"]').forEach(input => {
    input.addEventListener('click', function() {
        this.parentElement.style.fontWeight = 'bold'; // Destacar a opção selecionada
    });
});

// Adiciona o código para selecionar o rádio ao clicar nos cartões
document.querySelectorAll('.pizza-card').forEach(card => {
    card.addEventListener('click', function() {
        const checkbox = this.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked; // Alterna a seleção ao clicar no cartão
    });
});

document.querySelectorAll('.drink-card').forEach(card => {
    card.addEventListener('click', function() {
        const radio = this.querySelector('input[type="radio"]');
        radio.checked = true; // Marca o rádio ao clicar no cartão
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden'); // Remove a classe quando a seção está visível
            } else {
                entry.target.classList.add('hidden'); // Adiciona a classe quando a seção sai da tela
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section); // Observa cada seção
    });
});

// Eventos para a página "não sou feia" e "me arrependi"
document.getElementById('no-feia-button').addEventListener('click', function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const noScreen = document.getElementById('no-screen');

    // Oculta a tela de boas-vindas e mostra a tela de "não sou feia"
    welcomeScreen.classList.add('hidden');
    noScreen.classList.remove('hidden');
    noScreen.classList.add('show'); // Adiciona a classe show
    noScreen.style.animation = "fadeIn 0.5s forwards"; // Animação de entrada
});

document.getElementById('back-button').addEventListener('click', function() {
    const noScreen = document.getElementById('no-screen');
    const welcomeScreen = document.getElementById('welcome-screen');

    // Oculta a tela "não sou feia" e mostra a tela de boas-vindas
    noScreen.style.animation = "fadeOut 0.5s forwards"; // Animação de saída
    setTimeout(() => {
        noScreen.classList.add('hidden'); // Esconde a tela de "não sou feia"
        welcomeScreen.classList.remove('hidden'); // Mostra a tela de boas-vindas
        welcomeScreen.classList.add('show'); // Adiciona a classe show
        welcomeScreen.style.animation = "fadeIn 0.5s forwards"; // Animação de entrada
    }, 500); // Aguarda a animação de saída antes de trocar as telas
});

function createHearts() {
    const heartContainer = document.getElementById('falling-hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`; // Posiciona os corações de forma aleatória
        heart.style.animationDelay = `${Math.random() * 5}s`; // Coração cai em momentos diferentes
        heartContainer.appendChild(heart);
    }
}

// Chame essa função na tela de resultado
createHearts();
