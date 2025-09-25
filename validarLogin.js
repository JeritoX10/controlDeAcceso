const USUARIO_VALIDO = 'sara';
    const PASSWORD_VALIDA = '1234';
    let intentosRestantes = 3;
    let usuarioBloqueado = false;

    function validarLogin(event) {
      event.preventDefault();
      if (usuarioBloqueado) {
        alert('Usuario bloqueado.');
        return;
      }
      const usuario = document.getElementById('usuario').value;
      const password = document.getElementById('password').value;
      if (usuario === USUARIO_VALIDO && password === PASSWORD_VALIDA) {
        alert('Login exitoso.');
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('formularios').style.display = 'block';
      } else {
        intentosRestantes--;
        if (intentosRestantes > 0) {
          alert('Datos incorrectos. Intentos restantes: ' + intentosRestantes);
        } else {
          usuarioBloqueado = true;
          alert('Usuario bloqueado.');
        }
      }
    }
