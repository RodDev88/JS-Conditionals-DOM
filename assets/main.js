//Creo variables y les asigno ids del Dom para su manipulación

const mensajeDiv = document.getElementById('mensaje');

const checkbox1 = document.getElementById('checkbox1');

const checkbox2 = document.getElementById('checkbox2');

const revisarBtn =  document.getElementById('revisar');

const enviarBtn =  document.getElementById('enviar');

//Agregar evento al btn revisar
revisarBtn.addEventListener('click', () => {
    //revisar si al menos un checkbox está marcado
    if (checkbox1.checked || checkbox2.checked) {
        //muestra mensaje en <p>
        mensajeDiv.innerHTML = '<p>Hay una opción seleccionada</p>';
        mensajeDiv.style.color = 'green';

        //Habilitar btn Enviar
        enviarBtn.disabled = false;
    } else {
        //Mensaje de advertencia
        mensajeDiv.innerHTML = '<p>Por favor, seleccioona al menos una opción</p> ';
        mensajeDiv.style.color = 'red';

        //Btn enviar permanece deshabilitado
        enviarBtn.disabled = true;
    }

}

)