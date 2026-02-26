document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    // Seleccionamos todos los links de las tarjetas de trabajo
    const workLinks = document.querySelectorAll('.work-item a');

    workLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que se abra el link normalmente
            
            modal.style.display = "flex";
            modal.style.flexDirection = "column";
            modal.style.justifyContent = "center";
            modalImg.src = this.href; // Toma la URL de la imagen del href del link
            
            // Si quieres que el título de la card aparezca debajo:
            const cardTitle = this.parentElement.querySelector('h4').innerText;
            captionText.innerHTML = cardTitle;
        });
    });

    // Cerrar al hacer click en la X
    closeBtn.onclick = () => modal.style.display = "none";

    // Cerrar al hacer click fuera de la imagen
    modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };
});