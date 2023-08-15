const form = document.querySelector("#form-contacto")
const inputs = document.querySelectorAll("#form-contacto input")
const warning_nombre = document.getElementById("warning-nombre")
const warning_email = document.getElementById("warning-email")
const warning_telefono = document.getElementById("warning-telefono")
const warning_duda = document.getElementById("warning-duda")

const regExp = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	number: /^[0-9]{10,10}$/, // 6 a 20 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  todo:/^[A-Za-z0-9\s]+$/
}

let valores = {
  nombre: false,
  email: false,
  telefono: false,
  duda: false,
}

const validarInput = (input) => {
  if(input.name === "nombre")
  {
    if(input.value.length < 2) 
    {
      input.classList.add("input-warning")
      warning_nombre.innerText = "Este campo es obligatorio, ingrese su nombre completo"
      valores.nombre = false
    }
    else
    {
      if(!regExp.name.test(input.value))
      {
        input.classList.add("input-warning")
        warning_nombre.innerText = "Este campo solo puede contener letras"
        valores.nombre = false
      }
      else
      {
        input.classList.remove("input-warning")
        warning_nombre.innerText = ""
        valores.nombre = true
      }
    }
  }
  if(input.name === "email")
  {
    if(input.value.length < 1) 
    {
      input.classList.add("input-warning")
      warning_email.innerText = "Este campo es obligatorio, ingrese su correo"
      valores.email = false
    }
    else
    {
      if(!regExp.email.test(input.value))
      {
        input.classList.add("input-warning")
        warning_email.innerText = "El valor ingresado no es un email"
        valores.email = false
      }
      else
      {
        input.classList.remove("input-warning")
        warning_email.innerText = ""
        valores.email = true
      }
    }
  }
  if(input.name === "telefono")
  {
    if(input.value.length < 1) 
    {
      input.classList.add("input-warning")
      warning_telefono.innerText = "Este campo es obligatorio, ingrese su telefono"
      valores.telefono = false
    }
    else
    {
      if(!regExp.number.test(input.value))
      {
        input.classList.add("input-warning")
        warning_telefono.innerText = "Este campo no es un numero telefonico"
        valores.telefono = false
      }
      else
      {
        input.classList.remove("input-warning")
        warning_telefono.innerText = ""
        valores.telefono = true
      }
    }
  }
  if(input.name === "duda")
  {
    if(input.value.length < 1) 
    {
        input.classList.remove("input-warning")
        warning_duda.innerText = ""
      valores.duda=true
    }
  }
  
}

inputs.forEach(input => {
  input.addEventListener("keyup", () => validarInput(input))
  input.addEventListener("blur", () => validarInput(input))
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  if (!valores.nombre || !valores.email || !valores.telefono) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Debe completar todos los campos.',
      confirmButtonColor: '#0353A4',
      background: '#061A40',
    });
    e.stopPropagation();
  } else{
    fetch('enviar.php', {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => response.text())
    .then(data => {
      // Mostrar el SweetAlert de Ã©xito despuÃ©s de enviar el formulario
      Swal.fire({
        icon: 'success',
        title: 'Consulta enviada exitosamente',
        text: 'Sera contactado por nosotros brevemente,muchas gracias',
        confirmButtonColor: '#0353A4',
        background: '#061A40',
      });
      for (const input of inputs) {
        input.value = ""; // Establecer el valor del campo a una cadena vacÃ­a
      }
      valores = {
        nombre: false,
        email: false,
        telefono: false,
        duda: false,
      }
    })
    .catch(error => {
      console.error('Error al enviar el formulario:', error);
    });
  }
})