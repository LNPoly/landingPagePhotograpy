// Crear el header dinámicamente
const header = document.createElement('header');
header.innerHTML = `     <div class="logo">PHOTOGRAPHY | DESIGN</div>   
    <div class="menu-toggle" id="mobile-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
    <nav id="nav-menu">
        <div>
            <a href="/pages/aboutMe.html" class="menu-link gold-hover">Sobre Mi</a>
            <a href="#works" class="menu-link gold-hover">Mis Trabajos</a>
            <a href="#services" class="menu-link gold-hover">Servicios</a>
            <a href="#contact" class="menu-link gold-hover">Contacto</a>
        </div>
    </nav>`;
document.body.insertBefore(header, document.body.firstChild);
