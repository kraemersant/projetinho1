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

document.getElementById('finalize-button').addEventListener('click', function() {
    const selectedPizza = document.querySelector('input[name="pizza"]:checked');
    const selectedBeverage = document.querySelector('input[name="bebida"]:checked');

    // Verifica se uma pizza e uma bebida foram selecionadas
    if (selectedPizza && selectedBeverage) {
        const pizzaEmojis = selectedPizza.getAttribute('data-emojis');
        const drinkEmojis = selectedBeverage.getAttribute('data-emojis');

        const resultMessage = `
            Você escolheu a pizza de ${selectedPizza.value} ${pizzaEmojis} 
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
        alert("Por favor, selecione uma pizza e uma bebida!");
    }
});

// Destaca a opção selecionada ao clicar
document.querySelectorAll('input[name="pizza"], input[name="bebida"]').forEach(input => {
    input.addEventListener('click', function() {
        this.parentElement.style.fontWeight = 'bold'; // Destacar a opção selecionada
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
