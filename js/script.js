// 1. Cursor Personalizado
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. Abrir/Cerrar Menú
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const links = document.querySelectorAll('.menu-link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});

// 3. Feedback de Click y Cierre Automático
links.forEach(link => {
    link.addEventListener('click', function() {
        // Mostramos el color de "elegido"
        this.classList.add('clicked');

        // Esperamos un instante para que el usuario vea el cambio
        setTimeout(() => {
            this.classList.remove('clicked');
            menuToggle.classList.remove('is-active');
            navMenu.classList.remove('active');
        }, 400); 
    });
});