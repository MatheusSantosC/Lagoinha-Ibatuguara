document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    
    if (fullName && email && phone && dob) {
        document.getElementById('message').textContent = 'Cadastro realizado com sucesso!';
        document.getElementById('registrationForm').reset();
    } else {
        document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
    }
});