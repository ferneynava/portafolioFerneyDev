import data from "/data.json"; 

const $proyectosContainer = document.querySelector(".container-Portafolio");

    data.proyectos.forEach(project => {
        $proyectosContainer.innerHTML += `
    <div class="container-Portafolio_Tajeta">   
            <img class="container-Portafolio_img" src="${project.img}" alt="Proyectoimg">
            <div class="container-Portafolio_Descripcion">
                <h3>${project.nombre}</h3>
                <nav>
                    <ul class="menu-tecnologias">
                        ${project.tecnologias.map(tecnologia => `<li><img src="${tecnologia.src}" alt="${tecnologia.alt}"><p>${tecnologia.texto}</p></li>`).join("")}
                    </ul>
                </nav>
                <p class="container-Portafolio_p">
                    ${project.descripcion}
                </p>
            </div>
            <div class= "container-Portafolio_Button">
                <a href="${project.Demo}" target="_blank" rel="noopener">
                    Demo
                    <img src="external-link.svg" alt="">
                </a>
                <a href="${project.Código}" target="_blank" rel="noopener">
                    Código
                    <img src="external-link.svg" alt="">
                </a>
            </div>
        </div>
    `})
