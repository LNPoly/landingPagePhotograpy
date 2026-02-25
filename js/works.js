document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery-item');

    filters.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Manejar la clase activa en los botones
            filters.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const target = button.getAttribute('data-target');

            // 2. Filtrar las imágenes
            items.forEach(item => {
                if (target === 'all') {
                    item.classList.remove('hide');
                } else {
                    if (item.classList.contains(target)) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                }
            });
        });
    });
});