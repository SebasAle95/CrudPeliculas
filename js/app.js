let btnthemelight = document.querySelector('#btnthemelight');
let btnthemedark = document.querySelector('#btnthemedark');


btnthemelight.addEventListener('click', ()=> cambiartema('light'));
btnthemedark.addEventListener('click',  ()=> cambiartema('dark'));

//leer el localstorage
let temaconfigurado = JSON.parse(localStorage.getItem('tema')) ||  'dark';

cambiartema(temaconfigurado);

function cambiartema(color){

    document.querySelector('html').setAttribute('data-bs-theme', color);

    //guardar en localstorage

    localStorage.setItem('tema', JSON.stringify("color"));
}


const miFormulario = document.getElementById('miFormulario');

miFormulario.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const nombre = document.getElementById('codigo').value;
  const email = document.getElementById('titulo').value;

  if (nombre.trim() === '') {
    alert('Por favor, ingresa el codigo');
    return;
  }

  if (!validarEmail(email)) {
    alert('Por favor, ingrese un titulo');
    return;
  }

  
});

function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}