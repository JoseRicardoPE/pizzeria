//Menu Responsive
let btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar");
    enlaces = document.getElementById("enlaces");


//click abrir

btnMenuOpen.addEventListener("click", function(){
    menuResponsive.className = 'menu-bar active';
});


//click cerrar
btnMenuClose.addEventListener("click", function(){
    menuResponsive.classList.remove("active");
});

//click enlaces menu-responsive
enlaces.addEventListener('click', function(){
    menuResponsive.classList.remove("active");
});

//Código flechas derecha e izquierda del slider o carrusel de imágenes
//let contenedor = document.getElementById("slider");
let contenedor = document.querySelector('#slider');
let btnIzquierdo = document.getElementById('btn-izquierda');
let btnDerecho = document.getElementById('btn-derecha');

//evento para el botón btnDerecho
btnDerecho.addEventListener('click', function(){
    contenedor.scrollLeft += contenedor.offsetWidth;
});

//evento para el botón btnIzquierdo
btnIzquierdo.addEventListener('click', function(){
    contenedor.scrollLeft -= contenedor.offsetWidth;
});

//eventos de validación para el formulario de contacto
let formulario = document.getElementById('formulario');

    function validaDatos(e){
        let inputNombre = document.getElementById('nombre'),
            inputEmail = document.getElementById('email'),
            inputComentarios = document.getElementById('comentarios'),
            alertSuccess = document.getElementById('alertSuccess'),
            alertError = document.getElementById('alertError');

        if (inputNombre.value == 0 || inputEmail.value == 0 || inputComentarios.value == 0) {
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add('show');

            setTimeout(function(){
                alertError.classList.remove('show');
                alertError.classList.add('hide');
            }, 2000);

        } else {
        
            e.preventDefault();
            alertSuccess.classList.remove('hide');
            alertSuccess.classList.add('show');

            setTimeout(function(){
                alertSuccess.classList.remove('show');
                alertSuccess.classList.add('hide');
            }, 2000);

            //como vaciar nuestros input
            inputNombre.value = "";
            inputEmail.value = "";
            inputComentarios.value = "";
        }
    }


//evento del formulario
formulario.addEventListener('submit', validaDatos);


//Programación para el botón de ir arriba

let btnTop = document.getElementById('btn-top'),
    logo = document.getElementById('logo');


//Detectar el scroll en la página web
window.addEventListener('scroll', function(){
    let scroll = document.documentElement.scrollTop,  /*con documentElement llamo al documento padre HTML*/
        fullSize = document.documentElement.offsetHeight,
        sizeVP = document.documentElement.clientHeight
    if(scroll > 200){
        btnTop.classList.add('show');
    } else {
        btnTop.classList.remove('show');
    }

    /*Modificar elemento cuando llegue al final de la página */
    if(fullSize == (scroll + sizeVP)){
        btnTop.classList.add('scrollFinal');
    } else {
        btnTop.classList.remove('scrollFinal');
    }

})

//Detectar evento click en el botón ir arriba
btnTop.addEventListener('click', function(){
    window.scrollTo(0, 0); //0 en eje X y 0 en eje Y 
                            //lleva a la parte superior.
})

//Detectar evento click en el logo
logo.addEventListener('click', function(){
    window.scrollTo(0, 0);
})