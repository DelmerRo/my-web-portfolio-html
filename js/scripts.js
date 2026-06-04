/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", function () {
    var icons = document.body.querySelectorAll(".appear");

    icons.forEach(function (icon, index) {
        setTimeout(function () {
            icon.style.visibility = "visible";
            icon.classList.add("appear-animation");
        }, index * 500); // Ajusta el tiempo según tus necesidades
    });
});

// Función para copiar al portapapeles con toast mejorado
function copyToClipboard(text, label) {
    navigator.clipboard.writeText(text).then(function() {
        const toast = document.createElement('div');
        toast.className = 'copy-toast';
        toast.innerHTML = `<i class="fas fa-check-circle me-2" style="color: #25d366;"></i>${label} copiado: ${text}`;
        document.body.appendChild(toast);
        
        setTimeout(function() {
            toast.remove();
        }, 1800);
    }).catch(function() {
        // Fallback para navegadores antiguos
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        const toast = document.createElement('div');
        toast.className = 'copy-toast';
        toast.innerHTML = `<i class="fas fa-check-circle me-2"></i>${label} copiado`;
        document.body.appendChild(toast);
        setTimeout(function() {
            toast.remove();
        }, 1800);
    });
}

// Función para descargar CV con tracking sutil
function descargarCV() {
    const cvUrl = 'assets/doc/CV - Delmer Rodríguez - Sistemas.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Delmer_Rodriguez_Backend.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Opcional: pequeño toast de confirmación
    const toast = document.createElement('div');
    toast.className = 'copy-toast';
    toast.innerHTML = `<i class="fas fa-download me-2" style="color: #25d366;"></i>Descargando CV...`;
    document.body.appendChild(toast);
    setTimeout(function() {
        toast.remove();
    }, 1500);
}