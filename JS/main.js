const conteneder = document.querySelector('#contenedor');/*Indicamos que acceda al ID contenedor */

document.querySelector('#boton-menu').addEventListener('click', ()=>{/*Indicamos que acceda al ID boton-menu y escuche un click */
    conteneder.classList.toggle('activate');/*Ingresa a conteneder y accedemos a la lista de clases e indicamos que haga un toogle quita o pone activate*/
});