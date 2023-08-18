$(document).ready(function() {
  $('#myForm').validate({
    rules: {
      nombre: 'required',
      apellido: 'required',
      email: {
        required: true,
        email: true,
      },
      telefono: {
        required: true,
        minlength: 10,
        digits: true,
      },
      mensaje: 'required',
    },
    messages: {
      nombre: 'Por favor, ingresa tu nombre',
      apellido: 'Por favor, ingresa tu apellido',
      email: {
        required: 'Por favor, ingresa tu correo electrónico',
        email: 'Por favor, ingresa un correo electrónico válido',
      },
      telefono: {
        required: 'Por favor, ingresa tu número de teléfono',
        minlength: 'Por favor, ingresa al menos 10 dígitos',
        digits: 'Por favor, ingresa solo números',
      },
      mensaje: 'Por favor, ingresa un mensaje',
    },
    submitHandler: function(form) {
      // Enviar datos al servidor Node.js
      $.ajax({
        type: 'POST',
        url: '/form', // Cambia esto por la ruta correcta si es diferente
        data: $(form).serialize(),
        success: function(response) {
          alert('¡Formulario enviado y datos insertados en la base de datos!');
          form.reset(); // Opcional: restablecer el formulario después de enviarlo
        },
        error: function(error) {
          alert('Hubo un error al enviar el formulario');
        },
      });
    },
  });
});
