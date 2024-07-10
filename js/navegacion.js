// declaraciones generales
// boddy
const cuerpo = document.body;
cuerpo.style.backgroundColor = '#23003a';
//cabecera
const cabecera = document.createElement('header');
cabecera.id = ('cabecera');
cuerpo.appendChild(cabecera);
// Div navegador
const navegador = document.createElement('div');
navegador.id = ('IdNav');
cabecera.appendChild(navegador);
// nav
const nav = document.createElement('nav');
nav.id = ('idNav');
navegador.appendChild(nav);
// Ul nav
const ulNav = document.createElement ('ul');
ulNav.id=('idUl');
navegador.appendChild(ulNav);
// array de links
const links = ["Index", "Productos", "tiendaml", "Musica"];
for( link of links) {
    const liNav = document.createElement ('li');
    liNav.id = ('idLiNav');
    liNav.innerHTML = `<a href="./${link.toLowerCase()}.html">${link}</a>`;
    ulNav.appendChild(liNav);
}

// colores definidos.
const colorAmarillo = '#d6a505';

// boton ir carrito
const botonIrCarrito = document.createElement('button');
botonIrCarrito.id = 'idBotonIrCarrito';
botonIrCarrito.style.alignContent = 'right';
botonIrCarrito.textContent = 'Carrito';
// const  = document.querySelector('button');
ulNav.appendChild(botonIrCarrito);

botonIrCarrito.addEventListener('click', irCarrito);

function irCarrito() {
    window.location.href = './productos.html#idTabla';
}

/////////////////////////////////////////////////////////////////////////
// footer

const footer = document.createElement('footer');
cuerpo.appendChild(footer);