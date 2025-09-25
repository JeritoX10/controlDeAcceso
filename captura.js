function capturarEstudiante(event) {
      event.preventDefault();
      const nombre = document.getElementById('nombreEstudiante').value;
      const codigo = document.getElementById('codigoEstudiante').value;
      alert('Estudiante capturado: ' + nombre + ' (Código: ' + codigo + ')');
    }

    function capturarAsignatura(event) {
      event.preventDefault();
      const nombre = document.getElementById('nombreAsignatura').value;
      const codigo = document.getElementById('codigoAsignatura').value;
      alert('Asignatura capturada: ' + nombre + ' (Código: ' + codigo + ')');
    }

    document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('loginForm').addEventListener('submit', validarLogin);
      document.getElementById('formEstudiante').addEventListener('submit', capturarEstudiante);
      document.getElementById('formAsignatura').addEventListener('submit', capturarAsignatura);
    });