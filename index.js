document.querySelector('form').addEventListener('submit', function(e) {
    const messageDiv = document.getElementById('confirmation-message');
    messageDiv.style.display = 'block';
    setTimeout(() => {
        this.reset();
    }, 2000);
});