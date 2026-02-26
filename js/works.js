document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sub-menu-link');
    const sections = document.querySelectorAll('.works-section');

    // Función para cambiar de pestaña
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            links.forEach(l => l.classList.remove('active-link'));
            sections.forEach(s => s.classList.remove('active'));

            link.classList.add('active-link');

            const targetId = link.getAttribute('href'); 
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });  

    // Opcional: Activar la primera pestaña por defecto al cargar la página
    // if (links.length > 0) {
    //     links[0].click();
    // }
});  
