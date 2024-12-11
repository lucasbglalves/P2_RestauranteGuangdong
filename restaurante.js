// Script para funcionalidades do site Restaurante Guangdong

document.addEventListener("DOMContentLoaded", () => {
    // Exibe uma mensagem de boas-vindas personalizada ao carregar a página
    const userName = prompt("Bem-vindo ao Restaurante Guangdong! Qual é o seu nome?");
    if (userName) {
        alert(`Olá, ${userName}! Esperamos que você aproveite a experiência cantonesa.`);
    }

    // Adiciona interatividade à tabela de horários
    const tableRows = document.querySelectorAll("table tbody tr");
    tableRows.forEach(row => {
        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = "#ffcccc"; // Destaca a linha com uma cor suave
        });

        row.addEventListener("mouseout", () => {
            row.style.backgroundColor = ""; // Remove o destaque ao sair
        });
    });

    // Adiciona comportamento ao menu de navegação
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Previne o comportamento padrão de redirecionamento
            const targetPage = link.getAttribute("href");
            alert(`Você será redirecionado para: ${targetPage}`);
            window.location.href = targetPage; // Redireciona após o alerta
        });
    });

    // Validação do formulário de contato
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Previne o envio padrão do formulário

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }

        alert("Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso.");
        contactForm.reset(); // Limpa o formulário após o envio
    });

    // Função para validar formato do e-mail
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
