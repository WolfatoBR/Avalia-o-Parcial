
    // Carrega o menu superior
    document.addEventListener('DOMContentLoaded', function() {
        fetch('../html/menu_sup.html')
            .then(response => response.text())
            .then(html => {
                document.querySelector('.chama-menu').innerHTML = html;
            });
        
        // Animação inicial
        setTimeout(() => {
            document.querySelector('.payment-form').classList.add('animate__fadeInUp');
        }, 300);
        
        // Máscaras para os campos
        new Cleave('#cardNumber', {
            creditCard: true,
            onCreditCardTypeChanged: function(type) {
                const cardBrand = document.getElementById('card-brand');
                if (type === 'visa') {
                    cardBrand.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visa/visa-original.svg';
                } else if (type === 'mastercard') {
                    cardBrand.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mastercard/mastercard-original.svg';
                } else if (type === 'amex') {
                    cardBrand.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/americanexpress/americanexpress-original.svg';
                } else {
                    cardBrand.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/creditcard/creditcard-original.svg';
                }
            }
        });
        
        new Cleave('#expiryDate', {
            date: true,
            datePattern: ['m', 'y']
        });
        
        new Cleave('#cvv', {
            numericOnly: true,
            blocks: [3]
        });
        
        new Cleave('#cpf', {
            delimiters: ['.', '.', '-'],
            blocks: [3, 3, 3, 2],
            numericOnly: true
        });
        
        // Atualiza o preview do cartão em tempo real
        const cardNumberInput = document.getElementById('cardNumber');
        const cardNameInput = document.getElementById('cardName');
        const expiryDateInput = document.getElementById('expiryDate');
        
        cardNumberInput.addEventListener('input', function() {
            const previewNumber = this.value || '•••• •••• •••• ••••';
            document.getElementById('preview-card-number').textContent = previewNumber;
        });
        
        cardNameInput.addEventListener('input', function() {
            const previewName = this.value.toUpperCase() || 'NOME NO CARTÃO';
            document.getElementById('preview-card-name').textContent = previewName;
        });
        
        expiryDateInput.addEventListener('input', function() {
            const previewExpiry = this.value || '••/••';
            document.getElementById('preview-card-expiry').textContent = previewExpiry;
        });
        
        // Animação ao selecionar parcelamento
        const installmentsSelect = document.getElementById('installments');
        installmentsSelect.addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];
            const priceElement = document.getElementById('course-total');
            
            // Animação
            priceElement.classList.add('animate__animated', 'animate__pulse');
            setTimeout(() => {
                priceElement.classList.remove('animate__animated', 'animate__pulse');
            }, 1000);
            
            // Aqui você pode adicionar lógica para calcular diferentes valores baseados nas parcelas
        });
        
        // Submissão do formulário
        const paymentForm = document.getElementById('paymentForm');
        const successModal = document.getElementById('successModal');
        const closeModal = document.getElementById('closeModal');
        
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simula processamento do pagamento
            document.querySelector('.pay-button').innerHTML = '<span class="material-symbols-outlined">hourglass_empty</span> PROCESSANDO...';
            document.querySelector('.pay-button').classList.remove('animate__pulse', 'animate__infinite');
            
            setTimeout(() => {
                // Mostra o modal de sucesso
                successModal.style.display = 'flex';
                
                // Atualiza os passos
                document.querySelector(`.step[data-step="2"]`).classList.add('completed');
                document.querySelector(`.step[data-step="3"]`).classList.add('active');
                document.querySelector('.progress-fill').style.width = '100%';
            }, 2000);
        });
        
        closeModal.addEventListener('click', function() {
            successModal.style.display = 'none';
            // Redirecionar para a área do aluno ou página de confirmação
            window.location.href = 'area_do_aluno.html';
        });
        
        // Efeito hover no cartão de crédito
        const creditCardPreview = document.querySelector('.credit-card');
        creditCardPreview.addEventListener('mousemove', function(e) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            this.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        creditCardPreview.addEventListener('mouseenter', function() {
            this.style.transition = 'none';
        });
        
        creditCardPreview.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.5s ease';
            this.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    });